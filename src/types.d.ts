import * as React from "react";

export interface ReactClockifyProps {
  /**
   * The initial time to show in the clock
   * Can be a Date object or ISO string
   */
  initialTime?: Date | string;

  /**
   * Called whenever time is selected/changed
   */
  onTimeChange: (time: Date) => void;

  /**
   * Called when user clicks "Cancel" or "OK"
   */
  onClose: () => void;
}

/**
 * ReactClockify: A beautiful, analog-style time picker for React
 */
declare const ReactClockify: React.FC<ReactClockifyProps>;

export default ReactClockify;
