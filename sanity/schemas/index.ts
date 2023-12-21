import { type SchemaTypeDefinition } from "sanity";
import { defineField } from "sanity";
import experiences from "./experiences";
import certificates from "./certificates";
import tools from "./tools";
import education from "./education";
import projects from "./projects";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    defineField(experiences),
    defineField(certificates),
    defineField(tools),
    defineField(education),
    defineField(projects),
  ],
};
