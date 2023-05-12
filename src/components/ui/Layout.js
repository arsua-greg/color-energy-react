import { Fragment } from "react";

import Header from "../ui/Header";
import Footer from "../ui/Footer";

export default function Layout(props) {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}
