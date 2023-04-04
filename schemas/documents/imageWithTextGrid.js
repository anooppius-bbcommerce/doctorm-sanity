export default {
  type: 'object',
  name: 'imageWithTextGrid',
  title: 'Image with Text : Grid',
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Text',
    },
    {
      name: 'contents',
      type: 'array',
      title: 'Image with Text : Grid',
      of: [{ type: 'imageWithText' }],
    },
  ]
};
