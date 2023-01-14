import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <video
          autoPlay
          muted
          loop
          controls
          disablePictureInPicture
          controlsList="nodownload noplaybackrate nopictureinpicture"
          className ="absolute z-1 w-auto min-w-full min-h-full max-w-none"
        >
          <source src="media/vcv_sm.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}
