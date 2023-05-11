import { Fragment } from "react";

import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function Layout(props) {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}
