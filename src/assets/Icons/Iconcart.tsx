export default function IconCart({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M6 6h15l-1.5 9h-12L5 3H2" strokeWidth="1.7" />
      <circle cx="9" cy="21" r="1.5" fill="currentColor" />
      <circle cx="18" cy="21" r="1.5" fill="currentColor" />
    </svg>
  );
}
