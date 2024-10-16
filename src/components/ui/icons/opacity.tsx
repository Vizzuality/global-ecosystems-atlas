import { cn } from "@/lib/utils";

export const OpacityIcon = ({ className }: { className?: string }) => {
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
        d="M6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12V0ZM7 11.917C7.34415 11.8593 7.67837 11.7723 8 11.6586V0.341411C7.67837 0.227731 7.34415 0.140696 7 0.0829584V11.917ZM10 10.4722C9.6934 10.7466 9.35842 10.99 9 11.1973V0.802693C9.35842 1.01003 9.6934 1.25338 10 1.52779V10.4722ZM11 9.31779C11.6318 8.36749 12 7.22674 12 6C12 4.77326 11.6318 3.63251 11 2.6822V9.31779Z"
        fill="currentColor"
      />
    </svg>
  );
};
