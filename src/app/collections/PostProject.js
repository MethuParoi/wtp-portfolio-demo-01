export const PostProject = {
  slug: "projects",

  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Project Title",
      admin: {
        description: "The title of the project",
      },
    },
    {
      name: "content",
      type: "textarea",
      required: true,
      label: "Project Description",
      admin: {
        description: "Project Description",
      },
    }
  ],
  upload: true,
};
