// Line icons for the tool colour system and the reason cards.
// Drawn at 24 × 24 with a 1.8 stroke, so they stay light next to text.
import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Icon({ size = 24, children, ...props }: IconProps & { children: ReactNode }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>{children}</svg>;
}

export const EyeIcon = (p: IconProps) => <Icon {...p}><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" /><circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" /></Icon>;
export const SurveyIcon = (p: IconProps) => <Icon {...p}><rect x="5" y="4" width="14" height="17" rx="2.5" /><path d="M9.5 2.8h5v2.4h-5z" /><path d="m8.4 10.2 1 1 1.8-1.9M13.3 10.6h2.6M8.4 15.2l1 1 1.8-1.9M13.3 15.6h2.6" /></Icon>;
export const StudioIcon = (p: IconProps) => <Icon {...p}><rect x="3" y="6" width="14" height="14" rx="2.5" /><path d="m3.5 17 4-4 3.5 3.5 2-2 3.5 3.5" /><path d="M19.5 2.5 20.3 4.2 22 5l-1.7.8-.8 1.7-.8-1.7L17 5l1.7-.8z" fill="currentColor" strokeWidth={1} /></Icon>;
export const AbIcon = (p: IconProps) => <Icon {...p}><rect x="2.5" y="5" width="8.5" height="14" rx="3" /><rect x="13" y="5" width="8.5" height="14" rx="3" /><path d="m4.9 15 1.85-6 1.85 6M5.5 13h2.5M15.6 9h1.9a1.5 1.5 0 0 1 0 3h-1.9V9Zm0 3h2.2a1.5 1.5 0 0 1 0 3h-2.2v-3Z" strokeWidth={1.4} /></Icon>;
export const ShelfIcon = (p: IconProps) => <Icon {...p}><rect x="3" y="3" width="18" height="18" rx="2.5" /><path d="M3 12h18M7 8.5v-2M10.5 8.5v-3M15 8.5v-2.5M7.5 17.5v-2.5M12 17.5v-3M16.5 17.5v-2" /></Icon>;
export const CoinsIcon = (p: IconProps) => <Icon {...p}><ellipse cx="12" cy="6" rx="7.5" ry="3" /><path d="M4.5 6v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6" /><path d="M4.5 12v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6" /></Icon>;
export const EyesIcon = (p: IconProps) => <Icon {...p}><ellipse cx="7.5" cy="12" rx="4.2" ry="6.5" /><ellipse cx="16.5" cy="12" rx="4.2" ry="6.5" /><circle cx="8.6" cy="13" r="1.7" fill="currentColor" stroke="none" /><circle cx="17.6" cy="13" r="1.7" fill="currentColor" stroke="none" /></Icon>;
export const ChecklistIcon = (p: IconProps) => <Icon {...p}><path d="m3.5 6 1.6 1.6L8 4.7M3.5 12l1.6 1.6L8 10.7M3.5 18l1.6 1.6L8 16.7M11.5 6.5h9M11.5 12.5h9M11.5 18.5h9" /></Icon>;
export const GlassesIcon = (p: IconProps) => <Icon {...p}><circle cx="6.5" cy="14.5" r="3.8" /><circle cx="17.5" cy="14.5" r="3.8" /><path d="M10.3 14.2c1.1-.8 2.3-.8 3.4 0M2.7 14 4.6 7.5M21.3 14l-1.9-6.5" /></Icon>;
export const TeamIcon = (p: IconProps) => <Icon {...p}><circle cx="12" cy="7.5" r="3" /><circle cx="5" cy="9" r="2.3" /><circle cx="19" cy="9" r="2.3" /><path d="M6.5 20v-1.5a5.5 5.5 0 0 1 11 0V20M1.8 18.5v-.8A3.3 3.3 0 0 1 5 14.4M22.2 18.5v-.8a3.3 3.3 0 0 0-3.2-3.3" /></Icon>;
export const QuestionIcon = (p: IconProps) => <Icon {...p}><path d="M12 3.5c4.7 0 8.5 3.3 8.5 7.4s-3.8 7.4-8.5 7.4c-.9 0-1.8-.1-2.6-.3L5 20.5l1-4c-1.6-1.4-2.5-3.3-2.5-5.6 0-4.1 3.8-7.4 8.5-7.4Z" /><path d="M10 9.2a2.1 2.1 0 1 1 3 1.9c-.6.3-1 .8-1 1.4v.4" /><circle cx="12" cy="15.4" r=".9" fill="currentColor" stroke="none" /></Icon>;
export const CheckIcon = (p: IconProps) => <Icon {...p}><path d="m5 12.5 4.2 4.2L19 7" /></Icon>;
export const DashIcon = (p: IconProps) => <Icon {...p}><path d="M6 12h12" /></Icon>;
export const SearchIcon = (p: IconProps) => <Icon {...p}><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4.5 4.5" /></Icon>;
export const CartIcon = (p: IconProps) => <Icon {...p}><path d="M3 4h2.2l2.2 10.5h10.2L20 7.5H6.4" /><circle cx="9" cy="19" r="1.4" /><circle cx="17" cy="19" r="1.4" /></Icon>;
export const ShieldIcon = (p: IconProps) => <Icon {...p}><path d="M12 2.8 19.5 6v5.6c0 4.4-3.1 8.2-7.5 9.6-4.4-1.4-7.5-5.2-7.5-9.6V6L12 2.8Z" /><path d="m8.8 12 2.2 2.2 4.3-4.4" /></Icon>;
export const KeyIcon = (p: IconProps) => <Icon {...p}><circle cx="8" cy="15" r="4.5" /><path d="m11.3 11.8 8.2-8.3M16.5 6.5l2.5 2.5M14.3 8.7l2 2" /></Icon>;
export const LockIcon = (p: IconProps) => <Icon {...p}><rect x="4.5" y="10.5" width="15" height="10.5" rx="2.5" /><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" /><circle cx="12" cy="15.8" r="1.3" fill="currentColor" stroke="none" /></Icon>;
export const RangeIcon = (p: IconProps) => <Icon {...p}><path d="M4 12h16M4 8v8M20 8v8" /><circle cx="12" cy="12" r="2.6" fill="currentColor" stroke="none" /></Icon>;
export const WindowIcon = (p: IconProps) => <Icon {...p}><rect x="3" y="4" width="18" height="16" rx="2.5" /><path d="M3 8.5h18" /><rect x="7" y="11.5" width="6" height="5" rx="1" /></Icon>;
export const LayoutIcon = (p: IconProps) => <Icon {...p}><rect x="3" y="4" width="18" height="16" rx="2.5" /><path d="M7 9h4M7 12.5h4M7 16h4" /><rect x="14" y="8.5" width="4" height="8" rx="1" /></Icon>;
export const PackageIcon = (p: IconProps) => <Icon {...p}><path d="M7 3.5h10l1.5 4v12a1.5 1.5 0 0 1-1.5 1.5H7a1.5 1.5 0 0 1-1.5-1.5v-12L7 3.5Z" /><path d="M5.5 7.5h13" /><rect x="9" y="11" width="6" height="6" rx="1" /></Icon>;
