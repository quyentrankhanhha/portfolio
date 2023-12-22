import { groq } from 'next-sanity'
import client from './sanity.client'
import { CommonType, EducationType, ExperienceType } from '@/types'

export async function getExperiences(): Promise<ExperienceType[]> {
  return client.fetch(
    groq`*[_type == "experiences"] | order(_createdAt desc){
      _id,
      _createdAt,
      company,
      location,
      tech,
      title,
      year,
      description,
    }`
  )
}

export async function getEducation(): Promise<EducationType[]> {
  return client.fetch(
    groq`*[_type == "education"] | order(_createdAt desc){
        _id,
        _createdAt,
        name,
        location,
        degree,
        year
      }`
  )
}

export async function getTools(): Promise<CommonType[]> {
  return client.fetch(
    groq`*[_type == "tools"] | order(_createdAt asc){
        _id,
        _createdAt,
        name,
      }`
  )
}
