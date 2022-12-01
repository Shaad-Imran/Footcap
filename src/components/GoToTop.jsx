import React, { useEffect, useState } from "react";

const GoToTop = () => {
  const [visible, setVisible] = useState(false);

  const goToFunc = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    if (window.scrollY > 250) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div
      className={visible ? "go-top-btn active" : "go-top-btn"}
      onClick={goToFunc}
    >
      <ion-icon name="arrow-up-outline"></ion-icon>
    </div>
  );
};

export default GoToTop;
