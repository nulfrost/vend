import { signIn, useSession } from "next-auth/client";
import Layout from "~/components/Layout";

export default function SignIn() {
  const [session] = useSession();

  console.log(session);

  return (
    <Layout title="Sign In">
      <div className="flex flex-col items-center mt-11 md:mt-36">
        <div className="mb-4 text-center">
          <h1 className="-mb-2 font-bold text-heading-3 text-primary-500">
            Vend
          </h1>
          <p>Sign in with one of these providers</p>
        </div>
        <div className="flex flex-col space-y-2">
          <button
            className="px-4 py-3 text-white duration-150 bg-black rounded w-max hover:bg-opacity-75"
            onClick={() => signIn("github")}
          >
            Sign in with Github
          </button>
          <button className="px-4 py-3 text-white duration-150 bg-red-600 rounded w-max hover:bg-opacity-75">
            Sign in with Google
          </button>
        </div>
      </div>
    </Layout>
  );
}
