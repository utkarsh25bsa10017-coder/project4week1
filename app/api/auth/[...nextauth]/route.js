import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { isAdmin } from "../../../../lib/utils";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token }) {
      token.isAdmin = isAdmin(token.email);
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.isAdmin = Boolean(token.isAdmin);
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
