import { defineField } from 'sanity'

const references = {
  name: 'references',
  type: 'document',
  title: 'References',
  fields: [
    {
      name: 'company',
      type: 'string',
      title: 'Company'
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone Number'
    },
    defineField({
      name: 'email',
      type: 'string',
      title: 'Email Address',
      validation: (Rule) => Rule.required().email()
    })
  ]
}

export default references
