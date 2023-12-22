export type CommonType = {
  _id: string
  name: string
  _createdAt: string
}

export interface EducationType extends CommonType {
  name: string
  location: string
  degree: string
  year: string
}

export interface ExperienceType extends CommonType {
  _id: string
  company: string
  location: string
  tech: string
  description?: string[]
  title: string
  year: string
}
