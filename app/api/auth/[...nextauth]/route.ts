import { PrismaAdapter } from '@auth/prisma-adapter'
import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from '../../../../lib/prisma'
import bcrypt from 'bcryptjs'
import NextAuth from 'next-auth/next'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      name?: string
      email?: string
      image?: string
    }
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null
        }

        const admin = await prisma.admin.findUnique({
          where: { username: credentials.username },
        })

        if (!admin) {
          return null
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          admin.passwordHash
        )

        if (!isPasswordValid) {
          return null
        }

        return {
          id: admin.id.toString(),
          name: admin.username,
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/admin/login',
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub!
      }
      return session
    },
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST } 