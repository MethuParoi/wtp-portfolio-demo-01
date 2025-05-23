export const PostMedia = {
  slug: "PostMedia",

  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
        name: "alt",
        type: "text",
        required: true,
    }
  ],
  upload: true,
 
};
