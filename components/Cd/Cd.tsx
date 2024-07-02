import React, {
  MutableRefObject,
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
} from "react";
import { motion, motionValue, animate } from "framer-motion";

type props = {
  size: number;
};

const Cd = ({ size }: props) => {
  const bey = useRef() as MutableRefObject<HTMLImageElement | null>;

  return (
    <div
      className="relative flex justify-center items-center"
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        overflow: "hidden",
        // backgroundImage: `conic-gradient(#000 0%, #919191 10%, #000 20%, #000 50%, #919191 60%, #000 70%, #000 100%)`,
      }}
    >
      <div className="absolute w-[97.5%] h-[97.5%] z-[2] mix-blend-hard-light">
        <img
          className="absolute w-full h-full z-[3] mix-blend-soft-light"
          src="/sat.png"
          alt="sat"
          style={{ objectFit: "cover" }}
        />
        <img
          className="absolute w-full h-full z-[2]"
          src="/mask.png"
          alt="mask"
          style={{ objectFit: "cover" }}
        />
        <motion.img
          ref={bey}
          className="absolute w-full h-full z-[1]"
          src="/bey-3.png"
          alt="bey"
          style={{ objectFit: "cover" }}
          animate={{ rotate: -360 }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "linear",
          }}
        />
      </div>
      <img
        className="absolute w-full h-full z-[1]"
        src="/cd.png"
        alt="cd"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default Cd;
