import { useRef } from "react";
import { SAMPLE_DATA } from "./utils/data";

const ITEM_WIDTH = 200;

const App = () => {
  const containerRef = useRef(null);

  const handleScroll = (direction) => {
    if (containerRef.current) {
      const currentScroll = containerRef.current.scrollLeft;
      const scrollAmount = direction === "left" ? -ITEM_WIDTH : ITEM_WIDTH;

      containerRef.current.scrollTo({
        left: currentScroll + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container">
      <div ref={containerRef} className="scroll">
        <div className="content-box">
          {SAMPLE_DATA.map((item) => (
            <div
              className="card"
              key={item.id}
              style={{ backgroundColor: item.color }}
            >
              <p>{item.id}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="action-btns">
        <button
          onClick={() => {
            handleScroll("left");
          }}
        >
          Scroll Left
        </button>
        <button
          onClick={() => {
            handleScroll("right");
          }}
        >
          Scroll Right
        </button>
      </div>
    </div>
  );
};

export default App;
