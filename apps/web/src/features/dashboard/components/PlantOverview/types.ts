export interface PlantHealthSummary {
  totalPlants: number;
  onlinePlants: number;
  offlinePlants: number;
  warningPlants: number;
}

export interface PlantOverviewProps {
  data: PlantHealthSummary;
}
