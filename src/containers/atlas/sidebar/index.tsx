import { PropsWithChildren } from "react";

export const AtlasSidebar = ({ children }: PropsWithChildren) => {
  return (
    <aside className="w-full max-w-md border-r border-gray-200 bg-white p-6">{children}</aside>
  );
};
