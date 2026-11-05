"use client";

import { useState, useEffect } from "react";

const phrases = ["hire_me", "let's_talk", "say_hi", "collab?"];

export default function HireButton() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 40 : 100;
    
    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentPhrase) {
        // Pause at the end of the word
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        const nextText = isDeleting
          ? currentPhrase.substring(0, text.length - 1)
          : currentPhrase.substring(0, text.length + 1);
        setText(nextText);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  const handleClick = () => {
    // Smooth scroll to contact
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    
    // Focus the name input after scrolling finishes
    setTimeout(() => {
      const input = document.getElementById("name");
      if (input) input.focus({ preventScroll: true });
    }, 800);
  };

  return (
    <button
      onClick={handleClick}
      className="hidden md:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/40 bg-cyan-400/5 text-cyan-400 text-[11px] font-mono tracking-wider transition-all duration-300 hover:bg-cyan-400/10 hover:scale-105 hover:shadow-[0_0_20px_-5px_rgba(34,211,238,0.5)] min-w-[120px] justify-center group"
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
      </span>
      <span className="text-neutral-500 group-hover:text-cyan-400 transition-colors">{">_"}</span>
      {text}
      <span className="w-1.5 h-3 bg-cyan-400 animate-pulse ml-0.5" />
    </button>
  );
}