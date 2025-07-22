import React, { useEffect, useState } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling 200px
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-3 bg-pink -600 hover:bg -pink-500 text-white text-4xl p- 5 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 z-50"
        aria-label="Back to Top"
      >
        ⬆️
      </button>
    )
  );
};

export default BackToTop;
