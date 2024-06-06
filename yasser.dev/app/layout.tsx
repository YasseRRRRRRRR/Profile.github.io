import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/component/header";
import ActiveSectionContextProvider from "@/context/activeContextSection";
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
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-bgPurple text-dPurple relative `}>
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
