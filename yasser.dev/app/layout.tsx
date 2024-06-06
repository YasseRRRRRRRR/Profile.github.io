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
      <body className={`${inter.className} bg-Beige  `}>
        {/* <Header /> */}
        {children}
        hi
      </body>
    </html>
  );
}
