import React, {
  MutableRefObject,
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
} from "react";
import {
  motion,
  motionValue,
  animate,
  useSpring,
  useTransform,
} from "framer-motion";

type props = {
  size: number;
};

const Cd = ({ size }: props) => {
  const normal = useRef() as MutableRefObject<HTMLDivElement | null>;
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // useEffect(() => {
  //   setWindowSize({ width: window.innerWidth, height: window.innerHeight });

  //   function handleWindowSizeChange() {
  //     setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  //   }
  //   window.addEventListener("resize", handleWindowSizeChange);
  //   return () => {
  //     window.removeEventListener("resize", handleWindowSizeChange);
  //   };
  // }, []);

  const move = (event: { clientX: number; clientY: number }) => {
    const rect = normal.current?.getBoundingClientRect();

    if (!rect) return; // Add null check

    setCursorPosition({ x: event.clientX, y: event.clientY });

    const width = rect.width;
    const height = rect.height;

    setWindowSize({ width, height });
  };

  const fuckthisshit = useTransform(
    motionValue(cursorPosition.y),
    (latest: number) =>
      ((latest - windowSize.height / 2) / (windowSize.height / 2)) * -25
  );

  const rotateX = useSpring(
    useTransform(
      motionValue(cursorPosition.y),
      (latest: number) =>
        ((latest - windowSize.height / 2) / (windowSize.height / 2)) * -25
    ),
    {
      stiffness: 450,
      damping: 100,
    }
  );

  const fuckmylife = useTransform(
    motionValue(cursorPosition.x),
    (latest: number) =>
      ((latest - windowSize.width / 2) / (windowSize.width / 2)) * 25
  );

  const jdjhswdbw = useSpring(fuckmylife, {
    stiffness: 450,
    damping: 100,
  });

  const rotateY = useSpring(
    useTransform(
      motionValue(cursorPosition.x),
      (latest: number) =>
        ((latest - windowSize.width / 2) / (windowSize.width / 2)) * 25
    ),
    {
      stiffness: 450,
      damping: 100,
    }
  );

  return (
    <div className="relative flex justify-center items-center w-full h-full">
      <div
        ref={normal}
        className="absolute w-full h-full z-[1]"
        onMouseMove={move}
      />
      <div
        style={{
          perspective: "1000px",
        }}
      >
        <motion.div
          className="relative flex justify-center items-center"
          style={{
            width: size,
            height: size,
            borderRadius: "50%",
            overflow: "hidden",
            transformStyle: "preserve-3d",
            rotateX: rotateX,
            rotateY: rotateY,
            // rotateY: rotateY,
            // backgroundImage: `conic-gradient(#000 0%, #919191 10%, #000 20%, #000 50%, #919191 60%, #000 70%, #000 100%)`,
          }}
        >
          <div className="absolute w-[97.5%] h-[97.5%] z-[2] mix-blend-hard-light">
            <img
              className="absolute w-full h-full z-[3] mix-blend-soft-light"
              src="/images/sat.png"
              alt="sat"
              style={{ objectFit: "cover" }}
            />
            <img
              className="absolute w-full h-full z-[2]"
              src="/images/mask.png"
              alt="mask"
              style={{ objectFit: "cover" }}
            />
            <motion.img
              className="absolute w-full h-full z-[1]"
              src="/images/bey-3.png"
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
            src="/images/cd.png"
            alt="cd"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Cd;
