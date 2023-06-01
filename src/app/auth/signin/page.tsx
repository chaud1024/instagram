import SingIn from "@/app/components/SignIn";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  searchParams: {
    callbackUrl: string;
  };
};

export default async function SignInpage({
  searchParams: { callbackUrl },
}: Props) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  const providers = (await getProviders()) ?? {};

  return (
    <section className="flex justify-center items-center mt-[30%]">
      <SingIn providers={providers} callbackUrl={callbackUrl ?? "/"} />
    </section>
  );
}
