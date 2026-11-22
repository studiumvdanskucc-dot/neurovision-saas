// Drawn illustrations for the three studies in the Aarhus validation programme.
// Decorative only: each study card explains the same thing in words.

const skin = ["#f2c9a8", "#c98b62", "#8d5a3b", "#e8b48f", "#a86d47", "#f5d3b8"];
const hair = ["#2b2135", "#5a3420", "#1b1b1f", "#c99a3f", "#3b2418", "#7a4a2a"];
const shirts = ["#1261ff", "#ed2f91", "#ff712e", "#1f5aa8", "#870038", "#2bb673"];

/** A front-facing person from the chest up. (x, y) is the centre of the head. */
function Bust({ x, y, i, scale = 1, phone = false }: { x: number; y: number; i: number; scale?: number; phone?: boolean }) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <path d="M-30 62 C-30 38 -18 26 0 26 C18 26 30 38 30 62 Z" fill={shirts[i % 6]} />
    <rect x="-6" y="14" width="12" height="14" rx="5" fill={skin[i % 6]} />
    <circle r="17" fill={skin[i % 6]} />
    <path d={i % 2 ? "M-17 -2 C-19 -20 -6 -24 2 -23 C14 -22 20 -12 17 2 C14 -6 6 -12 -4 -11 C-10 -10 -14 -7 -17 -2 Z" : "M-18 4 C-20 -16 -8 -24 2 -23 C14 -22 21 -10 18 6 L18 16 C14 10 14 -4 8 -9 C0 -13 -10 -10 -14 -2 L-16 16 C-19 12 -18 8 -18 4 Z"} fill={hair[i % 6]} />
    <circle cx="-6" cy="2" r="1.8" fill="#1b2440" />
    <circle cx="6" cy="2" r="1.8" fill="#1b2440" />
    <path d="M-5 9 Q0 12 5 9" stroke="#1b2440" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    {phone && <g transform="translate(10 32) rotate(-8)"><rect width="16" height="26" rx="3" fill="#1b2440" /><rect x="2" y="3" width="12" height="18" rx="1.5" fill="#cfe0ff" /><rect x="4" y="7" width="8" height="2" rx="1" fill="#1261ff" /><rect x="4" y="12" width="6" height="2" rx="1" fill="#8ea2c9" /></g>}
  </g>;
}

/** An AI audience profile: a simplified avatar with a small spark. */
function Profile({ x, y, tone }: { x: number; y: number; tone: number }) {
  const fills = ["#dbe6ff", "#ffe0ea", "#ffe6d6", "#e4ecfa"];
  const strokes = ["#1261ff", "#d0187a", "#d5520c", "#1f5aa8"];
  return <g transform={`translate(${x} ${y})`}>
    <circle r="20" fill={fills[tone % 4]} />
    <circle cy="-5" r="6.5" fill="none" stroke={strokes[tone % 4]} strokeWidth="2" />
    <path d="M-11 12 C-9 4 9 4 11 12" fill="none" stroke={strokes[tone % 4]} strokeWidth="2" strokeLinecap="round" />
    <path d="M15 -19 l1.6 3.4 3.4 1.6 -3.4 1.6 -1.6 3.4 -1.6 -3.4 -3.4 -1.6 3.4 -1.6 Z" fill={strokes[tone % 4]} />
  </g>;
}

