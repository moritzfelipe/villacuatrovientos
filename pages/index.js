import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <div className="absolute z-10 top-0 left-0 text-white text-3xl p-4 uppercase">
          La Villa de los Cuatro Vientos
        </div>
        <video
          autoplay="autoplay"
          muted
          loop
          className="z-0 w-screen"
        >
          <source src="media/vcv_sm.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-12 px-6 text-center lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Find your peace in the mountains</span>
            <span className="block">Secure your dates</span>
          </h2>
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Check availability
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
