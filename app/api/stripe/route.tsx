import { stripe } from "@/utils/stripe/stripe";
import { createAdminClient } from "@/utils/supabase/admin";

import { NextResponse, type NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  let event;

  const body = await req.text(); // Otherwise use the basic event deserialized with JSON.parse
  const requestHeaders = new Headers(req.headers);

  // Get the signature sent by Stripe
  const sig = requestHeaders.get("stripe-signature") as string | string[];
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_KEY ?? ""
    );
  } catch (err: any) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  const supabaseClient = await createAdminClient();
  try {
    // Handle the event
    switch (event.type) {
      case "invoice.payment_succeeded":
        const paymentInvoiceSucceeded = event.data.object as any;
        console.log(paymentInvoiceSucceeded);
        const customerEmail: string =
          paymentInvoiceSucceeded.customer_email ||
          "pierdomenicoreitano@gmail.com";

        const { error } = await supabaseClient.from("subscriptions").upsert(
          {
            email: customerEmail,
            stripeid: paymentInvoiceSucceeded.customer,
          },
          {
            onConflict: "email",
          }
        );

        if (error) {
          return NextResponse.json({ ok: false }, { status: 500 });
        }
        // const customerName: string =
        //   paymentInvoiceSucceeded.customer_name || "Pierdomenico";
        break;
      case "customer.subscription.deleted":
        const customerSub = event.data.object as any;

        const customerSubEmail: string =
          customerSub.customer_email || "pierdomenicoreitano@gmail.com";

        const { error: errorSub } = await supabaseClient
          .from("subscriptions")
          .upsert(
            {
              email: customerSubEmail,
              stripeid: customerSub.customer,
              active: false,
            },
            {
              onConflict: "email",
            }
          );
        if (errorSub) {
          console.log(errorSub.message);
          return NextResponse.json({ ok: false }, { status: 500 });
        }
      default:
        // Unexpected event type
        console.log(`Unhandled event type ${event.type}.`);
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
