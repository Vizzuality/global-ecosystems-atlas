import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(value: number, options?: Intl.NumberFormatOptions) {
  const v = Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    style: "decimal",
    ...options,
  });

  return v.format(value);
}

export function formatPercentage(
  value: number,
  options?: Intl.NumberFormatOptions,
  displayUnit: boolean = true,
) {
  const v = Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    style: "percent",
    ...options,
  });

  if (value < 0.0001 && value > 0) {
    if (!displayUnit) {
      return "<0.01";
    }
    return "<0.01%";
  }

  if (!displayUnit) {
    return v.format(value).replace("%", "");
  }

  return v.format(value);
}

export function formatHA(value: number, options?: Intl.NumberFormatOptions) {
  const v = Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    style: "unit",
    unit: "hectare",
    unitDisplay: "short",
    ...options,
  });

  return v.format(value).replace(/(\d+)([A-Za-z]+)/, "$1 $2");
}
