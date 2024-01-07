import TopFreeAppsWrapper from "@/components/home/TopFreeAppsWrapper";
import TopPaidAppsWrapper from "@/components/home/TopPaidAppsWrapper";
import SectionHeading from "@/components/home/section-heading/SectionHeading";
import SlideshowWrapper from "@/components/home/slideshow/SlideshowWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <article className="w-full max-w-full flex min-h-screen flex-col items-center justify-start ms-24 px-2 py-4 overflow-x-hidden">
      <SlideshowWrapper />
      <div className="app-container">
        <SectionHeading title="top free apps" href={"#"} />
        <TopFreeAppsWrapper />
        <SectionHeading title="top paid apps" href={"#"} />
        <TopPaidAppsWrapper />
      </div>
    </article>
  );
}
