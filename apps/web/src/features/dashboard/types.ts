/**
 * -----------------------------------------------------------------------------
 * SentinelOS Dashboard Types
 * -----------------------------------------------------------------------------
 * Shared types for the Intelligent Operations Dashboard.
 *
 * These interfaces mirror the backend API contract:
 *
 * GET /api/v1/dashboard
 *
 * Components must consume these types instead of creating their own models.
 * -----------------------------------------------------------------------------
 */

export type PlantStatus = "ONLINE" | "OFFLINE" | "WARNING" | "MAINTENANCE";

export type AlertSeverity = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";

export type IncidentStatus =
  "OPEN" | "ACKNOWLEDGED" | "IN_PROGRESS" | "RESOLVED";

export interface DashboardSummary {
  totalPlants: number;
  onlinePlants: number;
  offlinePlants: number;
  activeAlerts: number;
  openIncidents: number;
  aiRecommendations: number;
}

export interface PlantOverview {
  id: string;

  name: string;

  location: string;

  status: PlantStatus;

  efficiency: number;

  lastUpdated: string;
}

export interface Alert {
  id: string;

  title: string;

  description: string;

  severity: AlertSeverity;

  createdAt: string;
}

export interface Incident {
  id: string;

  title: string;

  status: IncidentStatus;

  assignedTo?: string;

  createdAt: string;
}

export interface TimelineEvent {
  id: string;

  title: string;

  description: string;

  timestamp: string;
}

export interface AIRecommendation {
  id: string;

  title: string;

  description: string;

  confidence: number;
}

export interface DashboardResponse {
  summary: DashboardSummary;

  plants: PlantOverview[];

  alerts: Alert[];

  incidents: Incident[];

  timeline: TimelineEvent[];

  recommendations: AIRecommendation[];
}
