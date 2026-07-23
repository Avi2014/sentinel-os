import type { ReactNode } from "react";

export type KPICardVariant =
  | "default"
  | "success"
  | "warning"
  | "danger";

export interface KPICardData {
  /**
   * Card title displayed in the header.
   */
  title: string;

  /**
   * Primary metric.
   */
  value: number | string;

  /**
   * Optional secondary information shown below the value.
   */
  subtitle?: string;

  /**
   * Leading icon displayed in the header.
   */
  icon: ReactNode;

  /**
   * Visual emphasis for the metric.
   */
  variant?: KPICardVariant;
}