export function GazeStudyArt() {
  return <svg className="study-art" viewBox="0 0 520 300" role="img" aria-label="A participant looks at an ad while an eye tracker under the screen records where their eyes go. A small card shows the NeuroVision heatmap for the same ad, to compare with the recorded gaze.">
    <rect x="0" y="0" width="520" height="300" rx="22" fill="#eef3ff" />
    <circle cx="430" cy="58" r="90" fill="#dde7ff" />
    {/* desk */}
    <rect x="160" y="214" width="320" height="10" rx="5" fill="#b9c6e4" />
    <rect x="440" y="224" width="10" height="60" rx="4" fill="#b9c6e4" />
    {/* chair */}
    <rect x="58" y="150" width="14" height="92" rx="7" fill="#1b2440" />
    <rect x="64" y="226" width="92" height="12" rx="6" fill="#1b2440" />
    <rect x="104" y="238" width="8" height="42" rx="4" fill="#1b2440" />
    <rect x="80" y="276" width="56" height="7" rx="3.5" fill="#1b2440" />
    {/* person, seen from the side, facing the screen */}
    <path d="M86 228 C80 196 84 166 104 152 C120 142 142 146 150 160 L160 222 Z" fill="#1261ff" />
    <path d="M112 226 L200 226 C214 226 218 236 214 246 L208 282 L192 282 L194 246 L118 246 Z" fill="#1b2440" />
    <path d="M128 168 C150 176 176 192 206 206" stroke="#f2c9a8" strokeWidth="13" strokeLinecap="round" fill="none" />
    <path d="M128 168 C150 176 176 192 206 206" stroke="#1261ff" strokeWidth="14" strokeLinecap="round" fill="none" strokeDasharray="44 200" />
    <rect x="118" y="126" width="16" height="22" rx="6" fill="#f2c9a8" />
    <circle cx="132" cy="108" r="26" fill="#f2c9a8" />
    <path d="M106 112 C100 84 124 74 140 80 C150 84 156 90 154 96 C142 92 132 96 128 106 C124 116 116 122 106 112 Z" fill="#2b2135" />
    <circle cx="149" cy="106" r="2.6" fill="#1b2440" />
    {/* infrared beam from the tracker to the eye */}
    <path d="M318 212 L151 104 L154 112 L330 212 Z" fill="#1261ff" opacity=".14" />
    {/* monitor */}
    <rect x="262" y="52" width="196" height="138" rx="12" fill="#1b2440" />
    <rect x="270" y="60" width="180" height="122" rx="6" fill="#fff" />
    <rect x="280" y="70" width="88" height="8" rx="4" fill="#1b2440" />
    <rect x="280" y="84" width="60" height="6" rx="3" fill="#c4cad7" />
    <circle cx="398" cy="128" r="30" fill="#ffd9c4" />
    <circle cx="398" cy="128" r="18" fill="#ff712e" />
    <rect x="280" y="158" width="40" height="12" rx="6" fill="#1261ff" />
    {/* recorded fixations */}
    <path d="M300 74 L332 86 L392 124 L404 134 L300 164" fill="none" stroke="#e60f57" strokeWidth="1.6" strokeDasharray="3 3" />
    <circle cx="300" cy="74" r="6" fill="#e60f57" opacity=".85" />
    <circle cx="332" cy="86" r="4.5" fill="#e60f57" opacity=".85" />
    <circle cx="392" cy="124" r="9" fill="#e60f57" opacity=".85" />
    <circle cx="404" cy="134" r="7" fill="#e60f57" opacity=".85" />
    <circle cx="300" cy="164" r="4" fill="#e60f57" opacity=".85" />
    <rect x="350" y="190" width="20" height="16" fill="#1b2440" />
    <rect x="326" y="204" width="68" height="10" rx="5" fill="#1b2440" />
    {/* eye tracker under the screen */}
    <rect x="300" y="196" width="40" height="9" rx="4.5" fill="#0e1424" />
    <circle cx="310" cy="200.5" r="2" fill="#ff4234" />
    <text x="270" y="40" className="study-art-label" fill="#e60f57">Recorded gaze</text>
    {/* predicted heatmap card */}
    <g transform="translate(356 226) rotate(-3)">
      <rect width="138" height="62" rx="10" fill="#fff" stroke="#d5dceb" />
      <rect x="8" y="8" width="62" height="46" rx="5" fill="#f3f5fa" />
      <radialGradient id="study-heat" cx="50%" cy="50%" r="50%"><stop offset="0" stopColor="#ff2400" /><stop offset=".45" stopColor="#ffd000" /><stop offset=".8" stopColor="#58ed78" stopOpacity=".6" /><stop offset="1" stopColor="#58ed78" stopOpacity="0" /></radialGradient>
      <ellipse cx="52" cy="38" rx="18" ry="15" fill="url(#study-heat)" />
      <ellipse cx="22" cy="17" rx="12" ry="8" fill="url(#study-heat)" opacity=".8" />
      <text x="78" y="28" className="study-art-label" fill="#1b2440">Predicted</text>
      <text x="78" y="44" className="study-art-small" fill="#5a6275">heatmap</text>
    </g>
  </svg>;
}

