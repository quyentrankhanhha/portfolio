const certificates = {
  name: 'certificates',
  type: 'document',
  title: 'Certificates',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'source',
      type: 'string',
      title: 'Source'
    },
    {
      name: 'date',
      type: 'string',
      title: 'Date'
    },
    {
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [{ type: 'string' }]
    },
    {
      name: 'link',
      type: 'url',
      title: 'Link'
    }
  ]
}

export default certificates
