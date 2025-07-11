import { useEffect, useRef, useState } from "react";

async function fetchPosts(url) {
  const response = await fetch(url);
  const blogPosts = await response.json();
  return blogPosts;
}

export function HomePage({ url, handleClick }) {
  const nextValue = useRef(1);
  const [loadedPosts, setLoadedPosts] = useState([]);
  useEffect(
    function () {
      fetchPosts(url).then((blogPosts) => setLoadedPosts(blogPosts));
    },
    [url]
  );
  console.log(nextValue, url);
  // function handleClick() {
  //   url = url + `${nextValue.current}`;
  //   console.log(url);
  //   Number(nextValue.current++);
  // }
  return (
    <>
      <main className="w-full">
        <div className="bg-Blue-950 ">
          <ul className="flex flex-row flex-wrap justify-center gap-2">
            {/* {loadedPosts.map((post) => {
              return (
                <li
                  key={post.id}
                  className="bg-Green-300 w-fit p-2 m-1 rounded-xl font-black"
                >
                  {post.title}
                </li>
              );
            })} */}
            <li className="bg-Green-300 w-fit p-2 m-1 rounded-xl font-black">
              {loadedPosts.title}
            </li>
          </ul>
          <button
            className="bg-rose-400 p-4 font-bold text-Blue-200 rounded-xl"
            onClick={handleClick}
          >
            Next
          </button>
        </div>
      </main>
    </>
  );
}
