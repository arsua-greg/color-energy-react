import { Fragment } from "react";

export default function Notes() {
  return (
    <Fragment>
      <div className="mt-5">
        <p className="text-lg font-bold">注意事項</p>
        <p className="md:text-sm text-xs leading-[17px]">
          ※ご登録いただいた情報（お名前・電話番号を含む）は、予約申し込みのために店舗に送られます。店舗が保有する個人情報の取り扱いについては、各店舗に直接お問い合わせください。
        </p>
      </div>
      <div className="mt-9 mb-9">
        <p className="text-lg font-bold">キャンセル規定</p>
        <p className="md:text-sm text-xs leading-[17px]">
          ※予約時間を15分過ぎてもお集まりいただけない場合キャンセル扱いとさせていただきます。入店時に予約している旨をスタッフにお伝えください。
          <br />
          ※予約成立後のキャンセルはキャンセル料が発生する場合があるほか、ご利用を制限させていただく場合がございます。
        </p>
      </div>
    </Fragment>
  );
}
