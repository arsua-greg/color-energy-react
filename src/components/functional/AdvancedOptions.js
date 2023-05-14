function AdvancedOptions() {
  return (
    <div className="mb-16 lg:px-0 px-5">
      <p className="md:text-lg text-sm">
        このオプションは以下の詳細設定が可能です。
      </p>
      <div className="md:flex mt-4">
        <div className="md:w-1/2 flex items-center md:bg-[#EDEDED] md:p-5 justify-between md:mr-3 md:mb-0 mb-4">
          <p className="text-lg">提供方法</p>
          <select
            className="bg-white border border-[#8E8E8E] rounded md:max-w-[328px] w-[175px] p-1.5"
            name=""
            id=""
          >
            <option value="ネコロボ">ネコロボ</option>
          </select>
        </div>
        <div className="md:w-1/2 flex items-center md:bg-[#EDEDED] md:p-5 justify-between md:ml-3">
          <p className="text-lg">提供時間</p>
          <select
            className="bg-white border border-[#8E8E8E] rounded md:max-w-[328px] w-[175px] p-1.5"
            name=""
            id=""
          >
            <option value="15分後">15分後</option>
          </select>
        </div>
      </div>
      <p className="text-xs mt-5">
        ※提供時間は、着席からの経過時間での設定となります。その他、ご要望などがある場合には「ご来店者情報」の「ご要望」欄に記載してください。
      </p>
    </div>
  );
}

export default AdvancedOptions;
