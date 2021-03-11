import { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type LayoutProps = {
  title: string;
  children: React.ReactNode;
};

export default function Layout({ title, children }: LayoutProps) {
  useEffect(() => {
    document.title = `Vend | ${title}`;
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
