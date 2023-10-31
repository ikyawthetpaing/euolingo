import React, { createContext, useContext, useEffect, useState } from "react";
import { Dimensions } from "react-native";

import { isWeb } from "@/lib/utils";

type Breakpoints = "sm" | "md" | "lg" | "xl" | "2xl";

const BreakpointsContext = createContext<Breakpoints | undefined>(undefined);

export function useBreakpoint() {
  const context = useContext(BreakpointsContext);
  if (!context) {
    throw new Error("useBreakpoint must be used within a BreakpointsProvider");
  }
  return context;
}

interface Props {
  children: React.ReactNode;
}

function useDevice() {
  const breakpoints = [
    { name: "sm", maxWidth: 640 },
    { name: "md", maxWidth: 768 },
    { name: "lg", maxWidth: 1024 },
    { name: "xl", maxWidth: 1280 },
    { name: "2xl", maxWidth: 1536 },
  ];

  const getActiveBreakpoint = () => {
    const screenWidth = isWeb()
      ? window.innerWidth
      : Dimensions.get("window").width;

    const matchingBreakpoint = breakpoints.find(
      (breakpoint) => screenWidth <= breakpoint.maxWidth
    );
    return matchingBreakpoint
      ? (matchingBreakpoint.name as Breakpoints)
      : (breakpoints[breakpoints.length - 1].name as Breakpoints);
  };

  const [activeBreakpoint, setActiveBreakpoint] = useState<Breakpoints>(
    getActiveBreakpoint()
  );

  useEffect(() => {
    const handleResize = () => {
      const newBreakpoint = getActiveBreakpoint();
      if (newBreakpoint !== activeBreakpoint) {
        setActiveBreakpoint(newBreakpoint);
      }
    };

    if (isWeb()) {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    } else {
      const { Dimensions } = require("react-native");
      Dimensions.addEventListener("change", handleResize);
      return () => {
        Dimensions.removeEventListener("change", handleResize);
      };
    }
  }, [activeBreakpoint]);

  return activeBreakpoint;
}

export function BreakpointsProvider({ children }: Props) {
  const breakpoint = useDevice();

  return (
    <BreakpointsContext.Provider value={breakpoint}>
      {children}
    </BreakpointsContext.Provider>
  );
}
