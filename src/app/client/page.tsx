"use client";

import UserCard from "@/_components/UserCard";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

function Page() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/client");
    },
  });

  return (
    <section className="flex flex-col gap-6">
      <UserCard user={session?.user} pagetype={"Client"} />
    </section>
  );
}

export default Page;
