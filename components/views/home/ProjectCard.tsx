import { ProjectType } from '@/types'
import React from 'react'
import { Card, CardHeader } from '../../ui/card'
import { Badge } from '../../ui/badge'
import Image from 'next/image'
import Link from 'next/link'
import { GithubIcon, Link2Icon } from 'lucide-react'

export default function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <Card className='group relative h-full overflow-hidden'>
      <CardHeader className='p-0'>
        <div className='relative flex h-[200px] w-full items-center justify-center overflow-hidden bg-secondary xl:bg-project_bg_light xl:bg-[110%] xl:bg-no-repeat dark:bg-secondary/40 xl:dark:bg-project_bg_dark'>
          {project.projectImage && (
            <Image
              className='absolute bottom-0 shadow-2xl'
              src={project.projectImage?.image || ''}
              alt={project.projectImage?.alt}
              width={247}
              height={200}
              priority
            />
          )}

          <div className='flex gap-x-4'>
            <Link
              href={project.github}
              className='flex h-[54px] w-[54px] scale-0 items-center justify-center rounded-full bg-primary opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100'
            >
              <GithubIcon className='text-white' />
            </Link>
            <Link
              href={project.github}
              className='flex h-[54px] w-[54px] scale-0 items-center justify-center rounded-full bg-primary opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100'
            >
              <Link2Icon className='text-white' />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className='h-full px-8 py-6'>
        {project.inProgress && (
          <Badge className='absolute left-5 top-4 mb-2 text-sm font-medium uppercase'>In Progress</Badge>
        )}
        <h4 className='h4 mb-1'>{project.name}</h4>
        <p className='mb-2 font-medium'>{project.year}</p>
        <p className='text-sm text-muted-foreground'>{project.tools}</p>
      </div>
    </Card>
  )
}
