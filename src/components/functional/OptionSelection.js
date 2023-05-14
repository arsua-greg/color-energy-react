import { Fragment, useState } from "react";
import AdvancedOptions from "./AdvancedOptions";

export default function OptionSelection({ onCheckboxChange }) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange(e) {
    const checked = e.target.checked;
    onCheckboxChange(checked);
    setIsChecked(!isChecked);
  }

  const advancedOptions = isChecked ? <AdvancedOptions /> : null;

  return (
    <Fragment>
      <div className="mt-4 mb-20 lg:px-0 px-5">
        <p className="text-lg leading-[22px]">
          オプション選択{" "}
          <span className="text-xs text-white bg-[#ABABAB] font-semibold rounded p-[3px] pl-[6px] ml-2">
            必須
          </span>
        </p>
        <p className="text-xs mt-3">
          ※不要な場合はチェック無し。※ケーキは1グループに対して1個となります。複数個ご注文される場合は、お手数ですがお電話にてご連絡をお願いいたします。
        </p>
        <div className="rounded shadow-[2px_2px_4px_3px_rgba(0,0,0,0.1)] mt-7 bg-white p-6 flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="checkbox rounded border border-[#8E8E8E] bg-white w-6 h-6"
              onChange={handleCheckboxChange}
            />
            <div className="flex items-center md:px-6 px-4">
              <p className="md:pr-7 pr-4">IMAGE</p>
              <div>
                <p className="md:text-lg text-[13px] font-bold">
                  【記念日のお祝いに】アニバーサリーケーキ　＋330円(税込)
                </p>
                <p className="md:text-sm text-[10px]">
                  利用人数：2名～　予約締切：来店日の2日前21時まで
                </p>
              </div>
            </div>
          </div>
          <p className="text-[#04512A] text-lg underline underline-offset-2 self-center">
            詳細
          </p>
        </div>
      </div>
      {advancedOptions}
    </Fragment>
  );
}
