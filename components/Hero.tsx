import React from "react";
import { ChevronDown, Download, Send } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary trackking-[4px]">
              Web Developer
            </div>
            <div className="h1 mb-4">Hi, my name is Ha Quyen</div>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              description
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={12} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                Download CV <Download size={12} />
              </Button>
            </div>
          </div>
          <div className="hidden xl:flex relative">img</div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12">
          <ChevronDown className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
}
