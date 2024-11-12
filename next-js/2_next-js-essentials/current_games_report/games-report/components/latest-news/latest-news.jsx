import Link from "next/link";
import Image from "next/image";

import { geistSans } from "@/lib/fonts/font";

import newsHeader1 from "../../public/news-header-1.jpg";
import newsHeader2 from "../../public/news-header-2.jpg";
import newsHeader3 from "../../public/news-header-3.webp";

export default function LatestNews() {
  return (
    <>
      {/* Latest News Section */}
      <h1
        className={`${geistSans.className} text-[#FB78BD] font-extrabold text-xl uppercase`}
      >
        latest post
      </h1>
      <div className="grid grid-cols-2 gap-3 mt-5">
        <Link href="/article/1" className="row-span-2 flex flex-col">
          <Image src={newsHeader1} alt="news header" className="h-[350px] object-cover" />
          <div className="bg-[#222222] flex-1 flex flex-col p-5 gap-4">
            <h1 className="font-bold text-2xl">
              Presiden Sony Jelaskan Alasan Kenapa Concord Gagal
            </h1>
            <div className="flex gap-4 text-sm italic mt-4">
              <p>Bambang Sucipto</p>
              <p>9 November 2023</p>
            </div>
            <p className="text-base">
              Meski gamenya telah ditutup, Concord masih menjadi bayang – bayang kelam
              dalam sejarah game – game yang pernah…
            </p>
          </div>
        </Link>
        <Link href="article/2" className="h-72 flex flex-col">
          <Image src={newsHeader2} alt="news header" className="h-[60%] object-cover" />
          <div className="flex-1 bg-[#222222] flex flex-col p-3">
            <h1 className="font-bold text-base">
              Penjualan Switch Menurun Drastis Hingga 31%, Nintendo Turunkan Target
              Penjualan
            </h1>
            <div className="flex gap-4 text-sm italic mt-4">
              <p>Bambang Sucipto</p>
              <p>9 November 2023</p>
            </div>
          </div>
        </Link>
        <Link href="/article/3" className="h-72 cursor-pointer flex flex-col">
          <Image src={newsHeader3} alt="news header" className="h-[60%] object-cover" />
          <div className="flex-1 bg-[#222222] flex flex-col p-3">
            <h1 className="font-bold text-base">
              Nintendo Kini Pegang Hak Milik atas Situs Ryujinx dan Yuzu
            </h1>
            <div className="flex gap-4 text-sm italic mt-4">
              <p>Bambang Sucipto</p>
              <p>9 November 2023</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
