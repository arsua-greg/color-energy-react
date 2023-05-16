import { Fragment } from "react";

interface ButtonProps {
  text: string;
  isDisabled?: boolean;
}

export default function Button({ text, isDisabled }: ButtonProps) {
  return (
    <Fragment>
      <button
        className="btn block mx-auto rounded-md bg-[#04512A] border-none text-white text-xl sm:max-w-[612px] max-w-[280px] w-full disabled:bg-[#04512A4D] disabled:text-white"
        disabled={isDisabled}
      >
        {text}
      </button>
    </Fragment>
  );
}
