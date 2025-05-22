import React, { ReactNode } from "react";

type OnboardingLayoutProps = {
  children: ReactNode;
};

function OnboardingLayout({ children }: OnboardingLayoutProps) {
  return (
    <section className="w-full center h-dvh bg-amber-100">{children}</section>
  );
}

export default OnboardingLayout;
