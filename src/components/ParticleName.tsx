"use client";

import { useEffect, useState } from "react";
import { InteractiveParticles } from "@/components/ui/interactive-particles";

interface ParticleNameProps {
  /** Text to render. Use `\n` for a manual line break. */
  text: string;
  color?: string;
  className?: string;
}

export default function ParticleName({
  text,
  color = "#22d3ee",
  className = "",
}: ParticleNameProps) {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const lines = text.split("\n");
    const fontSize = 180;
    const lineHeight = fontSize * 1.05;
    const fontFamily = "Inter, system-ui, sans-serif";
    const padding = 20;

    const measureCtx = document.createElement("canvas").getContext("2d");
    if (!measureCtx) return;
    measureCtx.font = `900 ${fontSize}px ${fontFamily}`;

    // Widest line determines image width
    const widestLine = lines.reduce((max, line) => {
      const w = measureCtx.measureText(line).width;
      return w > max ? w : max;
    }, 0);

    // Force a wide aspect ratio (roughly 5:1) so the WebGL scaler fits width
    const textWidth = Math.ceil(widestLine) + padding * 2;
    const textHeight = Math.ceil(lineHeight * lines.length) + padding * 2;

    const minAspect = 9.5;
    let width = textWidth;
    let height = textHeight;
    if (width / height < minAspect) {
      width = Math.ceil(height * minAspect);
    } else if (width / height > 6) {
      height = Math.ceil(width / 6);
    }

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, width, height);

    ctx.font = `900 ${fontSize}px ${fontFamily}`;
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const totalTextHeight = lineHeight * lines.length;
    const startY = (height - totalTextHeight) / 2 + lineHeight / 2;

    lines.forEach((line, i) => {
      ctx.fillText(line, width / 2, startY + i * lineHeight);
    });

    setImageSrc(canvas.toDataURL("image/png"));
  }, [text]);

  if (!imageSrc) {
    return (
      <div className={className}>
        <div className="flex h-full w-full items-center justify-center">
          <span className="text-4xl font-black text-neutral-800">
            {text.replace("\n", " ")}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
<InteractiveParticles
  src={imageSrc}
  allowUpload={false}
  color="#f5f5f0"
  background="transparent"
  size={1.4}
  randomness={0.9}
  depth={1.6}
  touchRadius={0.2}
  threshold={55}
  maxDimension={640}
/>
    </div>
  );
}