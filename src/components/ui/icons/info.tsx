import { cn } from "@/lib/utils";

export const InfoIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.00012207 6C0.00012207 2.68607 2.68643 0 6.00012 0C9.31381 0 12.0001 2.68631 12.0001 6C12.0001 9.31393 9.31381 12 6.00012 12C2.6862 12 0.00012207 9.31369 0.00012207 6ZM6.08069 4.0532C5.44264 4.0532 5.00012 3.60025 5.00012 3.0003C5.00012 2.43708 5.44393 1.94739 6.08069 1.94739C6.71746 1.94739 7.17041 2.43708 7.17041 3.0003C7.17041 3.60025 6.71746 4.0532 6.08069 4.0532ZM7.07848 9.7578H5.09207V5.06414H7.07848V9.7578Z"
        fill="currentColor"
      />
    </svg>
  );
};
