<<<<<<< HEAD
import React from "react";

export default function Home() {
  return <h1>home</h1>;
=======
import HeaderHome from "../components/home/HeaderHome";
import ModalHome from "../components/home/ModalHome";

export default function Home() {
  return (
    <div className="Home-container">
      <HeaderHome />
      <div className="Home-Modal">
        <ModalHome />
      </div>
    </div>
  );
>>>>>>> 506e1610805366dcc1f1ac6dfef0a776f0a9f14f
}
