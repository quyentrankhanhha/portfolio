import React from "react";
import { Briefcase, ChevronDown, Download, Send, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import Social from "./Social";
import DevImg from "./DevImg";
import Badge from "./Badge";

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
                  Contact me <Send size={16} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                Download CV <Download size={16} />
              </Button>
            </div>
            <Social
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              containerIconStyles="inline-flex items-center justify-center w-10 h-10 mr-2 bg-secondary rounded-full focus:shadow-outline hover:text-secondary hover:bg-primary transition-all"
              iconStyles="text-[20px] rounded"
            />
          </div>
          <div className="hidden xl:flex relative">
            <Badge
              containerStyles="absolute top-[24%] -left-[8rem]"
              icon={<Briefcase />}
              endCountNum={1}
              badgeText="Year of experience"
            />
            <Badge
              containerStyles="absolute top-[75%] -right-[3rem]"
              icon={<Users />}
              endCountNum={3}
              badgeText="References"
            />
            <div className="bg-hero_shape2_light dark:hero_shape2_dark w-[580px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgStyles="bg-profile bg-cover bg-center w-[100%] h-[580px] right-[35px] rounded-full absolute"
            />
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12">
          <ChevronDown className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
}
