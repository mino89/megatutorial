import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32">
      <div className="container mx-auto space-y-10 xl:space-y-16">
        <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              The complete platform for building the Web
            </h1>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Beautifully designed components that you can copy and paste into
              your apps. Accessible. Customizable. Open Source.
            </p>
            <div className="space-x-4">
              <Button asChild variant="outline">
                <Link href="#pricing">Get started</Link>
              </Button>
            </div>
          </div>
        </div>
        <Image
          src="/placeholder.svg"
          width="1270"
          height="300"
          alt="Hero"
          className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
