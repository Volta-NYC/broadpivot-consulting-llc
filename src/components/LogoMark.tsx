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
        d="M32 9.5c-7.1 6-10.6 11.7-10.6 17.1 0 3.2 1 5.9 3 8.1-5-2-9.8-1.6-14.4 1.2 3.6 5.4 8.1 8.1 13.5 8.1 2.9 0 5.3-.7 7.2-2.2-1.4 4.6-.9 9.2 1.3 13.9 2.2-4.7 2.6-9.3 1.3-13.9 1.9 1.5 4.3 2.2 7.2 2.2 5.4 0 9.9-2.7 13.5-8.1-4.6-2.8-9.4-3.2-14.4-1.2 2-2.2 3-4.9 3-8.1 0-5.4-3.5-11.1-10.6-17.1Z"
        fill="#f7f4ec"
      />
      <path
        d="M32 26.2c3.9 0 7 3.2 7 7.1 0 4-3.1 7.2-7 7.2s-7-3.2-7-7.2c0-3.9 3.1-7.1 7-7.1Z"
        fill="#1f3a52"
      />
      <path
        d="M29 22.8c0-1.7 1.4-3 3-3s3 1.3 3 3m-9.5-2.3c-2.3-2.1-4.6-2.5-6.8-1.1m19.8 1.1c2.3-2.1 4.6-2.5 6.8-1.1"
        stroke="#1f3a52"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M18.4 33.2c5-2.6 9.5-2.5 13.6.1m13.6-.1c-5-2.6-9.5-2.5-13.6.1m-12 5c4.8-1.2 8.8-1 12 .8m12-1c-4.8-1.2-8.8-.9-12 .9"
        stroke="#2f8fb0"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M26.7 34h10.6M27.8 38.8h8.4M29.1 43.5h5.8"
        stroke="#f7f4ec"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
