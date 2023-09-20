import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import Users from "@/lib/schemas/Users";
import { connectToDB } from "@/lib/utils/mongo_connection";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "example@domain.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, _req) {
        const { email, password } = credentials;

        try {
          await connectToDB();
          const user = await Users.findOne({ email: email });
          if (!user) {
            throw new Error("User with email " + email + " not found");
          }

          const isPassword = await compare(password, user.password);
          if (!isPassword) {
            throw new Error("Invalid credentials");
          }

          return { id: user._id, name: user.email, email: user.email };
        } catch (e) {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  // callbacks: {
  //   async session({ session, token }) {
  //     session.user.id = token.sub;

  //     return session;
  //   },
  // },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
