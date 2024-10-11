import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export interface SwipperProps {
  x?: number;
  rect?: DOMRect;
  onChange?: (x: number) => void;
}

export const Swipper = ({ x = 0.5, rect, onChange }: SwipperProps) => {
  const handleChange = (clientX: number) => {
    const x = clientX / (rect?.width || 1);
    onChange?.(Math.max(Math.min(x, 1), 0));
  };

  const handleMouseStart = () => {
    document.body.style.userSelect = "none";
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleEnd);
  };

  const handleTouchStart = () => {
    document.body.style.userSelect = "none";
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleEnd);
  };

  const handleMouseMove = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    handleChange(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();

    handleChange(e.touches[0].clientX);
  };

  const handleEnd = () => {
    document.body.style.userSelect = "auto";
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleEnd);

    document.removeEventListener("touchmove", handleTouchMove);
    document.removeEventListener("touchend", handleEnd);
  };

  return (
    <div
      className="absolute top-0 z-10 h-full w-2 cursor-pointer bg-white"
      style={{
        left: `${x * 100}%`,
        transform: "translateX(-50%)",
      }}
      onMouseDown={handleMouseStart}
      onTouchStart={handleTouchStart}
    >
      <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white">
        <FiChevronLeft />
        <FiChevronRight />
      </div>
    </div>
  );
};
