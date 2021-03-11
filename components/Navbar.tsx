import { useSession } from "next-auth/client";
import Link from "next/link";
import { signOut } from "next-auth/client";
import { useState } from "react";

export default function Navbar() {
  const [session] = useSession();

  const [dropdown, setShowDropdown] = useState(false);

  return (
    <nav className="py-6 bg-primary-50">
      <div className="flex items-center justify-between mx-auto max-w-screen-2xl">
        <Link href="/">
          <a className="font-bold text-heading-2 text-primary-500">Vend</a>
        </Link>
        <ul className="flex items-center space-x-3">
          <li>
            <Link href="/">
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
          {!session ? (
            <>
              {" "}
              <li>
                <Link href="/signin">
                  <a className="px-4 py-2 font-semibold text-white duration-150 rounded bg-primary-500 hover:bg-primary-400">
                    Sign In
                  </a>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="relative">
                <button onClick={() => setShowDropdown(!dropdown)}>
                  <img
                    src={session?.user?.image}
                    alt={`${session?.user?.name}'s avatar`}
                    className="w-8 h-8 rounded-full"
                  />
                </button>
                <div
                  className={`${
                    dropdown ? "block" : "hidden"
                  } absolute right-0 bg-white shadow-lg w-max px-2 py-4 rounded`}
                >
                  <ul>
                    <li>
                      <Link href="/create">
                        <a className="block w-full px-2 py-1 duration-150 rounded opacity-50 hover:opacity-100 hover:text-primary-500 hover:bg-primary-50">
                          Post Ad
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/ads">
                        <a className="block w-full px-2 py-1 duration-150 rounded opacity-50 hover:opacity-100 hover:text-primary-500 hover:bg-primary-50">
                          My Ads
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/settings">
                        <a className="block w-full px-2 py-1 duration-150 rounded opacity-50 hover:opacity-100 hover:text-primary-500 hover:bg-primary-50">
                          Account Settings
                        </a>
                      </Link>
                    </li>
                    <li
                      className="block w-full px-2 py-1 duration-150 rounded opacity-50 cursor-pointer hover:opacity-100 hover:text-primary-500 hover:bg-primary-50"
                      onClick={() => signOut()}
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
