"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { FormState, registerAction } from "../actions";
import { useActionState } from "react";
import FormButton from "@/components/ui/form-button";
const initialState: FormState = {
  message: "",
};
function Register() {
  const [state, formAction, pending] = useActionState(
    registerAction,
    initialState
  );
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className={cn("flex flex-col gap-6")}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Sign Up</CardTitle>
              <CardDescription>Enter your data to signup</CardDescription>
            </CardHeader>
            <CardContent>
              <form action={formAction}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="m@example.com"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                    </div>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password-confirm">Confirm Password</Label>
                    </div>
                    <Input
                      id="password-confirm"
                      name="password-confirm"
                      type="password"
                      required
                    />
                  </div>

                  <FormButton pending={pending}>Login</FormButton>

                  <div className="text-green-400">{state.message}</div>
                  <div className="text-red-400">{state?.error}</div>
                </div>
                <div className="mt-4 text-center text-sm">
                  Already have an account?{""}
                  <Link href="/login" className="underline underline-offset-4">
                    Login
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Register;
