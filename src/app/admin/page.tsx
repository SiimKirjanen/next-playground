import React from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/api/auth/[...nextauth]/route";

async function page() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h2>Welcome to admin page!</h2>
      {JSON.stringify(session)}
    </div>
  );
}

export default page;
