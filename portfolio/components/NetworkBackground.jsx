// Subtle animated node-link graph used as ambient hero backdrop.
// A quiet nod to graph-based systems thinking (see: FinGraph AI project)
// rendered at low opacity so it reads as texture, not decoration.

const nodes = [
  { x: 80, y: 90, r: 4, delay: "0s" },
  { x: 240, y: 40, r: 3, delay: "1.2s" },
  { x: 360, y: 140, r: 5, delay: "0.4s" },
  { x: 150, y: 230, r: 3, delay: "2s" },
  { x: 470, y: 70, r: 4, delay: "0.8s" },
  { x: 560, y: 200, r: 3, delay: "1.6s" },
  { x: 320, y: 280, r: 4, delay: "2.4s" },
  { x: 640, y: 110, r: 3, delay: "0.6s" },
  { x: 460, y: 260, r: 3, delay: "1.8s" },
  { x: 700, y: 230, r: 4, delay: "1s" },
];

const edges = [
  [0, 1],
  [1, 2],
  [2, 4],
  [0, 3],
  [3, 6],
  [2, 6],
  [4, 5],
  [5, 7],
  [5, 8],
  [6, 8],
  [7, 9],
  [8, 9],
];

export default function NetworkBackground({ className = "" }) {
  return (
    <svg
      viewBox="0 0 760 340"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="edgeGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>

      {edges.map(([a, b], i) => {
        const n1 = nodes[a];
        const n2 = nodes[b];
        return (
          <line
            key={i}
            x1={n1.x}
            y1={n1.y}
            x2={n2.x}
            y2={n2.y}
            stroke="url(#edgeGradient)"
            strokeWidth="1"
            strokeOpacity="0.22"
          />
        );
      })}

      {nodes.map((n, i) => (
        <g
          key={i}
          className="animate-drift"
          style={{ animationDelay: n.delay, transformOrigin: `${n.x}px ${n.y}px` }}
        >
          <circle
            cx={n.x}
            cy={n.y}
            r={n.r + 6}
            fill="url(#edgeGradient)"
            opacity="0.08"
          />
          <circle cx={n.x} cy={n.y} r={n.r} fill="url(#edgeGradient)" opacity="0.55" />
        </g>
      ))}
    </svg>
  );
}