export function SurveyStudyArt() {
  return <svg className="study-art" viewBox="0 0 520 300" role="img" aria-label="Real participants answer a questionnaire on their phones, and a group of AI audience profiles answers the same questionnaire. Both groups then rank the same creatives.">
    <rect x="0" y="0" width="520" height="300" rx="22" fill="#fff1f6" />
    <circle cx="90" cy="250" r="110" fill="#ffe3ee" />
    {/* people */}
    <Bust x={62} y={130} i={0} phone />
    <Bust x={116} y={112} i={2} />
    <Bust x={128} y={176} i={4} scale={1.05} phone />
    <Bust x={56} y={196} i={3} scale={.95} />
    <text x="30" y="40" className="study-art-label" fill="#d0187a">People</text>
    {/* the same questionnaire */}
    <g transform="translate(196 44)">
      <rect width="128" height="176" rx="14" fill="#fff" stroke="#f1c3d4" />
      <rect x="14" y="14" width="60" height="8" rx="4" fill="#1b2440" />
      <rect x="14" y="28" width="96" height="6" rx="3" fill="#c4cad7" />
      {[0, 1, 2, 3].map(row => <g key={row} transform={`translate(14 ${52 + row * 28})`}>
        <rect width="100" height="20" rx="10" fill={row === 1 ? "#ffe0ea" : "#f5f7fb"} />
        <circle cx="12" cy="10" r="5" fill="none" stroke={row === 1 ? "#d0187a" : "#b9c1d1"} strokeWidth="1.8" />
        {row === 1 && <circle cx="12" cy="10" r="2.4" fill="#d0187a" />}
        <rect x="24" y="7" width={[52, 64, 40, 58][row]} height="6" rx="3" fill={row === 1 ? "#d0187a" : "#c4cad7"} />
      </g>)}
    </g>
    <path d="M150 120 C170 112 180 110 192 112" stroke="#d0187a" strokeWidth="2" fill="none" strokeDasharray="4 4" markerEnd="url(#study-arrow)" />
    <path d="M370 120 C350 112 340 110 328 112" stroke="#1261ff" strokeWidth="2" fill="none" strokeDasharray="4 4" markerEnd="url(#study-arrow-blue)" />
    <defs>
      <marker id="study-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#d0187a" /></marker>
      <marker id="study-arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#1261ff" /></marker>
    </defs>
    {/* AI profiles */}
    {[0, 1, 2].map(r => [0, 1, 2].map(c => <Profile key={`${r}-${c}`} x={392 + c * 46} y={90 + r * 50} tone={r * 3 + c} />))}
    <text x="380" y="40" className="study-art-label" fill="#1261ff">AI profiles</text>
    {/* the rankings, compared */}
    <g transform="translate(150 246)">
      <rect width="220" height="38" rx="19" fill="#fff" stroke="#e3e7ef" />
      {["B", "A", "C"].map((tag, k) => <g key={tag} transform={`translate(${16 + k * 30} 9)`}><rect width="22" height="20" rx="6" fill="#ffe0ea" /><text x="11" y="14.5" textAnchor="middle" className="study-art-label" fill="#d0187a">{tag}</text></g>)}
      <text x="110" y="24" textAnchor="middle" className="study-art-label" fill="#1b2440">=?</text>
      {["B", "A", "C"].map((tag, k) => <g key={tag} transform={`translate(${136 + k * 30} 9)`}><rect width="22" height="20" rx="6" fill="#dbe6ff" /><text x="11" y="14.5" textAnchor="middle" className="study-art-label" fill="#1261ff">{tag}</text></g>)}
    </g>
  </svg>;
}

export function RedesignStudyArt() {
  const Poster = ({ x, tag, better }: { x: number; tag: string; better?: boolean }) => <g transform={`translate(${x} 34)`}>
    <rect width="112" height="146" rx="12" fill="#fff" stroke={better ? "#1261ff" : "#d5dceb"} strokeWidth={better ? 2 : 1} />
    <rect x="12" y="14" width={better ? 80 : 56} height={better ? 12 : 7} rx="4" fill="#1b2440" />
    <rect x="12" y={better ? 32 : 26} width="62" height="6" rx="3" fill="#c4cad7" />
    <circle cx="56" cy="88" r={better ? 26 : 20} fill="#ff712e" />
    <circle cx="56" cy="88" r={better ? 14 : 11} fill="#ffb58a" />
    {/* locked brand elements */}
    <rect x="12" y="122" width="34" height="12" rx="4" fill="#1b2440" />
    <g transform="translate(86 118)"><rect x="0" y="6" width="14" height="11" rx="2.5" fill="#870038" /><path d="M3 6 V3.5 a4 4 0 0 1 8 0 V6" fill="none" stroke="#870038" strokeWidth="2" /></g>
    <g transform={`translate(${better ? 84 : 92} -12)`}><rect width={better ? 36 : 22} height="22" rx="11" fill={better ? "#1261ff" : "#1b2440"} /><text x={better ? 18 : 11} y="15" textAnchor="middle" className="study-art-label" fill="#fff">{tag}</text></g>
  </g>;
  return <svg className="study-art" viewBox="0 0 520 300" role="img" aria-label="An original ad and a redesigned version with the logo and packshot locked. Fresh participants each see only one of the two versions.">
    <rect x="0" y="0" width="520" height="300" rx="22" fill="#fff4ec" />
    <circle cx="260" cy="110" r="96" fill="#ffe6d6" />
    <Poster x={86} tag="A" />
    <Poster x={322} tag="New" better />
    <g transform="translate(236 86)"><circle cx="24" cy="24" r="24" fill="#fff" stroke="#f3c7a8" /><text x="24" y="29" textAnchor="middle" className="study-art-label" fill="#d5520c">vs</text></g>
    <path d="M260 196 V290" stroke="#f3c7a8" strokeWidth="2" strokeDasharray="5 5" />
    {/* fresh participants: each group sees one version only */}
    <Bust x={84} y={226} i={1} scale={.78} />
    <Bust x={142} y={232} i={5} scale={.78} />
    <Bust x={200} y={226} i={2} scale={.78} />
    <Bust x={320} y={226} i={0} scale={.78} />
    <Bust x={378} y={232} i={3} scale={.78} />
    <Bust x={436} y={226} i={4} scale={.78} />
  </svg>;
}
