// Icones proprios, desenhados em SVG simples (sem dependencia externa e sem
// reproduzir marcas registradas). Estilo consistente: traco arredondado, 1.8px.

const base = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

export function ShieldIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5c2.4 1.4 4.6 2 6.8 2.1.3 5.7-1.7 10.9-6.8 13.9-5.1-3-7.1-8.2-6.8-13.9 2.2-.1 4.4-.7 6.8-2.1Z" />
      <path d="m9.2 12.3 2 2 3.6-4" />
    </svg>
  );
}

export function HourglassIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 3h11M6.5 21h11" />
      <path d="M7.5 3c0 4 2.3 5.6 4.5 6.3M16.5 3c0 4-2.3 5.6-4.5 6.3M7.5 21c0-4 2.3-5.6 4.5-6.3M16.5 21c0-4-2.3-5.6-4.5-6.3" />
    </svg>
  );
}

export function GiftOffIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="9.5" width="16" height="10.5" rx="1.4" />
      <path d="M4 9.5h16v3.2H4z" opacity="0.55" />
      <path d="M12 9.5V20" />
      <path d="M12 9.5c-1-2.3-2.7-4-4.4-4-1.2 0-2.1.8-2.1 1.9 0 1.1 1 2.1 2.6 2.1" />
      <path d="M12 9.5c1-2.3 2.7-4 4.4-4 1.2 0 2.1.8 2.1 1.9 0 1.1-1 2.1-2.6 2.1" />
      <path d="M3 3.5 21 20.5" strokeWidth="2" />
    </svg>
  );
}

export function UsersHeartIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="8.5" cy="8" r="2.6" />
      <path d="M3.2 19c.5-3 2.5-4.6 5.3-4.6 1.1 0 2 .3 2.8.8" />
      <path d="M17.4 12.6c1.7-1.5 3.4-.2 3.4 1.4 0 1.8-1.9 3.2-3.4 4.4-1.5-1.2-3.4-2.6-3.4-4.4 0-1.6 1.7-2.9 3.4-1.4Z" />
    </svg>
  );
}

export function MonitorIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4.5" width="18" height="12" rx="1.6" />
      <path d="M8.5 20h7M12 16.5V20" />
    </svg>
  );
}

export function GamepadIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 9h10a4 4 0 0 1 4 4.4l-.6 3.1a2 2 0 0 1-3.5 1L15 15.5H9l-1.9 2a2 2 0 0 1-3.5-1L3 13.4A4 4 0 0 1 7 9Z" />
      <path d="M8 12v2.2M6.9 13.1h2.2" />
      <circle cx="16" cy="12.2" r="0.6" fill="currentColor" />
      <circle cx="17.6" cy="13.8" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function PlayCircleIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M10.3 9.1 15 12l-4.7 2.9V9.1Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PhoneAndroidIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="6" y="2.8" width="12" height="18.4" rx="2.6" />
      <path d="M9.5 5.6h5" />
      <path d="M12 17.6h.01" strokeWidth="2.4" />
    </svg>
  );
}

export function PhoneNotchIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="6" y="2.8" width="12" height="18.4" rx="3.4" />
      <path d="M10 3.7h4" strokeWidth="2.2" />
      <circle cx="12" cy="18.4" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SparkleIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5c.5 3 1.7 4.2 4.7 4.7-3 .5-4.2 1.7-4.7 4.7-.5-3-1.7-4.2-4.7-4.7 3-.5 4.2-1.7 4.7-4.7Z" />
      <path d="M18.5 14.5c.3 1.6.9 2.2 2.5 2.5-1.6.3-2.2.9-2.5 2.5-.3-1.6-.9-2.2-2.5-2.5 1.6-.3 2.2-.9 2.5-2.5Z" />
    </svg>
  );
}

export function BulbIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3Z" />
    </svg>
  );
}

export function CompassIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m14.5 9.5-1.6 4.2a1 1 0 0 1-.6.6l-3.8 1.4 1.6-4.2a1 1 0 0 1 .6-.6l3.8-1.4Z" />
    </svg>
  );
}

export function ArrowLeftIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M18 12H5.5" />
      <path d="m10.5 6.5-6 5.5 6 5.5" />
    </svg>
  );
}

export function ExternalLinkIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M9 6H5.5A1.5 1.5 0 0 0 4 7.5v11A1.5 1.5 0 0 0 5.5 20h11a1.5 1.5 0 0 0 1.5-1.5V15" />
      <path d="M13.5 4H20v6.5" />
      <path d="M20 4 11 13" />
    </svg>
  );
}

// Mapa de icone + variante de cor por plataforma (usado na Home e no TutorialPage).
export const platformMeta = {
  Windows: { Icon: MonitorIcon, variant: "coral" },
  Roblox: { Icon: GamepadIcon, variant: "violet" },
  YouTube: { Icon: PlayCircleIcon, variant: "pink" },
  Android: { Icon: PhoneAndroidIcon, variant: "teal" },
  iOS: { Icon: PhoneNotchIcon, variant: "yellow" }
};
