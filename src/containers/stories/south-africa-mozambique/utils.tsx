export interface UseStepProps {
  steps: unknown[];
  step: number;
  offset: number;
}

export const useStep = ({ steps, step, offset }: UseStepProps) => {
  const s = Math.max(0, Math.min(steps.length - 1, step - offset));
  return s;
};
