import { INITIAL_METRICS, RefineryMetrics, RefineryMetricKey } from './types';

let baseValues: RefineryMetrics = { ...INITIAL_METRICS };

const getRandomIncrement = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getData = async () => {
  (Object.keys(baseValues) as RefineryMetricKey[]).forEach((key) => {
    if (key !== 'TotalProcessingNum') {
      baseValues[key] += getRandomIncrement(1, 5);
    }
  });
  baseValues.TotalProcessingNum = 
    baseValues.PipelineOutputNum + 
    baseValues.RailwayOutputNum + 
    baseValues.HighwayOutputNum + 
    baseValues.WaterwayOutputNum;
    
  return baseValues;
};
