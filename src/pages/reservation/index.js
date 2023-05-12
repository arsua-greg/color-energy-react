import { Fragment, useState } from "react";
import Button from "../../components/ui/Button";
import OptionSelection from "../../components/functional/OptionSelection";
import styles from "../../styles/ReservationForm.module.css";

export default function ReservationPage() {
  const [count, setCount] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  const decrementCount = () => {
    setCount(count - 1);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <Fragment>
      <div className="max-w-[1120px] mx-auto md:mt-16 mt-8 lg:px-5 px-0">
        <div className="border-b border-[#D9D9D9] md:pb-10 pb-6 lg:px-0 px-5">
          <div className="md:px-0">
            <h1 className="font-bold md:text-3xl text-xl">
              しゃぶ葉 渋谷駅前店
            </h1>
            <div className="md:flex md:mt-12 mt-6">
              <div className="flex md:w-1/2 md:bg-[#EDEDED] justify-between p-5 md:mr-3">
                <div className="w-1/2">
                  <p className="font-xl">人数</p>
                </div>
                <div
                  className={`${styles.psuedo} text-center relative flex items-center`}
                >
                  <button
                    className="btn bg-[#04512A] border-0 p-0 text-sm min-h-0 h-6 w-6 rounded-[4px] items-start"
                    onClick={decrementCount}
                  >
                    <p className="text-white text-xl leading-none">-</p>
                  </button>
                  <input
                    className="bg-transparent text-center text-lg w-[94px] appearance-none outline-none"
                    type="number"
                    name="number"
                    id="number"
                    value={`${count}`}
                    onChange={(e) => setCount(parseInt(e.target.value))}
                  />
                  <button
                    className="btn bg-[#04512A] border-0 p-0 text-sm min-h-0 h-6 w-6 rounded-[4px] items-start"
                    onClick={incrementCount}
                  >
                    <p className="text-white text-xl leading-none">+</p>
                  </button>
                </div>
              </div>
              <div className="flex md:w-1/2 md:bg-[#EDEDED] justify-between p-5 md:ml-3">
                <p className="font-xl">時間</p>
                <select
                  className="bg-white border border-[#8E8E8E] rounded md:max-w-[412px] w-1/2 md:pl-6 text-base"
                  name="time"
                  id=""
                  onChange={(e) => e.target.value}
                  defaultValue="選択してください"
                >
                  <option disabled>選択してください</option>
                  <option value="time1">Time 1</option>
                  <option value="time2">Time 2</option>
                  <option value="time3">Time 3</option>
                </select>
              </div>
            </div>
          </div>
          <p className="md:text-lg text-sm md:mt-14 mt-9 md:px-0">
            席のみのご予約となります。コースの選択については店舗にご来店後、各テーブルにてお伝えください。
          </p>
        </div>
        <OptionSelection />
        <Button text="入力・確認画面に進む" />
      </div>
    </Fragment>
  );
}
