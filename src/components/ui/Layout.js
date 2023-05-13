import { Fragment } from "react";

import Header from "../page/Header";
import Footer from "../page/Footer";

export default function Layout(props) {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}
