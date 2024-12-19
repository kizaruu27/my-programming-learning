import { signIn, signInWithGoogle } from "@/lib/firebase/service";
import { compare } from "bcrypt";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

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
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const user: any = await signIn({ email });
        if (user) {
          const confirmPassword = await compare(password, user.password);
          if (confirmPassword) return user;

          return null;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile, user }: any) {
      if (account?.provider === "credentials") {
        token.email = user.email;
        token.username = user.username;
        token.role = user.role;
      }

      if (account?.provider === "google") {
        const data = {
          username: user?.name,
          email: user?.email,
          image: user?.image,
          type: "google",
        };

        await signInWithGoogle(
          data,
          (result: {
            status: boolean;
            messege: string;
            data: {
              username: string;
              email: string;
              image: string;
              type: string;
              role: string;
            };
          }) => {
            console.log(result);
            if (result.status) {
              token.username = result.data.username;
              token.email = result.data.email;
              token.image = result.data.image;
              token.type = result.data.type;
              token.role = result.data.role;
            }
          }
        );
      }

      return token;
    },

    session({ session, token }: any) {
      if ("email" in token) session.user.email = token.email;
      if ("username" in token) session.user.username = token.username;
      if ("role" in token) session.user.role = token.role;
      if ("image" in token) session.user.image = token.image;
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};

export default NextAuth(authOption);
