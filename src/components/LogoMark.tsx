export default function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      role="img"
      aria-label="BroadPivot Consulting mark"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 4 56 18v28L32 60 8 46V18L32 4Z"
        fill="#1f3a52"
      />
      <path
        d="M32 8.8 51.8 20.4v23.2L32 55.2 12.2 43.6V20.4L32 8.8Z"
        fill="#2f8fb0"
      />
      <path
        d="M32 13.5c-6.5 5.2-9.8 10.7-9.8 16.3 0 3.5 1 6.4 3.1 8.8-4.2-.8-8.5.2-12.9 3.1 3.9 4.8 8.7 7.2 14.2 7.2 2.1 0 3.9-.3 5.4-1 1.5.7 3.3 1 5.4 1 5.5 0 10.3-2.4 14.2-7.2-4.4-2.9-8.7-3.9-12.9-3.1 2.1-2.4 3.1-5.3 3.1-8.8 0-5.6-3.3-11.1-9.8-16.3Z"
        fill="#f7f4ec"
      />
      <path
        d="M32 24.7a7.3 7.3 0 1 1 0 14.6 7.3 7.3 0 0 1 0-14.6Z"
        fill="#1f3a52"
      />
      <path
        d="M32 14.5v10.2M32 39.3v10.2M17.5 32h7.2M39.3 32h7.2"
        stroke="#f7f4ec"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M32 27.5v9"
        stroke="#2f8fb0"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
