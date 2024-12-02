import { StatusCardProps } from "./interface";
import styles from "./StatusCard.module.css";

export const getFluctuatedValue = (currentValue: number, maxFluctuation: number) => {
  const fluctuation = (Math.random() * 2 - 1) * maxFluctuation;
  const newValue = currentValue + fluctuation;
  return Number(Math.min(Math.max(newValue, 0), 100).toFixed(2));
};

export const getRandomMetrics = () => {
  return {
    cpu: getFluctuatedValue(40, 2),
    memory: getFluctuatedValue(50, 1),
    uptime: { days: 1, hours: 2, minutes: 10 },
  };
};

export const getData = (serviceName: string) => {
  return {
    serviceName,
    status: "running",
    metrics: getRandomMetrics()
  } as StatusCardProps;
};

export const getProgressBarClassName = (value: number) => {
  return `${styles.progressBar}${
    value >= 90 ? ` ${styles.danger}` : 
    value >= 80 ? ` ${styles.warning}` : 
    ''
  }`;
};

const statusMap = {
  running: { text: "Running", color: "#22c55e" },
  stopped: { text: "Stopped", color: "#6B7280" },
  error: { text: "Error", color: "#EF4444" },
};

export const getStatusDisplay = (status: StatusCardProps["status"]) => {
  return statusMap[status];
};


