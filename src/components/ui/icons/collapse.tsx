import { cn } from "@/lib/utils";

export const CollapseIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <g id="icon/24px/collapse-sidebar-L0">
        <path
          id="Shape"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.3 3.2C3.69249 3.2 3.2 3.69249 3.2 4.3V19.7C3.2 20.3075 3.69249 20.8 4.3 20.8H6.6V3.2H4.3ZM4.3 1C2.47746 1 1 2.47746 1 4.3V19.7C1 21.5225 2.47746 23 4.3 23H19.7C21.5225 23 23 21.5225 23 19.7V4.3C23 2.47746 21.5225 1 19.7 1H4.3ZM8.8 3.2V20.8H19.7C20.3075 20.8 20.8 20.3075 20.8 19.7V4.3C20.8 3.69249 20.3075 3.2 19.7 3.2H8.8Z"
          fill="currentColor"
        />
        <path
          id="Vector 65 (Stroke)"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.7073 8.29289C17.0978 8.68342 17.0978 9.31658 16.7073 9.70711L14.4144 12L16.7073 14.2929C17.0978 14.6834 17.0978 15.3166 16.7073 15.7071C16.3167 16.0976 15.6836 16.0976 15.293 15.7071L11.5859 12L15.293 8.29289C15.6836 7.90237 16.3167 7.90237 16.7073 8.29289Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};
