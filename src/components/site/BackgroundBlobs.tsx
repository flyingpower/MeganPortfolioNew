type Props = {
  className?: string;
  variant?: "hero" | "soft" | "edge";
};

type BlobSpec = {
  position: string; // tailwind positioning + size
  color: string; // tailwind text-* color (SVG uses currentColor)
  path: string; // irregular blob path in -100..100 viewBox
  delay?: string;
};

const HERO_BLOBS: BlobSpec[] = [
  {
    position: "left-[-6%] top-[-8%] h-[17rem] w-[17rem]",
    color: "text-pink-strong/70",
    path: "M55,-48C68,-32,72,-8,66,12C60,32,44,48,23,60C2,72,-23,80,-44,71C-65,62,-82,36,-82,10C-82,-16,-65,-42,-44,-58C-23,-74,2,-80,22,-74C42,-68,42,-64,55,-48Z",
  },
  {
    position: "right-[-8%] top-[24%] h-[15rem] w-[15rem]",
    color: "text-green/80",
    path: "M62,-52C76,-34,79,-9,72,12C65,33,48,50,27,62C6,74,-19,81,-40,72C-61,63,-78,38,-80,13C-82,-12,-69,-37,-50,-55C-31,-73,-6,-84,15,-79C36,-74,48,-70,62,-52Z",
    delay: "[animation-delay:-6s]",
  },
];

const EDGE_BLOBS: BlobSpec[] = [
  {
    position: "right-[-10%] top-[-10%] h-[26rem] w-[26rem]",
    color: "text-pink/40",
    path: "M50,-44C63,-28,70,-6,65,14C60,34,43,52,22,62C1,72,-24,74,-44,63C-64,52,-78,28,-77,4C-76,-20,-60,-43,-40,-58C-20,-73,3,-80,22,-74C41,-68,37,-60,50,-44Z",
  },
  {
    position: "left-[-12%] bottom-[-20%] h-[28rem] w-[28rem]",
    color: "text-green/25",
    path: "M58,-50C72,-32,76,-7,70,14C64,35,48,52,28,62C8,72,-17,75,-38,65C-59,55,-76,32,-78,8C-80,-16,-67,-40,-48,-57C-29,-74,-4,-84,16,-78C36,-72,44,-68,58,-50Z",
    delay: "[animation-delay:-8s]",
  },
];

const SOFT_BLOBS: BlobSpec[] = [
  {
    position: "left-[-10%] top-[10%] h-[22rem] w-[22rem]",
    color: "text-pink/35",
    path: "M52,-46C66,-30,72,-8,67,12C62,32,46,50,26,60C6,70,-18,72,-38,62C-58,52,-74,30,-75,6C-76,-18,-62,-42,-43,-58C-24,-74,0,-82,20,-76C40,-70,38,-62,52,-46Z",
  },
  {
    position: "right-[-8%] bottom-[-15%] h-[24rem] w-[24rem]",
    color: "text-pink/30",
    path: "M60,-52C74,-34,76,-9,69,12C62,33,46,50,26,60C6,70,-19,73,-40,63C-61,53,-78,30,-78,6C-78,-18,-61,-42,-41,-58C-21,-74,2,-82,22,-76C42,-70,46,-70,60,-52Z",
    delay: "[animation-delay:-9s]",
  },
];

export function BackgroundBlobs({ className = "", variant = "soft" }: Props) {
  const blobs = variant === "hero" ? HERO_BLOBS : variant === "edge" ? EDGE_BLOBS : SOFT_BLOBS;

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      {blobs.map((b, i) => (
        <svg
          key={i}
          viewBox="-100 -100 200 200"
          className={`absolute animate-blob opacity-80 ${b.color} ${b.position} ${b.delay ?? ""}`}
        >
          <path d={b.path} fill="currentColor" />
        </svg>
      ))}
    </div>
  );
}
