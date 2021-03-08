import { signOut } from "next-auth/client";
import Layout from "~/components/Layout";

const IndexPage = () => (
  <Layout title="Listings">
    <button onClick={() => signOut()}>sign out</button>
  </Layout>
);

export default IndexPage;
