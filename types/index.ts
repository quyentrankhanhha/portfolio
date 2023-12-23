export type CommonType = {
  _id: string
  name: string
  _createdAt: string
}

export interface EducationType extends CommonType {
  location: string
  degree: string
  year: string
}

export interface ExperienceType extends CommonType {
  company: string
  location: string
  tech: string
  description?: string[]
  title: string
  year: string
}

type ProjectImageType = {
  alt: string
  image: string
}

export interface ProjectType extends CommonType {
  github: string
  projectImage: ProjectImageType
  year: string
  tools: string
  link?: string
  inProgress: boolean
}
