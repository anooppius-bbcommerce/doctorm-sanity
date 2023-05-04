export default {
  type: 'object',
  name: 'customMedia',
  title: 'Custom Media',
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'url',
      type: 'url',
      validation: Rule => Rule.uri({ allowRelative: true }),
      title: 'URL',
    },
    {
      name: 'media',
      type: 'file',
      title: 'Media',
      options: {
        accept: 'image/*, video/*'
      }
    },
  ],
};
