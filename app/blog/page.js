import Link from "next/link";
import React from "react";
import getAllData from "@/lib/getAllData";
import Image from "next/image";

async function Blog() {
  const allData = await getAllData();
  // console.log(allData);

  return (
    <main>
      <div className="my-10">All Blog {allData.length}</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5 ">
        {allData.slice(0, 12).map((data) => (
          <div
            key={data.id}
            className="card  card-compact bg-base-100  shadow-xl"
          >
            <figure>
              <Image
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title"> Id: {data.id}</h2>
              <p>Title: {data.title}</p>
              <div className="card-actions justify-end">
                <Link href={`/blog/${data.id}`}>
                  {" "}
                  <button className="btn btn-primary">View Details </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Blog;
