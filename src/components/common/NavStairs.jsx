import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import React from "react";

const NavStairs = ({ isOpen, onCovered, onComplete }) => {
  const stairParentRef = useRef(null);

  useGSAP(() => {
    if (!isOpen) return;

    const tl = gsap.timeline();

    tl.set(stairParentRef.current, {
      display: "block",
    });

    gsap.set(".menu-stair", {
      yPercent: -100,
    });

    tl.to(".menu-stair", {
      yPercent: 0,
      duration: 0.7,
      stagger: {
        each: 0.08,
        from: "end",
      },
      ease: "expo.inOut",
    });

    tl.call(() => {
      onCovered();
    });

    tl.call(() => {
      onComplete();
    });

    tl.to({}, { duration: 0.08 });

    tl.to(".menu-stair", {
      yPercent: 100,
      duration: 0.8,
      stagger: {
        each: 0.08,
        from: "end",
      },
      ease: "expo.inOut",
    });

    tl.set(stairParentRef.current, {
      display: "none",
    });

    tl.set(".menu-stair", {
      clearProps: "all",
    });
  }, [isOpen]);
  return (
    <div ref={stairParentRef} className="hidden fixed inset-0 z-[999]">
      <div className="flex h-full">
        <div className="menu-stair w-1/5 h-full bg-black"></div>
        <div className="menu-stair w-1/5 h-full bg-black"></div>
        <div className="menu-stair w-1/5 h-full bg-black"></div>
        <div className="menu-stair w-1/5 h-full bg-black"></div>
        <div className="menu-stair w-1/5 h-full bg-black"></div>
      </div>
    </div>
  );
};

export default NavStairs;
