import React from 'react'
import DevImg from '../../components/DevImg'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs'
import { CommonType, EducationType } from '@/types'
import { getEducation, getTools } from '@/sanity/sanity.query'
import { infoData } from '@/consts/data'
import { GraduationCap } from 'lucide-react'

export default async function About() {
  const education: EducationType[] = await getEducation()
  const tools: CommonType[] = await getTools()

  return (
    <section className='pb-12 xl:py-24'>
      <div className='container mx-auto'>
        <h2 className='section-title mx-auto mb-8 text-center xl:mb-16'>About me</h2>
        <div className='flex flex-col gap-x-6 xl:flex-row'>
          <div className='relative hidden flex-1 xl:flex'>
            <DevImg
              containerStyles='bg-about_shape_light dark:bg-about_shape_dark h-[510px] w-[500px] bg-contain bg-no-repeat relative'
              imgStyles='bg-profile bg-cover bg-center w-[86%] h-[100%] left-[12%] rounded-full absolute'
            />
          </div>
          <div className='flex-1'>
            <Tabs defaultValue='personal'>
              <TabsList className='grid w-full xl:max-w-[520px] xl:grid-cols-3 xl:border dark:border-none'>
                <TabsTrigger value='personal'>Personal Info</TabsTrigger>
                <TabsTrigger value='education'>Education</TabsTrigger>
                <TabsTrigger value='tools'>Tools</TabsTrigger>
              </TabsList>
              <div className='mt-12 text-lg xl:mt-8'>
                <TabsContent value='personal'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-4'>test</h3>
                    <p className='subtitle mx-auto max-w-xl xl:mx-0'>test test</p>
                    <div className='mb-12 grid gap-4 xl:grid-cols-2'>
                      {infoData.map((item, index) => {
                        return (
                          <div className='mx-auto flex items-center gap-x-4 xl:mx-0' key={index}>
                            <div className='text-primary'>{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value='education'>
                  <div>
                    <h3 className='h3 mb-8 text-center xl:text-left'>My Academic Journey</h3>
                  </div>
                  <div className='flex flex-col '>
                    {education.map((item) => {
                      return (
                        <div className='group gap-x-8' key={item._id}>
                          <div className='flex items-center gap-x-4 text-[22px] text-primary'>
                            <GraduationCap />
                            <h4>{item.degree}</h4>
                          </div>
                          <div className='flex-col-2 flex gap-x-4'>
                            <div className='relative ml-3 h-[60px] w-[1px] bg-primary'>
                              <div className='absolute -left-[5px] bottom-0 h-[11px] w-[11px] rounded-full bg-primary transition-all duration-500 group-hover:translate-y-[-50px]'></div>
                            </div>
                            <div className='ml-3'>
                              <span>{item.name}</span> - <span>{item.location}</span>
                              <div className='text-base font-medium'>{item.year}</div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </TabsContent>
                <TabsContent value='tools'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-8'>What I learn</h3>
                    <div>
                      {tools &&
                        tools.map((tool) => {
                          return (
                            <div
                              className='mb-3 mr-2 inline-block rounded-md border-2 border-primary p-2 hover:bg-primary hover:text-white'
                              key={tool._id}
                            >
                              {tool.name}
                            </div>
                          )
                        })}
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}
