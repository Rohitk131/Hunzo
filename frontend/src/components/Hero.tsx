"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex pl-96 ">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <Image src="/img1.png" alt="image1" width={1000} height={1000} className="rounded-2xl"/>
          </CarouselItem>
          <CarouselItem>
            <Image src="/img2.png" alt="image1" width={1000} height={1000} className="rounded-2xl"/>
          </CarouselItem>
          <CarouselItem>
            <Image src="/img3.png" alt="image1" width={1000} height={1000} className="rounded-2xl" />
          </CarouselItem>
          <CarouselItem>
            <Image src="/img4.png" alt="image1" width={1000} height={1000} className="rounded-2xl" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
