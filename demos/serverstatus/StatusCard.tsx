import React from "react";
import styles from "./StatusCard.module.css";
import { StatusCardProps } from "./interface";
import { getProgressBarClassName, getStatusDisplay } from "./utils";

const StatusCard: React.FC<StatusCardProps> = ({ serviceName, status, metrics }) => {
  const statusDisplay = getStatusDisplay(status);

  return (
    <div className={styles.statusCard}>
      <div className={styles.content}>
        <div className={styles.titleRow}>
          <div className={styles.titleLeft}>
            <span className={styles.title}>{serviceName}</span>
          </div>
          <div className={styles.titleRight}>
            <span className={styles.checkmark} style={{ color: statusDisplay.color }}>
              {status === "running" ? "✓" : "×"}
            </span>
            <span className={styles.status} style={{ color: statusDisplay.color }}>
              {statusDisplay.text}
            </span>
          </div>
        </div>

        <div className={styles.metrics}>
          <div className={styles.metricRow}>
            <div className={styles.metricLabel}>
              <span>🔄 CPU Usage</span>
              <span>{metrics.cpu}%</span>
            </div>
            <div className={styles.progressWrapper}>
              <div 
                className={getProgressBarClassName(metrics.cpu)}
                style={{ width: `${metrics.cpu}%` }}
              />
            </div>

          </div>

          <div className={styles.metricRow}>
            <div className={styles.metricLabel}>
              <span>💾 Memory Usage</span>
              <span>{metrics.memory}%</span>
            </div>
            <div className={styles.progressWrapper}>
              <div 
                className={getProgressBarClassName(metrics.memory)}
                style={{ width: `${metrics.memory}%` }}
              />
            </div>
            
          </div>

          <div className={styles.uptimeRow}>
            <span>⏱️ Running Time</span>
            <div className={styles.uptimeValue}>
              {metrics.uptime.days}d {metrics.uptime.hours}h {metrics.uptime.minutes}m
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
