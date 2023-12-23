'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Navigation, Pagination } from 'swiper/modules'
import { Button } from './ui/button'
import { getProjects } from '@/sanity/sanity.query'
import { ProjectType } from '@/types'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const [projects, setProjects] = useState<ProjectType[]>([])

  const getProjectData = async () => {
    let project = await getProjects()
    setProjects(project)
  }

  useEffect(() => {
    getProjectData()
  }, [])

  return (
    <section className='relative mb-12 xl:mb-48'>
      <div className='container mx-auto'>
        <div className='mx-auto mb-12 flex max-w-[400px] flex-col items-center justify-center text-center'>
          <h2 className='section-title mb-4 '>Lastest Projects</h2>
          <p className='subtitle mb-8'>testing</p>
          <Link href='/projects'>
            <Button>All projects</Button>
          </Link>
        </div>
        <div className='w-full'>
          <Swiper
            className='h-[360px]'
            slidesPerView={1}
            breakpoints={{
              1024: {
                slidesPerView: 2
              },
              1280: {
                slidesPerView: 3
              }
            }}
            spaceBetween={30}
            modules={[Pagination, Navigation, A11y]}
            pagination={{ clickable: true }}
          >
            {projects &&
              projects.slice(0, 4).map((project) => {
                return (
                  <SwiperSlide key={project._id}>
                    <ProjectCard project={project} />
                  </SwiperSlide>
                )
              })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
