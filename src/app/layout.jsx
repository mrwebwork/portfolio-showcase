import { RootLayout } from "@/components/RootLayout";

import clsx from "clsx";

import { Montserrat } from "next/font/google";

import "@/styles/tailwind.css";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: 'Allan Hillman',
  description:
    "I apply my passion for coding and strategic thinking to transform complex problems into intuitive websites and user interfaces. My skills extend beyond development, aligning with a digital architect's role, and converting abstract ideas into interactive experiences.",
};

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-blue text-base antialiased">
      <body className={clsx("flex min-h-full flex-col mt-2", mont.className)}>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
