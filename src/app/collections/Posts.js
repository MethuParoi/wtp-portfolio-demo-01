export const Posts = {
  slug: "posts",

  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "content",
      type: "richText",
    },
    // {
    //   name: "PostMedia",
    //   type: "upload",
    //   relationTo: "PostMedia",
    // },
    {
      name: "includedInBlog",
      type: "checkbox",
      defaultValue: true,
    },
  ],
  upload: true,
};
