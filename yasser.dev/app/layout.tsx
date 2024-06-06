import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/component/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yasser | Personal Portfolio",
  description: "I am a Full-Stack developper",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-Beige text-dPurple relative `}>
        <Header />
        {/* <header className="z-[999] relative">
          <div
            className="fixed left-1/2 h-[5.5rem] w-[212rem] rounded-none border-2 border-dPurple  bg-white bg-opacity-80  sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
            // initial={{ y: -150, x: "-50%", opacity: 0 }}
            // animate={{ y: 0, x: "-50%", opacity: 1 }}
          ></div>
        </header> */}
        {/* <nav className="fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium sm:w-[initial] sm:flex-nowrap sm:gap-5">
            <li className="h-3/4 flex items-center justify-center"><a className="flex w=full items-center justify-center p-3 hover:text-purple-950" href="#">BulllShit</a></li>
            <li className="h-3/4 flex items-center justify-center"><a className="flex w=full items-center justify-center p-3 hover:text-purple-950" href="#">BulllShit</a></li>
            <li className="h-3/4 flex items-center justify-center"><a className="flex w=full items-center justify-center p-3 hover:text-purple-950" href="#">BulllShit</a></li>
            <li className="h-3/4 flex items-center justify-center"><a className="flex w=full items-center justify-center p-3 hover:text-purple-950" href="#">BulllShit</a></li>
            <li className="h-3/4 flex items-center justify-center"><a className="flex w=full items-center justify-center p-3 hover:text-purple-950" href="#">BulllShit</a></li>
          </ul>
        </nav> */}
        {children}
      </body>
    </html>
  );
}
