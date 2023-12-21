import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getProfile() {
  return client.fetch(
    groq`*[_type == "experiences"] | order(_createdAt desc){
      _id,
      company,
      description,
      location,
      tech,
      title,
      year
    }`
  );
}

export async function getEducation() {
  return client.fetch(
    groq`*[_type == "education"] | order(_createdAt desc){
        _id,
        name,
        location,
        degree,
        year
      }`
  );
}
