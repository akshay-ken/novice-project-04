// import { useRef, useState } from "react";
import { HomePage } from "./components/HomePage";
import { MainPage } from "./components/MainPage";

function App() {
  // const currentPost = useRef(1);
  // const [urlValue, setUrlValue] = useState(
  //   `https://jsonplaceholder.typicode.com/posts/${currentPost.current}`
  // );

  // function onChange(event) {
  //   setUrlValue(event.target.value);
  // }
  // function handleClick() {
  //   currentPost.current++;
  //   setUrlValue(
  //     (prev) =>
  //       `https://jsonplaceholder.typicode.com/posts/${currentPost.current}`
  //   );
  //   console.log(currentPost, urlValue);
  // }
  return (
    <>
      {/* <input
        type="text"
        value={urlValue}
        onChange={onChange}
        className="bg-black text-white"
      />
      <HomePage url={urlValue} handleClick={handleClick} /> */}
      <MainPage />
    </>
  );
}

export default App;
