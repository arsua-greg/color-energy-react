import { Fragment, useState } from "react";
import Button from "../../components/ui/Button";
import OptionSelection from "../../components/functional/OptionSelection";
import styles from "../../styles/ReservationForm.module.css";
import Link from "next/link";

export default function ReservationPage() {
  const [count, setCount] = useState(2);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  function handleCheckboxChange(checked) {
    setIsButtonDisabled(!checked);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("clicked");
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="max-w-[1120px] mx-auto md:mt-16 mt-8 lg:px-5 px-0">
          <div className="border-b border-[#D9D9D9] md:pb-10 pb-6 lg:px-0 px-5">
            <div className="md:px-0">
              <Link href="shopname" className="font-bold md:text-3xl text-xl">
                しゃぶ葉 渋谷駅前店
              </Link>
              <div className="md:flex md:mt-12 mt-6">
                <div className="flex md:w-1/2 md:bg-[#EDEDED] justify-between md:p-5 p-0 md:mr-3">
                  <div className="w-1/2">
                    <p className="font-xl">人数</p>
                  </div>
                  <div
                    className={`${styles.psuedo} text-center relative flex items-center`}
                  >
                    <button
                      className="btn bg-[#04512A] border-0 p-0 text-sm min-h-0 h-6 w-6 rounded-[4px] items-start"
                      onClick={() => setCount(count - 1)}
                      disabled={count <= 1}
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
                      min={1}
                      max={16}
                    />
                    <button
                      className="btn bg-[#04512A] border-0 p-0 text-sm min-h-0 h-6 w-6 rounded-[4px] items-start"
                      onClick={() => setCount(count + 1)}
                      disabled={count >= 16}
                    >
                      <p className="text-white text-xl leading-none">+</p>
                    </button>
                  </div>
                </div>
                <div className="flex md:w-1/2 md:bg-[#EDEDED] justify-between md:p-5 p-0 md:ml-3 mt-5 md:mt-0">
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
          <OptionSelection onCheckboxChange={handleCheckboxChange} />
          <Button text="入力・確認画面に進む" isDisabled={isButtonDisabled} />
        </div>
      </form>
    </Fragment>
  );
}
