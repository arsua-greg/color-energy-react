import { Fragment } from "react";

export default function Button(props) {
  return (
    <Fragment>
      <button
        className="btn block mx-auto rounded-md bg-[#04512A] border-none text-white text-xl sm:max-w-[612px] max-w-[280px] w-full"
        disabled={true}
      >
        {props.text}
      </button>
    </Fragment>
  );
}
