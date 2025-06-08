// app/page.tsx
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-10">
      <div className="w-[350px] border border-gray-300 bg-white p-10 text-center">
        <img
          src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png"
          alt="Instagram"
          className="mx-auto mb-8 w-40"
        />

        <input
          type="text"
          placeholder="Phone number, username, or email"
          className="mb-2 w-full rounded border border-gray-300 bg-[#fafafa] px-3 py-2 text-sm focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-3 w-full rounded border border-gray-300 bg-[#fafafa] px-3 py-2 text-sm focus:outline-none"
        />
        <button className="w-full rounded bg-[#3897f0] py-2 text-sm font-semibold text-white">
          Log In
        </button>

        <div className="my-4 flex items-center justify-center">
          <div className="h-px w-full bg-gray-300" />
          <span className="px-4 text-sm text-gray-500">OR</span>
          <div className="h-px w-full bg-gray-300" />
        </div>

        <a href="#" className="mb-3 block text-sm font-semibold text-[#385185]">
          Log in with Facebook
        </a>
        <a href="#" className="text-xs text-[#00376b]">Forgot password?</a>
      </div>

      <div className="mt-4 w-[350px] border border-gray-300 bg-white py-5 text-center text-sm">
        Don’t have an account? <a className="font-semibold text-[#0095f6]" href="#">Sign up</a>
      </div>
    </div>
  )
}
