export const BlogPosts = {
  slug: "blog-posts",

  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Post Title",
      admin: {
        description: "The title of the blog post",
      },
    },
    {
      name: "content",
      type: "textarea",
      required: true,
      label: "Post Content",
      admin: {
        description: "The content of the blog post",
      },
    },
    {
      name: "author",
      type: "group",
      label: "Author Details",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
          label: "Author's Name",
          // defaultValue: "Muhit Khan",
        },
        {
          name: "role",
          type: "text",
          label: "Author's Role",
        },
      ],
    },
  ],
  upload: true,
};
