import { Fragment, useState } from "react";
import AdvancedOptions from "./AdvancedOptions";
import ProductList from "./ProductList";

export default function OptionSelection() {
  const [isChecked, setIsChecked] = useState(false);

  function productSelectionHandler() {
    setIsChecked(!isChecked);
  }

  const advancedOptions = isChecked ? <AdvancedOptions /> : null;

  return (
    <Fragment>
      <div className="mt-4 mb-6 lg:px-0 px-5">
        <p className="text-lg leading-[22px]">
          オプション選択{" "}
          <span className="text-xs text-white bg-[#ABABAB] font-semibold rounded p-[3px] pl-[6px] ml-2">
            必須
          </span>
        </p>
        <p className="text-xs mt-3">※不要な場合はチェック無し。</p>
        <ProductList onChangeCheckbox={productSelectionHandler} />
      </div>
      {advancedOptions}
    </Fragment>
  );
}
