import React from "react";
import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export default function About() {
  const getData = (arr: any[], title: string) => {
    return arr.find((item) => item.title === title).data;
  };
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark h-[550px] w-full bg-no-repeat relative"
              imgStyles="bg-profile bg-cover bg-center w-[60%] h-[100%] left-[12%] rounded-full absolute"
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-4 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="exp">Experiences</TabsTrigger>
                <TabsTrigger value="edu">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">test</h3>
                    <p className="subttile max-w-xl mx-auto xl:mx-0">
                      test test
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="exp">exp</TabsContent>
                <TabsContent value="edu">edu</TabsContent>
                <TabsContent value="skills">skills</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
