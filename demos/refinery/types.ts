export type RefineryMetrics = {
  PipelineOutputNum: number;
  RailwayOutputNum: number;
  HighwayOutputNum: number;
  WaterwayOutputNum: number;
  TotalProcessingNum: number;
  "Volume1#": number;
  "Volume2#": number;
};

export const INITIAL_METRICS: RefineryMetrics = {
  PipelineOutputNum: 1000,
  RailwayOutputNum: 800,
  HighwayOutputNum: 600,
  WaterwayOutputNum: 400,
  TotalProcessingNum: 2800,
  "Volume1#": 1500,
  "Volume2#": 1200,
};

export type RefineryMetricKey = keyof RefineryMetrics;

export const LINE_NAMES = ['Line1', 'Line2', 'Line3', 'Line4', 'Line5', 'Line6', 'Line7', 'Line8', 'Line9', 'Line10', 'Line11'] as const;