import ProductUse from "./ProductUse";
import { useState, useEffect } from "react";
import TextTransition from "react-text-transition";

export default function ProductList() {
  const iconsSets = ["programming-language", "frontend", "backend", "app-development", "database", "IDE"];
  const TEXTS = ["Linguaggi Programmazione", "Web Frontend", "Web Backend", "iOS App Development", "Database & ORM", "IDEs"];
  const [indexIconSets, setIndexIconSets] = useState(0);

  const changeHighlitedIcons = () => {
    document.querySelectorAll(".highlight").forEach((elem) => {
      elem.classList.remove("highlight");
    });
    document.querySelectorAll("." + iconsSets[indexIconSets]).forEach((elem) => {
      elem.classList.add("highlight");
    });
  };

  const moveSlideshow = () => {
    setIndexIconSets((index) => (index >= iconsSets.length - 1 ? 0 : index + 1));
  };

  useEffect(() => {
    changeHighlitedIcons();
  }, [indexIconSets]);

  useEffect(() => {
    const intervalID = setInterval(moveSlideshow, 2500);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <>
      <label className="align-self-start pl-3 w-100">
        <TextTransition text={TEXTS[indexIconSets]} />
      </label>
      <div className="d-flex flex-wrap justify-content-start ">
        <ProductUse icon="github.svg" />
        <ProductUse icon="html5.svg" type="frontend" />
        <ProductUse icon="css3.svg" type="frontend" />
        <ProductUse icon="bootstrap.svg" type="frontend" />
        <ProductUse icon="tailwindcss.svg" type="frontend" />
        <ProductUse icon="javascript.svg" type="programming-language frontend" />
        <ProductUse icon="nodejs.svg" type="backend" />
        <ProductUse icon="react.svg" type="frontend" />
        <ProductUse icon="nextjs.svg" type="backend" />
        <ProductUse icon="sqlite.svg" type="database" />
        <ProductUse icon="postgresql.svg" type="database" />
        <ProductUse icon="prisma.svg" type="database" />
        <ProductUse icon="python.svg" type="programming-language backend" />
        <ProductUse icon="flask.svg" type="backend" />
        <ProductUse icon="django.svg" type="backend" />
        <ProductUse icon="swift.svg" type="programming-language app-development" />
        <ProductUse icon="xcode.svg" type="IDE app-development" />
        <ProductUse icon="raspberrypi.svg" type="deploy" />
        <ProductUse icon="visualstudiocode.svg" type="IDE" />
        <ProductUse icon="pycharm.svg" type="IDE" />
        <ProductUse icon="vercel.svg" type="deploy" />
        <ProductUse icon="heroku.svg" type="deploy" />
      </div>
      <style jsx>{`
        div {
          min-width: 390px;
        }
      `}</style>
    </>
  );
}
