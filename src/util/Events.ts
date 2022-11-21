import { WheelEvent } from 'react';
import EventEmitter from 'eventemitter3';

type CategoricalChartState = import('../chart/generateCategoricalChart').CategoricalChartState;

interface EventCenter extends EventEmitter<EventTypes> {
  setMaxListeners?(maxListeners: number): void;

  _maxListeners?: number;
}

const eventCenter: EventCenter = new EventEmitter();

if (eventCenter.setMaxListeners) {
  eventCenter.setMaxListeners(10);
}

export { eventCenter };
export const SYNC_EVENT = 'recharts.syncMouseEvents';
export const WHEEL_EVENT = 'wheel';

interface EventTypes {
  [SYNC_EVENT](syncId: number | string, uniqueChartId: string, data: CategoricalChartState): void;

  [WHEEL_EVENT](e: WheelEvent<HTMLDivElement>): void;
}
