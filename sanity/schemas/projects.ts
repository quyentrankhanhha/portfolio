const projects = {
  name: 'projects',
  type: 'document',
  title: 'Projects',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'projectImage',
      title: 'Project Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string'
        }
      ]
    },
    {
      name: 'inProgress',
      type: 'boolean',
      title: 'In Progress'
    },
    {
      name: 'tools',
      type: 'string',
      title: 'Tools'
    },
    {
      name: 'year',
      type: 'string',
      title: 'Year'
    },
    {
      name: 'github',
      type: 'url',
      title: 'Github'
    },
    {
      name: 'link',
      type: 'url',
      title: 'Link'
    }
  ]
}

export default projects
