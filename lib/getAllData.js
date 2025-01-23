import React from "react";

async function getAllData() {
  const result = await fetch(" https://jsonplaceholder.typicode.com/posts");
  return result.json();
}

export default getAllData;
