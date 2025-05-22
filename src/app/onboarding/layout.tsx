import React, { ReactNode } from "react";

type DashboardLayoutProps = {
  children: ReactNode;
};

function DashboardLayout({ children }: DashboardLayoutProps) {
  return <section>{children}</section>;
}

export default DashboardLayout;
