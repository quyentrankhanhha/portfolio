import { type SchemaTypeDefinition } from 'sanity'
import experiences from './experiences'
import certificates from './certificates'
import tools from './tools'
import education from './education'
import projects from './projects'
import resume from './resume'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [experiences, certificates, tools, education, projects, resume]
}
