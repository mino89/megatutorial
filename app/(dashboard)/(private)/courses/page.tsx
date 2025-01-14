import { createClient } from "@/utils/supabase/server";
import CoursesList from "./_components/courses-list";
import PurchaseButton from "@/components/layout/purchase";

const CoursesPage = async () => {
  const supabaseClient = await createClient();
  const user = await supabaseClient.auth.getUser();
  const userEmail = user.data.user?.email;

  let hasActiveSub = false;
  if (userEmail) {
    const { error } = await supabaseClient
      .from("subscriptions")
      .select()
      .eq("email", userEmail)
      .eq("active", true)
      .single();

    if (!error) {
      hasActiveSub = true;
    }
  }
  const { data } = hasActiveSub
    ? await supabaseClient.from("lessons").select()
    : await supabaseClient.from("lessons").select().limit(1);

  return (
    <div className="py-24 px-10 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold">Lezioni</h1>
      {!data?.length ? (
        <div>Non ci sono lezioni!</div>
      ) : (
        <>
          <CoursesList lessons={data} />
          {!hasActiveSub && (
            <PurchaseButton
              price_id={process.env.NEXT_PUBLIC_STRIPE_PRICE_ID || ""}
            />
          )}
        </>
      )}
    </div>
  );
};

export default CoursesPage;
