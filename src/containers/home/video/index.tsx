"use client";

import { useRef, useState } from "react";

import Image from "next/image";

import { FiPlay } from "react-icons/fi";

import { Grid } from "@/components/ui/grid";
import { Section } from "@/components/ui/section";

export default function HomeVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [playing, setPlaying] = useState(false);

  const handleStartPlaying = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  // const onPlay = () => {
  //   setPlaying(true);
  // };

  // const onPause = () => {
  //   if (videoRef.current?.seeking) {
  //     return;
  //   }
  //   setPlaying(false);
  // };

  // useEffect(() => {
  //   const video = videoRef.current;

  //   if (video) {
  //     video.addEventListener("play", onPlay);
  //     video.addEventListener("pause", onPause);
  //   }

  //   return () => {
  //     if (video) {
  //       video.removeEventListener("play", onPlay);
  //       video.removeEventListener("pause", onPause);
  //     }
  //   };
  // }, []);

  return (
    <Section className="relative py-0 lg:py-0 2xl:py-0">
      <div className="container relative z-10">
        <Grid>
          <div className="col-span-12">
            <div className="rounded-2xl border border-neutral-100 bg-white p-4 shadow-xl">
              <div className="relative aspect-video">
                {!playing && (
                  <div className="absolute z-10 h-full w-full">
                    <Image src="/poster.jpg" alt="Video poster" fill priority />
                  </div>
                )}

                {!playing && (
                  <button
                    className="group absolute z-20 flex h-full w-full items-center justify-center"
                    onClick={handleStartPlaying}
                  >
                    <div className="group flex h-20 w-20 items-center justify-center rounded-full bg-navy-700 transition-colors group-hover:bg-navy-500">
                      <FiPlay className="relative left-0.5 h-10 w-10 text-white" />
                    </div>
                  </button>
                )}

                <video ref={videoRef} controls loop className="h-full w-full">
                  <source
                    src="https://global-ecosystem-atlas-staging-assets-bucket.s3.eu-west-3.amazonaws.com/app/teaser-video/2024091800/GEA_teaser_preview3.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </Grid>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 -z-0 h-1/3 w-full bg-navy-700" />
    </Section>
  );
}
