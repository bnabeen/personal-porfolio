"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function NavigationProgress() {
  return (
    <ProgressBar
      height="2px"
      color="var(--ink)"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
}
