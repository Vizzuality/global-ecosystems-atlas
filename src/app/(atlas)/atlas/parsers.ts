import { parseAsArrayOf, parseAsFloat } from "nuqs";

export const bboxParser = parseAsArrayOf(parseAsFloat).withDefault([
  -40.057100412, -33.5313590243, -33.2169444375, 22.142895202,
]);
