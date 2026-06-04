import { motion } from "framer-motion";

type Props = {
  text?: string;
  className?: string;
  size?: number;
};

/**
 * A rotating ring of text rendered along an SVG circle.
 * Spins slowly and respects prefers-reduced-motion via the animate-spin-slow utility.
 */
export function CircularText({
  text = "MEGAN MIELKE  ·  UX  ·  INFORMATION DESIGN  ·  ",
  className = "",
  size = 520,
}: Props) {
  const r = size / 2 - 18;
  const cx = size / 2;
  const cy = size / 2;
  const repeated = text.repeat(2);

  return (
    <motion.svg
      aria-hidden
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      className={`select-none ${className}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    >
      <defs>
        <path
          id="circle-text-path"
          d={`M ${cx},${cy} m -${r},0 a ${r},${r} 0 1,1 ${r * 2},0 a ${r},${r} 0 1,1 -${r * 2},0`}
        />
      </defs>
      <text
        className="font-display fill-foreground/70"
        style={{ fontSize: 18, letterSpacing: "0.35em", fontWeight: 600 }}
      >
        <textPath href="#circle-text-path" startOffset="0">
          {repeated}
        </textPath>
      </text>
    </motion.svg>
  );
}
