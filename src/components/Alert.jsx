import { useEffect, useState } from "react";

export function Alert() {
  const [alertDone, setAlertDone] = useState(false);

  useEffect(function () {
    let timer;
    console.log("Starting Alert Timer!");
    timer = setTimeout(function () {
      console.log("Timer Expired");
      setAlertDone(true);
    }, 7000);

    return function () {
      console.log("Cleanup !!");
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {!alertDone && <p>Relax, you still got some seconds</p>}
      {alertDone && <p>Time to get up!</p>}
    </>
  );
}
