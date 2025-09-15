export default function IconHeart({ size = 20, filled = false }: { size?: number; filled?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" stroke="currentColor">
      <path
        d="M12 21s-7-4.35-9.5-7.5C.93 11.54 1.41 7.7 4.5 6.3 6.6 5.34 8.9 6.04 10 7.5c1.1-1.46 3.4-2.16 5.5-1.2 3.09 1.39 3.57 5.24 2 7.2C19 16.65 12 21 12 21z"
        fill={filled ? "currentColor" : "none"}
        strokeWidth="1.7"
      />
    </svg>
  );
}
