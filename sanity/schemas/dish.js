import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name of dish',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_desc',
      title: 'Short desc',
      type: 'string',
      // validation: Rule=> Rule.required()
    }),
    defineField({
      name: 'price',
      title: 'Price of dish',
      type: 'number',
      // validation: Rule=> Rule.required()
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image of dish',
    }),
  ],
})
