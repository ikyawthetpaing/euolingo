import "@expo/match-media";

import { useMediaQuery } from "react-responsive";

const breakpoints = [
  { name: "sm", maxWidth: 640 },
  { name: "md", maxWidth: 768 },
  { name: "lg", maxWidth: 1024 },
  { name: "xl", maxWidth: 1280 },
  { name: "2xl", maxWidth: 1536 },
];

type Breakpoints = "sm" | "md" | "lg" | "xl" | "2xl";

export function useBreakpoint(): Breakpoints {
  const activeBreakpoint =
    breakpoints.find((breakpoint) =>
      useMediaQuery({ maxDeviceWidth: breakpoint.maxWidth })
    ) || breakpoints[breakpoints.length - 1];
  return activeBreakpoint.name as Breakpoints;
}
