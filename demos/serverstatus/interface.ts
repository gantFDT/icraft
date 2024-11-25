export type StatusType = "running" | "stopped" | "error";

export interface StatusCardProps {
  // Service basic info
  serviceName: string;
  status: StatusType;
  // System metrics
  metrics: {
    cpu: number;
    memory: number;
    uptime: {
      days: number;
      hours: number;
      minutes: number;
    };
  };
}