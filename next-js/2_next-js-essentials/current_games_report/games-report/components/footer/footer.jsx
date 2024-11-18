import { geistMono, geistSans } from "@/lib/fonts/font";
import EmailIcon from "../icons/email-icons";
import PhoneIcon from "../icons/phone-icons";

export default function Footer() {
  return (
    <footer className="flex justify-evenly px-20 h-44 mt-36">
      <div
        className={`w-[50%] uppercase ${geistSans.className} text-[#FB78BD] font-extrabold text-4xl`}
      >
        gamesreport
      </div>
      <div className="flex-1">
        <div className="w-[50%] mx-auto">
          <h2 className="font-bold text-xl">Contact me</h2>
          <ul className="flex flex-col gap-1 mt-2">
            <li className={`${geistSans.className} font-base flex items-center gap-2`}>
              <EmailIcon />
              <p>dionovan7@gmail.com</p>
            </li>
            <li className={`${geistSans.className} font-base flex items-center gap-2`}>
              <PhoneIcon />
              <p>+62 831 2233 8866</p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
