"use client";

import { SnackbarProvider } from "notistack";
import { FC, ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers: FC<ProvidersProps> = ({ children }) => {
  return <SnackbarProvider maxSnack={3}>{children}</SnackbarProvider>;
};
