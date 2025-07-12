import { useEffect, useState } from "react";
import lineIcon from "../assets/images/pattern-divider-mobile.svg";
import lineIconDesktop from "../assets/images/pattern-divider-desktop.svg";

async function fetchAdvice() {
  const adviceApi = await fetch("https://api.adviceslip.com/advice");
  if (!adviceApi.ok) {
    throw new Error("http error from six");
  } else {
    console.log("fetch worked");
  }
  const advice = await adviceApi.json();
  return advice.slip;
}

export function MainPage() {
  const [currentAdvice, setCurrentAdvice] = useState([]);

  async function fetchAndSetAdvice() {
    try {
      const advice = await fetchAdvice();
      setCurrentAdvice(advice);
    } catch (err) {
      console.error("Failed to fetch advice:", err);
    } finally {
      console.log("try catch block done running.");
    }
  }
  useEffect(function () {
    fetchAndSetAdvice();
  }, []);

  console.log(currentAdvice);

  function handleClick() {
    fetchAndSetAdvice();
  }

  return (
    <>
      <main className="w-full flex flex-col justify-center items-center h-screen">
        <section className="bg-Blue-950 max-w-sm md:max-w-lg flex flex-col p-12 rounded-xl">
          <h1 className="text-base uppercase tracking-[0.4rem] text-center mb-6 text-Green-300 font-medium">
            Advice # {currentAdvice.id}
          </h1>
          <article className="-mx-6">
            <p className="font-bold text-4xl text-center text-Blue-200">
              <q>{currentAdvice.advice} </q>
            </p>
          </article>

          <img src={lineIcon} className="my-8 md:hidden " alt="" />
          <img src={lineIconDesktop} className="my-8 md:block hidden" alt="" />

          <button
            className="p-8 bg-Green-300 mt-auto -mb-20 mx-auto w-fit rounded-full 
          bg-[url('./assets/images/icon-dice.svg')] bg-no-repeat bg-center
           shadow-Green-300 active:shadow-[0px_0px_10px_10px] focus:shadow-[0px_0px_10px_10px]
          "
            onClick={handleClick}
          ></button>
        </section>
      </main>
    </>
  );
}
