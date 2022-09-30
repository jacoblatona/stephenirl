import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { LatestVideos } from "@/components/LatestVideos";
import { prisma } from "@/lib/prisma";
import { Stats } from "@/components/Stats";
import { Livestreams } from "@/components/Livestreams";
import { Footer } from "@/components/Footer";

function Home({ videos }) {
  return (
    <>
      <div className="w-full bg-body">
        <NavBar />
        <Hero />
        <div className="container mx-auto">
          <Livestreams />
        </div>
        <Stats />
        <div className="container mx-auto">
          <LatestVideos videos={videos} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;

export async function getServerSideProps(context: any) {
  const videos = await prisma.video.findMany({
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
    select: {
      id: true,
      title: true,
      thumbnail: true,
      videoId: true,
    },
  });
  return {
    props: { videos }, // will be passed to the page component as props
  };
}
