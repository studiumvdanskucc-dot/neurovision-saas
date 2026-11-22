// A wordless picture of an AI audience survey: a question card with one answer
// picked, the respondents, and their answers coming back as speech bubbles.
// Lines stand in for text. Decorative: the card's copy says what it means.
export function SurveyIllustration() {
  const options = [
    { y: 108, width: 96, picked: false },
    { y: 140, width: 120, picked: true },
    { y: 172, width: 78, picked: false },
  ];
  const answers = [
    { y: 64, tone: "#1261ff", fill: "#ffffff", stroke: "#e3e7ef", lines: [118, 84] },
    { y: 118, tone: "#d0187a", fill: "#ffe8f0", stroke: "#ffd0e0", lines: [132, 70] },
    { y: 172, tone: "#ff712e", fill: "#eef8f2", stroke: "#d3eedd", lines: [104, 92] },
  ];
  return <svg className="survey-illustration" viewBox="0 0 480 232" aria-hidden="true" focusable="false">
    <defs>
      <filter id="survey-shadow" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#2a1030" floodOpacity=".12" /></filter>
    </defs>
    <circle cx="96" cy="44" r="78" fill="#ffe3ee" />
    <circle cx="420" cy="206" r="64" fill="#e6eefd" />

    <g className="si-card" filter="url(#survey-shadow)">
      <rect x="26" y="22" width="214" height="196" rx="18" fill="#fff" />
      <rect x="46" y="42" width="174" height="5" rx="2.5" fill="#eef0f5" />
      <rect x="46" y="42" width="112" height="5" rx="2.5" fill="#d0187a" />
      <rect x="46" y="62" width="150" height="10" rx="5" fill="#1b2440" />
      <rect x="46" y="80" width="104" height="8" rx="4" fill="#d5dbe7" />
      {options.map(option => <g key={option.y} className={option.picked ? "si-option si-picked" : "si-option"}>
        <rect x="42" y={option.y} width="182" height="24" rx="12" fill={option.picked ? "#ffe0ea" : "#f5f7fb"} />
        <circle cx="58" cy={option.y + 12} r="6" fill="#fff" stroke={option.picked ? "#d0187a" : "#c4cad7"} strokeWidth="2" />
        {option.picked && <circle cx="58" cy={option.y + 12} r="3" fill="#d0187a" />}
        <rect x="72" y={option.y + 8.5} width={option.width} height="7" rx="3.5" fill={option.picked ? "#d0187a" : "#c4cad7"} />
      </g>)}
    </g>

    <g className="si-crowd">
      {["#1261ff", "#d0187a", "#ff712e", "#870038"].map((colour, index) => <g key={colour} transform={`translate(${300 + index * 20} 30)`}>
        <circle r="13" fill={colour} stroke="#fff" strokeWidth="3" />
        <circle cy="-3" r="4" fill="#fff" opacity=".9" />
        <path d="M-6.5 7 a6.5 5 0 0 1 13 0" fill="#fff" opacity=".9" />
      </g>)}
      <g transform="translate(384 30)"><circle r="13" fill="#fff" stroke="#e3e7ef" strokeWidth="1.5" /><path d="M-5 0h10M0 -5v10" stroke="#5a6275" strokeWidth="2" strokeLinecap="round" /></g>
    </g>

    {answers.map((answer, index) => <g key={answer.y} className={`si-answer si-answer-${index + 1}`}>
      <circle cx="270" cy={answer.y + 22} r="12" fill={answer.tone} />
      <circle cx="270" cy={answer.y + 19} r="3.6" fill="#fff" opacity=".9" />
      <path d={`M263.5 ${answer.y + 29} a6.5 5 0 0 1 13 0`} fill="#fff" opacity=".9" />
      <path d={`M296 ${answer.y} h146 a14 14 0 0 1 14 14 v16 a14 14 0 0 1 -14 14 h-138 l-12 8 l2 -9 a14 14 0 0 1 -6 -13 v-16 a14 14 0 0 1 14 -14 z`} fill={answer.fill} stroke={answer.stroke} />
      <rect x="306" y={answer.y + 12} width={answer.lines[0]} height="7" rx="3.5" fill={index === 0 ? "#1b2440" : answer.tone} opacity={index === 0 ? 1 : .75} />
      <rect x="306" y={answer.y + 26} width={answer.lines[1]} height="7" rx="3.5" fill={index === 0 ? "#d5dbe7" : answer.tone} opacity=".35" />
    </g>)}
  </svg>;
}
