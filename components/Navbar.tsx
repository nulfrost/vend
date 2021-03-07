import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6 bg-primary-50">
      <Link href="/">
        <a className="font-bold text-heading-2 text-primary-500">Vend</a>
      </Link>
      <ul className="flex space-x-3">
        <li>
          <Link href="/listings">
            <a className="duration-150 opacity-50 hover:opacity-100 hover:text-primary-500">
              Listings
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="duration-150 opacity-50 hover:opacity-100 hover:text-primary-500">
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href="/signin">
            <a className="px-4 py-2 font-semibold text-white duration-150 rounded bg-primary-500 hover:bg-primary-400">
              Sign In
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
