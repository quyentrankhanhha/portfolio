import React from 'react'
import { getExperiences } from '@/sanity/sanity.query'
import { ExperienceType } from '@/types'
import Experience from '@/components/Experience'

export default async function Experiences() {
  const experiences: ExperienceType[] = await getExperiences()

  return (
    <section id='experience' className='pb-12 pt-12 xl:py-24'>
      <div className='container mx-auto'>
        <h2 className='section-title mx-auto mb-12 text-center xl:mb-16'>My Experiences</h2>
        <div className='mx-auto grid max-w-[1024px] grid-cols-[100%] gap-6'>
          {experiences &&
            experiences.map((experience) => {
              return (
                <Experience
                  key={experience._id}
                  title={experience.title}
                  year={experience.year}
                  company={experience.company}
                  location={experience.location}
                  description={experience.description}
                />
              )
            })}
        </div>
      </div>
    </section>
  )
}
