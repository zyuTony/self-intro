import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tony Yu",
  description: "An Introduciton for Tony Yu",
  author: "YZY",
  keywords:
    "Zongyuan Yu, Tony Yu, Gap Inc, Data Scientist, UCSD, University of Chicago",
  image: "",
  url: "",
  openGraph: {
    type: "website",
    title: "Tony Yu",
    siteName: "Tony Yu",
    // image: "",
    // url: "",
    // width: 1200,
    // height: 630,
    // alt: "",
    description: "An Introduciton for Tony Yu",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
