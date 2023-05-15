import Image from "next/image";

export default function Footer() {
  return (
    <footer className="container mx-auto max-w-[1120px] px-5 text-center pt-6 pb-8 relative">
      <div className="logo flex justify-center mb-2">
        <Image src="/assets/footer_logo.png" alt="" width={228} height={38} />
      </div>
      <p className="">Copyright &#169; SKYLARK GROUP All rights reserved.</p>
      <div className="absolute right-0 bottom-7 w-[92px]">
        <Image src="/assets/back_to_top.svg" alt="" width={92} height={75} />
      </div>
    </footer>
  );
}
