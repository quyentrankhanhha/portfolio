import React from 'react'
import { Briefcase, Eye, Send, Users } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../../ui/button'
import Social from '../../Social'
import DevImg from '../../DevImg'
import Badge from '../../Badge'
import ScrollToSection from '@/components/ScrollToSection'
import { getResume } from '@/sanity/sanity.query'
import { ResumeType } from '@/types'

export default async function Hero() {
  const resumeLink: ResumeType[] = await getResume()

  return (
    <section
      id='hero'
      className='h-[86vh] bg-hero bg-cover bg-bottom bg-no-repeat pb-12 pt-12 xl:py-24 xl:pt-28 dark:bg-none'
    >
      <div className='container mx-auto'>
        <div className='flex justify-between gap-x-8'>
          <div className='mx-auto flex max-w-[600px] flex-col justify-center text-center xl:mx-0 xl:text-left'>
            <div className='trackking-[4px] mb-4 text-sm font-semibold uppercase text-primary'>Web Developer</div>
            <div className='h1 mb-4'>Hi, I&apos;m Ha Quyen</div>
            <p className='subtitle mx-auto max-w-[490px] xl:mx-0'>A learner, a software developer</p>
            <div className='mx-auto mb-12 flex flex-col gap-x-3 gap-y-3 md:flex-row xl:mx-0'>
              <Link href='/contact'>
                <Button className='group gap-x-2 hover:scale-105'>
                  Contact me <Send size={16} className='group-hover:-translate-y-1 group-hover:translate-x-0.5' />
                </Button>
              </Link>
              {resumeLink && (
                <Link href={resumeLink[0].link} target='_blank'>
                  <Button variant='secondary' className='group gap-x-2 hover:scale-105'>
                    View CV <Eye size={16} className='group-hover:translate-x-0.5' />
                  </Button>
                </Link>
              )}
            </div>
            <Social containerStyles='flex gap-x-3 mx-auto xl:mx-0' iconStyles='text-[20px] rounded' />
          </div>
          <div className='relative hidden xl:flex'>
            {/* <Badge
              containerStyles="absolute top-[24%] -left-[8rem]"
              icon={<Briefcase />}
              endCountNum={1}
              badgeText="Year of experience"
            /> */}
            <Badge
              containerStyles='absolute top-[75%] right-0'
              icon={<Users />}
              endCountNum={5}
              badgeText='References'
            />
            <div className='dark:hero_shape2_dark absolute -right-2 -top-1 h-[500px] w-[580px] bg-hero_shape2_light bg-no-repeat'></div>
            <DevImg
              containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom'
              imgStyles='bg-profile bg-cover bg-center w-[100%] h-[580px] right-[35px] rounded-full absolute'
            />
          </div>
        </div>
        <ScrollToSection elementId='about' />
      </div>
    </section>
  )
}
