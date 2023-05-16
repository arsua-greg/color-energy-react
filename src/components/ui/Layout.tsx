import { Fragment, ReactNode } from "react";
import { Inter } from "next/font/google";
import Header from "../page/Header.page";
import Footer from "../page/Footer.page";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <Fragment>
      <Header />
      <main className={`${inter.variable} font-sans`}>{props.children}</main>
      <Footer />
    </Fragment>
  );
}
