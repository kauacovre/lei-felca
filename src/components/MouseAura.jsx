import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function MouseAura() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed z-50 transition-transform duration-75 ease-out will-change-transform hidden md:block"
      style={{
        left: 0,
        top: 0,
        transform: `translate3d(${pos.x - 180}px, ${pos.y - 180}px, 0)`,
      }}
    >
      <div
        className={`w-[360px] h-[360px] rounded-full blur-[100px] opacity-25 pointer-events-none ${
          isDark
            ? "bg-gradient-to-tr from-blue-600/30 via-indigo-500/20 to-cyan-400/20"
            : "bg-gradient-to-tr from-blue-400/20 via-indigo-300/15 to-purple-300/15"
        }`}
      />
    </div>
  );
}
