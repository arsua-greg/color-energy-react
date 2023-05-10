import { Fragment } from "react";

import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function Layout(props) {
  return (
    <Fragment>
      <Header />
      <main className="container mx-auto w-[1120px] px-5">
        {props.children}
      </main>
      <Footer />
    </Fragment>
  );
}
