// Define the type locally
type Metric = {
  id: string;
  name: string;
  value: number;
};

type ReportHandler = (metric: Metric) => void;

const reportWebVitals = async (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    try {
      const { onCLS, onFID, onFCP, onLCP, onTTFB } = await import('web-vitals');
      onCLS(onPerfEntry);
      onFID(onPerfEntry);
      onFCP(onPerfEntry);
      onLCP(onPerfEntry);
      onTTFB(onPerfEntry);
    } catch (error) {
      console.error('Error loading web-vitals:', error);
    }
  }
};

export default reportWebVitals;
