import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { JWT } from 'next-auth/jwt';
import { DefaultSession, Session } from 'next-auth';
import { NextAuthOptions } from "next-auth"

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                },
            },
        }),
    ],
    pages: {
        signIn: '/auth/signin',
    },
    callbacks: {
        async jwt({ token, account }) {
            if (account) {
                token.accessToken = account.access_token;
                token.refreshToken = account.refresh_token;
            }
            return token;
        },
        async session({ session, token }) {
            session.accessToken = token.accessToken;
            session.refreshToken = token.refreshToken;
            return session;
        },
    },
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXT_AUTH_KEY
};
