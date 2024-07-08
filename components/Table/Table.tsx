import React, { MutableRefObject, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { e } from "mathjs";
import "./style.css";

type Props = {
  height: number;
};

const Table = ({ height }: Props) => {
  const toneArmRef = useRef() as MutableRefObject<HTMLDivElement | null>;
  const [toneArmDegrees, setToneArmDegrees] = useState(0);

  function moveToneArm(event: MouseEvent | TouchEvent | PointerEvent) {
    if (!toneArmRef.current) return;

    const rect = toneArmRef.current.getBoundingClientRect();
    const x = (event as MouseEvent).clientX - rect.left;
    const y = (event as MouseEvent).clientY - rect.top;
    const angle = Math.atan2(y - rect.height / 2, x - rect.width / 2);
    const degrees = (angle * 180) / Math.PI - 120;

    setToneArmDegrees(degrees);
  }

  return (
    <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center">
      <div
        className="relative"
        style={{ height: height + "px", width: height * (880 / 675) + "px" }}
      >
        <div className="absolute w-full h-full z-[0]">
          <img src="/images/TABLE.png" alt="table" className="w-full h-full" />
        </div>
        <div
          className="absolute top-0 left-0 flex justify-center items-center z-[1]"
          style={{
            height: height + "px",
            width: height + "px",
          }}
        >
          <div className="w-[86%] h-[86%] flex justify-center items-center relative">
            <img
              className="absolute w-full h-full z-[1]"
              src="/images/DISK.png"
              alt="disk"
            />
            <img
              className="absolute w-full h-full z-[2] mix-blend-color-burn"
              src="/images/TONE.png"
              alt="tone"
            />
            <img
              className="absolute w-[96.2%] h-[96.2%] z-[3] mix-blend-color-dodge"
              src="/images/RINGS.png"
              alt="RINGS"
            />
            <motion.img
              className="absolute w-full h-full z-[4]"
              src="/images/SPIN.png"
              alt="SPIN"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "linear",
              }}
            />
          </div>
        </div>
        <div
          ref={toneArmRef}
          className="absolute translate-x-[50%] translate-y-[-50%] z-[2]"
          style={{
            width: height * (700 / 675) + "px",
            height: height * (1055 / 675) + "px",
            right: height / 6.6 + "px",
            top: height / 6.6 + "px",
          }}
        >
          <motion.div
            className="absolute w-full h-full z-[1]"
            style={{ transform: `rotate(${toneArmDegrees}deg)` }}
          >
            <motion.div
              className="absolute w-[25%] h-[60%] bottom-0 left-0 origin-bottom cursor-grab tone-arm"
              drag={true}
              onDrag={(event, info) => {
                moveToneArm(event);
              }}
              dragElastic={0.2}
            />
            <motion.img
              className="h-full w-full origin-center"
              src="/images/TONEARM.png"
              alt="tonearm"
            />
          </motion.div>
        </div>
        {/* <div className="absolute left-[5.75%] bottom-[7.1%] z-[3] flex justify-start items-end mix-blend-plus-lighter">
          <img
            className="absolute translate-x-[-20%] translate-y-[20%]"
            style={{ minWidth: height * (200 / height) + "px" }}
            src="/images/LIGHT.png"
            alt="light"
          />
        </div> */}
        <div className="absolute left-[5.75%] bottom-[7.1%] z-[3] flex justify-start items-end">
          <img
            className="absolute cursor-pointer rounded-[50%]"
            style={{
              minWidth: height * (50 / height) + "px",
              boxShadow: "8px 8px 16px 0 rgba(0, 0, 0, 0.5)",
            }}
            src="/images/BUTTON.png"
            alt="button"
          />
        </div>
      </div>
    </div>
  );
};

export default Table;
