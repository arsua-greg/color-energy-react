import Link from "next/link";

export default function AdvancedOptions() {
  return (
    <div className="mb-16 lg:px-0 px-5">
      <p className="md:text-lg text-sm">
        このオプションは以下の詳細設定が可能です。
      </p>
      <div className="md:flex mt-4">
        <div className="md:w-1/2 flex items-center md:bg-[#EDEDED] md:p-5 justify-between md:mr-3 md:mb-0 mb-4">
          <p className="text-lg">提供方法</p>
          <select
            className="bg-white border border-[#8E8E8E] rounded md:max-w-[328px] md:w-full w-[175px] p-1.5"
            name=""
            id=""
          >
            <option value="1個">1個</option>
            <option value="2個">2個</option>
            <option value="3個">3個</option>
            <option value="4個">4個</option>
          </select>
        </div>
        <div className="md:w-1/2 flex items-center md:bg-[#EDEDED] md:p-5 justify-between md:ml-3">
          <p className="text-lg">提供時間</p>
          <select
            className="bg-white border border-[#8E8E8E] rounded md:max-w-[328px] md:w-full w-[175px] p-1.5"
            name=""
            id=""
          >
            <option value="ネコロボ">ネコロボ</option>
            <option value="従業員">従業員</option>
          </select>
        </div>
      </div>
      <div className="md:flex mt-4">
        <div className="md:w-1/2 flex items-center md:bg-[#EDEDED] md:p-5 justify-between md:mr-3 md:mb-0 mb-4">
          <p className="text-lg">提供タイミング</p>
          <select
            className="bg-white border border-[#8E8E8E] rounded md:max-w-[328px] md:w-full w-[175px] p-1.5"
            name=""
            id=""
          >
            <option value="15分後">15分後</option>
            <option value="30分後">30分後</option>
            <option value="45分後">45分後</option>
            <option value="60分後">60分後</option>
            <option value="その他">その他</option>
          </select>
        </div>
        <div className="md:w-1/2 flex items-center md:p-5 justify-between md:ml-3 md:pl-0">
          <p className="text-[13px] md:text-xs">
            ※ネコロボについての詳細は
            <Link className="text-[#008EFF]" href="/">
              こちら
            </Link>
            　
            <br />
            ※提供タイミングはコース注文からの経過時間での設定となります。
          </p>
        </div>
      </div>
      <p className="text-[13px] md:text-xs mt-5">
        ※「その他」を選択、またはご要望などがある場合には下記のご要望欄に詳細を記載してください。（最大200文字）
      </p>
      <textarea
        className="bg-white rounded border border-[#757575] mt-7 p-3 max-w-[634px] w-full max-h-[132px] h-full text-sm"
        name=""
        id=""
        rows="10"
        placeholder="オプションに関するご要望は、こちらに記載してください。"
      ></textarea>
    </div>
  );
}
