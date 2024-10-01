export interface DebugOffsetProps {
  offset: number;
}

export const DebugOffset = ({ offset }: DebugOffsetProps) => {
  return (
    <div
      className="fixed left-0 z-50 h-0 w-full border border-dashed"
      style={{ top: `${offset * 100}%` }}
    >
      <p className="text-xs font-semibold">trigger: {offset}</p>
    </div>
  );
};
