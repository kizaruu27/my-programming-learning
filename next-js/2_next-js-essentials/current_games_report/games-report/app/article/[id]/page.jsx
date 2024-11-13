import Image from "next/image";

import coverImage from "../../../public/news-header-2.jpg";
import newsCover from "../../../public/news-header-1.jpg";
import { geistSans } from "@/lib/fonts/font";

export default async function ArticlePage({ params }) {
  const { id } = await params;

  return (
    <section className="flex gap-8">
      {/* Article content */}
      <div className="flex flex-col gap-4 w-[65%]">
        {/* Title */}
        <h1 className={`${geistSans.className} font-extrabold text-3xl`}>
          Blizzard Is Giving Out Free Diablo 4 Boosts (And Automatically Unlocking Those
          Annoying Lilith Altars)
        </h1>
        {/* Cover Image */}
        <Image src={coverImage} alt="cover image" className="w-full" />
        {/* Creator and Date */}
        <p className="italic text-sm">
          By <span className="text-[#FB78BD] font-bold">Dionovan R</span> and published on{" "}
          <span className="text-[#FB78BD] font-bold">20 Agustus 2023</span>
        </p>
        {/* Main article */}
        <main className={`${geistSans.className} flex flex-col gap-8 text-lg`}>
          <p>
            Diablo 4 is getting a "Welcome Back" booster for all players in the near
            future, one that will automatically level a chosen character to 50, let
            players choose between three different builds per class, and equip them with a
            new set of gear. It will also automatically unlock all of the Altars of Lilith
            for those who hadn't yet scoured the game's world to collect them all.
          </p>
          <p>
            Blizzard announced the news as part of its most recent Diablo 4 Campfire Chat,
            where it covered balance changes coming as part of the mid-Season 6 update and
            answered fan questions.
          </p>
          <p>
            The boost will only be for characters on the game's Eternal (non-seasonal)
            realms, and is being done in part because of how the game's Season 4 Loot
            Reborn update and its more recent Vessel of Hatred update dramatically rebuilt
            the game in terms of loot, difficulty, leveling, and progression. Those
            updates in the process broke gear and builds for those who hadn't played in a
            while. Those who own the base game will receive one free character boost,
            while those who own the Vessel of Hatred expansion will receive two.
          </p>
        </main>
      </div>

      <div className="w-[35%] right-4 top-28">
        {/* Other news items */}
        <div className="flex gap-3 mt-10">
          <div>
            <Image src={newsCover} alt="news cover" width={650} />
          </div>
          <div className="flex flex-col justify-evenly">
            <h1 className="text-base font-bold">
              Mario & Luigi: Brothership And Over A Dozen Other....
            </h1>
            <div className="text-sm italic flex gap-4 text-nowrap mt-1">
              <p>Dionovan Rama</p>
              <p>1 Oktober 2024</p>
            </div>
          </div>
        </div>
        <div className="flex gap-3 mt-10">
          <div>
            <Image src={newsCover} alt="news cover" width={650} />
          </div>
          <div className="flex flex-col justify-evenly">
            <h1 className="text-base font-bold">
              Lorem ipsum dolor, sit amet consectetur.....
            </h1>
            <div className="text-sm italic flex gap-4 text-nowrap mt-1">
              <p>Dionovan Rama</p>
              <p>1 Oktober 2024</p>
            </div>
          </div>
        </div>
        <div className="flex gap-3 mt-10">
          <div>
            <Image src={newsCover} alt="news cover" width={650} />
          </div>
          <div className="flex flex-col justify-evenly">
            <h1 className="text-base font-bold">
              Mario & Luigi: Brothership And Over A Dozen Other....
            </h1>
            <div className="text-sm italic flex gap-4 text-nowrap mt-1">
              <p>Dionovan Rama</p>
              <p>1 Oktober 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
