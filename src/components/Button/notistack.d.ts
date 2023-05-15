import { SnackbarProvider as SnackbarProviderBase } from "notistack";

declare module "notistack" {
  export type SnackbarProvider = SnackbarProviderBase
}
