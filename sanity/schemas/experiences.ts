const experiences = {
  name: 'experiences',
  type: 'document',
  title: 'Experience',
  fields: [
    {
      name: 'company',
      type: 'string',
      title: 'Company'
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location'
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'year',
      type: 'string',
      title: 'Year',
      description: 'mm/yyyy-mm/yyyy'
    },
    {
      name: 'tech',
      type: 'string',
      title: 'Tech stack'
    },
    {
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [{ type: 'string' }]
    }
  ]
}

export default experiences
