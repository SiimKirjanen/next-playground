import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      provider_user_id: string;
    } & DefaultSession["user"];
  }
}
