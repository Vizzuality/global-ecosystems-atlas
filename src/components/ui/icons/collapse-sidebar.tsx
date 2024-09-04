import { cn } from "@/lib/utils";

export const CollapseSidebarIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22 12C22 12.5523 21.5523 13 21 13L11.4142 13L14.7071 16.2929C15.0976 16.6834 15.0976 17.3166 14.7071 17.7071C14.3166 18.0976 13.6834 18.0976 13.2929 17.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L13.2929 6.29289C13.6834 5.90237 14.3166 5.90237 14.7071 6.29289C15.0976 6.68342 15.0976 7.31658 14.7071 7.70711L11.4142 11L21 11C21.5523 11 22 11.4477 22 12Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 1C3.55228 1 4 1.44772 4 2V22C4 22.5523 3.55228 23 3 23C2.44772 23 2 22.5523 2 22V2C2 1.44772 2.44772 1 3 1Z"
        fill="currentColor"
      />
    </svg>
  );
};
