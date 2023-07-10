import { Open_Sans } from "next/font/google";
import Nav from "./components/Nav";
import AuthContext from "./context/AuthContext";
import SWRConfigContext from "./context/SWRConfigContext";
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body className="w-full bg-neutral-50 overflow-auto">
        <AuthContext>
          <header className="sticky top-0 bg-white z-10 border-b border-gray-400">
            <div className="max-w-screen-xl mx-auto">
              <Nav />
            </div>
          </header>
          <main className="w-full flex justify-center ">
            <SWRConfigContext>{children}</SWRConfigContext>
          </main>
        </AuthContext>
        <div id="portal" />
      </body>
    </html>
  );
}
