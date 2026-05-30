export default function RegisterPanel() {
  return (
    <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
      
      <h2 className="mb-6 text-3xl font-bold">
        Create account
      </h2>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 outline-none"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 outline-none"
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-white py-3 font-semibold text-black"
        >
          Register
        </button>
      </form>

    </div>
  );
}