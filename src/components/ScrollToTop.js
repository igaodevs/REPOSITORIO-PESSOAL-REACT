import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"  // Adicionando um comportamento de rolagem suave
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
