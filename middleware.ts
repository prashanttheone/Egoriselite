import NextAuth from 'next-auth'
import { authConfig } from './auth'

export const { auth, signIn, signOut } = NextAuth(authConfig)

export default auth((req) => {
  const isLoggedIn = !!req.auth
  const { nextUrl } = req
  const isAuthPage = nextUrl.pathname.startsWith('/auth')

  if (isAuthPage) {
    if (isLoggedIn) {
      return Response.redirect(new URL('/', nextUrl))
    }
    return null
  }

  return null
})

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
} 