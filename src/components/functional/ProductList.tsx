import Image from "next/image";
import ProductModal from "../ui/ProductModal";

interface ProductSelectionProps {
  onChangeCheckbox: () => void;
}

export default function ProductList({
  onChangeCheckbox,
}: ProductSelectionProps) {
  return (
    <div className="rounded-lg shadow-[2px_2px_4px_3px_rgba(0,0,0,0.1)] mt-7 bg-white md:p-6 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="checkbox rounded border border-[#8E8E8E] bg-white w-6 h-6"
          onChange={onChangeCheckbox}
        />
        <div className="flex items-center md:px-6 px-4">
          <div className="md:pr-7 pr-4">
            <Image
              src="/assets/product_image.png"
              alt=""
              width={78}
              height={86}
            />
          </div>
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
      <ProductModal />
    </div>
  );
}
