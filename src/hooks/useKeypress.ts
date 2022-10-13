import React from "react";

type CustomEvent = Event & { keyCode: number };

export default function useKeyPress(fn: (c: number) => void) {
  React.useEffect(() => {
    function onKeyPress(e: Event) {
      fn((e as CustomEvent).keyCode);
    }

    window.addEventListener("keypress", onKeyPress);

    return () => {
      window.removeEventListener("keypress", onKeyPress);
    };
  }, [fn]);
}
