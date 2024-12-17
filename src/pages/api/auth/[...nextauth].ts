import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOption: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password, username } = credentials as {
          email: string;
          password: string;
          username: string;
        };
        const user: any = { id: 1, email, password, username };
        if (user) return user;
        else return null;
      },
    }),
  ],
  callbacks: {
    jwt({ token, account, profile, user }: any) {
      if (account?.provider === "credentials") {
        token.email = user.email;
        token.username = user.username;
      }

      return token;
    },

    session({ session, token }: any) {
      if ("email" in token) session.user.email = token.email;
      if ("username" in token) session.user.username = token.username;
      return session;
    },
  },
};

export default NextAuth(authOption);
