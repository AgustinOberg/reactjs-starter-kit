import { useEffect, useRef } from "react";


const isIOS = () =>{
    return (
      (/iPad|iPhone|iPod/.test(navigator.platform) ||
        (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) &&
      !window.MSStream
    );
  }

export function useIOSInputRef() {
    const inputRef = useRef(null);
  
    useEffect(() => {
      const input = inputRef.current;
      if (input == null || !isIOS()) {
        return;
      }
  
      function handleFocus() {
        input.style.fontSize = "16px";
      }
      function handleBlur() {
        input.style.fontSize = "";
      }
  
      input.addEventListener("touchstart", handleFocus);
      input.addEventListener("blur", handleBlur);
  
      return () => {
        input.removeEventListener("touchstart", handleFocus);
        input.removeEventListener("blur", handleBlur);
      };
    }, []);
  
    return inputRef;
  }