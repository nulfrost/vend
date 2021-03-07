import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-between px-10 py-16 md:flex-row md:items-center bg-primary-500">
      <Link href="/">
        <a className="mb-4 font-bold text-white text-heading-1 md:mb-0">Vend</a>
      </Link>
      <ul className="flex space-x-3 text-white">
        <li>
          <Link href="/">
            <a>Listings</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <a
            href="https://github.com/nulfrost/vend"
            target="_blank"
            rel="noreferrer noopener"
          >
            Github
          </a>
        </li>
      </ul>
    </footer>
  );
}
