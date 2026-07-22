import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import React from "react";

const NavStairs = ({ isOpen, onComplete }) => {
  const stairParentRef = useRef(null);

  useGSAP(() => {
    if (!isOpen) return;

    const tl = gsap.timeline();

    tl.set(stairParentRef.current, {
      display: "block",
    });

    tl.from(".menu-stair", {
        height: 0,
        duration:0.8,
        stagger:{
          amount:-0.3
        },
        ease:"power4.inOut"
      });
      
      
      tl.to(".menu-stair", {
        yPercent:100,
        duration:0.8,
        stagger:{
          amount:-0.25
        },
        ease:"power4.inOut"
      });

    tl.to(".menu-stair", {
      y: "100%",
      stagger: {
        amount: -0.25,
      },
    });

    tl.call(() => {
      onComplete();
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
