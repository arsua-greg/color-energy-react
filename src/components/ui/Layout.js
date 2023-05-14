import { Fragment } from "react";
import { Inter } from "next/font/google";
import Header from "../page/Header";
import Footer from "../page/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function Layout(props) {
  return (
    <Fragment>
      <Header />
      <main className={`${inter.variable} font-sans`}>{props.children}</main>
      <Footer />
    </Fragment>
  );
}
