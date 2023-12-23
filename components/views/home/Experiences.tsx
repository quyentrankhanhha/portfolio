import React from 'react'
import { getExperiences } from '@/sanity/sanity.query'
import { ExperienceType } from '@/types'

export default async function Experiences() {
  const experiences: ExperienceType[] = await getExperiences()

  return (
    <section className='pb-12 xl:py-24'>
      <div className='container mx-auto'>
        <h2 className='section-title mx-auto mb-8 text-center xl:mb-16'>My Experiences</h2>
        <div className='mx-auto grid max-w-[1024px] grid-cols-[100%] gap-6'>
          {experiences &&
            experiences.map((experience) => {
              return (
                <div className='grid grid-cols-[1fr_max-content_1fr]' key={experience._id}>
                  <div>
                    <h4 className='h4 mb-1 block text-right'>{experience.year}</h4>
                    <span className='block text-right'>{experience.company}</span>
                    <span className='block text-right'>{experience.location}</span>
                  </div>

                  <div className='justify-self-center px-8 py-1'>
                    <span className='relative inline-block h-[12px] w-[12px] rounded-full bg-primary before:absolute before:h-[20px] before:w-[20px] before:-translate-x-[4px] before:-translate-y-[4px] before:rounded-full before:border before:border-primary before:content-[""]' />
                    <span className='block h-[90%] w-[2px] -translate-y-4 translate-x-1 bg-primary' />
                  </div>

                  <div>
                    <h4 className='h4 mb-1'>Software Developer Trainee </h4>
                    {experience.description &&
                      experience.description &&
                      experience.description.map((item, index) => {
                        return <div key={index}>{item}</div>
                      })}
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </section>
  )
}
