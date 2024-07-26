import { Elements } from "./_components/elements";
import {
  AboutUsTopics,
  OurStoryTopics,
  TeamsTopics,
} from "./_components/topics";

export default function AboutUs() {
  return (
    <div className="flex justify-around items-start w-full h-full xl:px-20 px-2 space-y-40 font-epilogue mb-40 mt-20">
      <main className="w-[90%] flex flex-col space-y-20 xl:space-y-0 xl:w-full">
        <AboutUsTopics Element={Elements[0]} />
        <OurStoryTopics Element={Elements[1]} />
        <TeamsTopics Element={Elements[2]} />
      </main>
    </div>
  );
}
