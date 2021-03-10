import Layout from "~/components/Layout";

export default function About() {
  return (
    <Layout title="About">
      <div className="flex flex-col items-center mt-11 md:mt-36">
        <h1 className="font-semibold text-heading-3 text-primary-500">About</h1>
        <p className="max-w-5xl leading-relaxed">
          Vend is an online buying / selling platform I made to try new
          technologies as well as create a place where people can sell their
          unwanted items. This is still just a rough version and I hope to
          revisit this project in the future to update UX and more features.
        </p>
      </div>
    </Layout>
  );
}
