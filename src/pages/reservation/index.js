import { Fragment } from "react";
import Steps from "../../components/layout/Steps";
import ReservationForm from "../../components/ReservationForm";

export default function ReservationPage() {
  return (
    <Fragment>
      <Steps />
      <div className="max-w-[1120px] mx-auto">
        <section className="sect_1">
          <div className="my-5 md:flex pb-6 border-b border-[#D9D9D9]">
            <div className="flex md:w-1/2 px-5">
              <div className="w-1/2">
                <p className="text-lg font-bold">ご予約内容</p>
                <p>ご来店日</p>
                <p>ご来店時間</p>
                <p>人数</p>
              </div>
              <div className="w-1/2 text-right">
                <p className="text-[#04512A] text-base underline underline-offset-4">
                  変更する
                </p>
                <p>2023年03月17日(金)</p>
                <p>11:00</p>
                <p>3名</p>
              </div>
            </div>
            <div className="flex md:w-1/2 px-5 mt-9 md:mt-0">
              <div className="w-1/2">
                <p className="text-lg font-bold">オプション選択</p>
              </div>
              <div className="w-1/2 text-right">
                <p className="text-[#04512A] text-base underline underline-offset-4">
                  変更する
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="sect_2 px-5">
          <ReservationForm />
        </section>
      </div>
    </Fragment>
  );
}
