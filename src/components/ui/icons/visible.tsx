import { cn } from "@/lib/utils";

export const VisibleIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="16"
      height="12"
      viewBox="0 0 16 12"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 8.5C4.44439 8.39354 4.44515 3.60577 8 3.5C11.5556 3.60646 11.5549 8.39423 8 8.5ZM15.6994 7.06767C15.8948 6.75719 16 6.38363 16 6.00013C16 5.61664 15.8948 5.24306 15.6994 4.9326C13.7322 1.79801 10.9258 0 8 0C5.07419 0 2.26799 1.79788 0.300565 4.9326C0.105198 5.24307 0 5.61681 0 6.00031C0 6.38364 0.105198 6.75738 0.300565 7.06784C2.2678 10.2021 5.07419 12 8 12C10.9258 12 13.732 10.2024 15.6994 7.06767Z"
        fill="currentColor"
      />
    </svg>
  );
};
