import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Next Project",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  // console.log(user, "this is user ");
  return (
    <html lang="en" className="p-4 bg-black container mx-auto  ">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav>
          <div className="navbar ">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    {" "}
                    <Link href="/">Home</Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link href="/profile">Profile</Link>{" "}
                  </li>
                  <li>
                    <div className="avatar">
                      <div className="w-10 rounded-full">
                        <img src={user?.picture} />
                      </div>
                    </div>{" "}
                  </li>
                </ul>
              </div>
              <a className="btn btn-ghost text-xl">NEXT.JS</a>
            </div>
            <div className="navbar-center hidden lg:flex ">
              <ul className="menu items-center menu-horizontal px-1">
                <li>
                  {" "}
                  <Link href="/">Home</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href="/profile">Profile</Link>{" "}
                </li>
                <li>
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src={user?.picture} />
                    </div>
                  </div>{" "}
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              {user?.email ? (
                <button className="btn">
                  {" "}
                  <LogoutLink>Log out</LogoutLink>
                </button>
              ) : (
                <button className="btn">
                  <LoginLink postLoginRedirectURL="/">Sign in</LoginLink>
                </button>
              )}
            </div>
          </div>
        </nav>

        <hr />

        {children}
      </body>
    </html>
  );
}
