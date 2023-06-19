import Nav from "./components/Nav";
import AuthContext from "./context/AuthContext";
import SWRConfigContext from "./context/SWRConfigContext";
import "./globals.css";
import { Open_Sans } from "next/font/google";

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
      <body className="max-w-screen-xl overflow-auto mx-auto">
        <AuthContext>
          <header className="sticky top-0 bg-white z-10 border-b border-gray-400">
            <Nav />
          </header>
          <main className="w-full flex justify-center bg-neutral-50 min-h-full">
            <SWRConfigContext>{children}</SWRConfigContext>
          </main>
        </AuthContext>
      </body>
    </html>
  );
}
