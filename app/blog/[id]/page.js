import getData from "@/lib/getData";
import Image from "next/image";
import React from "react";

async function BlogPage({ params }) {
  // const { id } = params;
  const blogId=await params
  const data = await getData(blogId.id);
  // console.log(data)

  return (
    <div className="mt-16">
      {" "}
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <Image
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Card id :  {data.id}</h2>
          <p>{data.title}</p>
          <p>{data.body}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
