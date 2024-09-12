import { parseAsArrayOf, parseAsFloat } from "nuqs";

export const bboxParser = parseAsArrayOf(parseAsFloat).withDefault([-227.18, -53.92, 88.88, 71.99]);
