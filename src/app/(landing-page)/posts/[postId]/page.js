import Image from "next/image";
import { getPayload } from "../../../../lib/payload";
import { RichText as SerializedRichText } from "@payloadcms/richtext-lexical/react";

const Page = async ({ params }) => {
  const { postId } = await params;
  const payload = await getPayload();

  const post = await payload.find({
    collection: "blog-posts",
    where: {
      id: {
        equals: postId,
      },
    },
  });

  if (!post || !post.docs || post.docs.length === 0) {
    return <div>Post not found</div>;
  }

  const data = post.docs[0];
  const imageUrl = `/api/blog-posts/file/${data.filename || ""}`; // Safely accessing image URL

  return (
    <div className="container mx-auto p-8 pb-20 sm:p-20">
      <pre>{JSON.stringify(data.media, null, 2)}</pre>
      <div className="flex justify-center mb-5">
        <Image
          className="w-1/2 h-auto rounded-lg shadow-lg"
          width={500}
          height={500}
          src={imageUrl}
          alt={"Post image"}
        />
      </div>
      <h1 className="text-5xl font-bold mb-5 leading-normal text-center">
        {data.title}
      </h1>
      <p className="text-xl font-medium leading-normal text-center">
        {data.content}
      </p>
      {/* <SerializedRichText className="payload-richtext" data={data.content} /> */}
    </div>
  );
};

export default Page;
