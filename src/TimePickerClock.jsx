// src/TimePickerClock.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";

const TimePickerClock = ({ initialTime, onTimeChange, onClose }) => {
  const [selectedTime, setSelectedTime] = useState(
    initialTime ? dayjs(initialTime) : dayjs()
  );
  const [clockMode, setClockMode] = useState("hour"); // "hour" or "minute"
  const [selectedAMPM, setSelectedAMPM] = useState(selectedTime.format("A"));

  // Convert angle to x, y coordinates for clock numbers
  const getCoordinates = (number, total, radius) => {
    const angle = number * (360 / total) - 90; // -90 to start at top
    const radians = (angle * Math.PI) / 180;
    return {
      x: Math.cos(radians) * radius,
      y: Math.sin(radians) * radius,
    };
  };

  // Handle hour selection
  const handleHourSelect = (hour) => {
    const adjustedHour =
      selectedAMPM === "PM" && hour < 12
        ? hour + 12
        : selectedAMPM === "AM" && hour === 12
        ? 0
        : hour;
    setSelectedTime(selectedTime.hour(adjustedHour));
    setClockMode("minute");
    onTimeChange(selectedTime.hour(adjustedHour));
  };

  // Handle minute selection
  const handleMinuteSelect = (minute) => {
    setSelectedTime(selectedTime.minute(minute));
    onTimeChange(selectedTime.minute(minute));
  };

  // Toggle AM/PM
  const handleAMPMToggle = (value) => {
    setSelectedAMPM(value);
    const currentHour = selectedTime.hour();
    let newHour;
    if (value === "AM" && currentHour >= 12) {
      newHour = currentHour - 12;
    } else if (value === "PM" && currentHour < 12) {
      newHour = currentHour + 12;
    } else {
      newHour = currentHour;
    }
    setSelectedTime(selectedTime.hour(newHour));
    onTimeChange(selectedTime.hour(newHour));
  };

  // Handle time section click (hour or minute)
  const handleTimeClick = (section) => {
    setClockMode(section);
  };

  return (
    <div className="time-picker-container">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-80">
        {/* Orange header with time display */}
        <div className="time-picker-header">
          <div className="time-display">
            <span
              className={`cursor-pointer ${
                clockMode === "hour" ? "opacity-100" : "opacity-70"
              }`}
              onClick={() => handleTimeClick("hour")}
            >
              {selectedTime.format("h")}
            </span>
            <span>:</span>
            <span
              className={`cursor-pointer ${
                clockMode === "minute" ? "opacity-100" : "opacity-70"
              }`}
              onClick={() => handleTimeClick("minute")}
            >
              {selectedTime.format("mm")}
            </span>
          </div>
          <div className="ampm-buttons">
            {["AM", "PM"].map((value) => (
              <button
                key={value}
                onClick={() => handleAMPMToggle(value)}
                className={`ampm-button ${
                  selectedAMPM === value ? "ampm-button-active" : ""
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>

        {/* Clock face */}
        <div className="p-4">
          <div className="clock-face">
            {/* Clock face background */}
            <div className="clock-background"></div>

            {/* Hour hand */}
            <div
              className={`absolute top-1/2 left-1/2 h-1 w-20 bg-orange-500 rounded-full origin-left z-10 transition-transform ${
                clockMode !== "hour" ? "opacity-40" : ""
              }`}
              style={{
                transform: `rotate(${(selectedTime.hour() % 12) * 30 - 90}deg)`,
              }}
            >
              <div className="absolute right-0 -top-1.5 w-4 h-4 rounded-full bg-orange-500"></div>
            </div>

            {/* Minute hand */}
            <div
              className={`absolute top-1/2 left-1/2 h-0.5 w-24 bg-orange-500 rounded-full origin-left z-10 transition-transform ${
                clockMode !== "minute" ? "opacity-40" : ""
              }`}
              style={{
                transform: `rotate(${selectedTime.minute() * 6 - 90}deg)`,
              }}
            >
              <div className="absolute right-0 -top-1 w-3 h-3 rounded-full bg-orange-500"></div>
            </div>

            {/* Center dot */}
            <div className="absolute top-1/2 left-1/2 w-2 h-2 -ml-1 -mt-1 rounded-full bg-orange-500 z-20"></div>

            {clockMode === "hour"
              ? /* Hour numbers */
                [...Array(12)].map((_, index) => {
                  const hour = index === 0 ? 12 : index;
                  const { x, y } = getCoordinates(hour, 12, 110);
                  const isSelected =
                    selectedTime.hour() % 12 === hour % 12 ||
                    (hour === 12 && selectedTime.hour() % 12 === 0);

                  return (
                    <div
                      key={hour}
                      className={`absolute w-8 h-8 flex items-center justify-center text-lg font-medium cursor-pointer
                                ${
                                  isSelected
                                    ? "text-white bg-orange-500 rounded-full"
                                    : "hover:text-orange-500"
                                }`}
                      style={{
                        left: `calc(50% + ${x}px - 16px)`,
                        top: `calc(50% + ${y}px - 16px)`,
                      }}
                      onClick={() => handleHourSelect(hour === 12 ? 0 : hour)}
                    >
                      {hour}
                    </div>
                  );
                })
              : /* Minute numbers (show 5-minute intervals) */
                [...Array(12)].map((_, index) => {
                  const minute = index * 5;
                  const { x, y } = getCoordinates(index, 12, 110);
                  const isSelected =
                    Math.abs(selectedTime.minute() - minute) < 2.5 ||
                    (minute === 0 && selectedTime.minute() > 57.5);

                  return (
                    <div
                      key={minute}
                      className={`absolute w-8 h-8 flex items-center justify-center text-lg font-medium cursor-pointer
                                ${
                                  isSelected
                                    ? "text-white bg-orange-500 rounded-full"
                                    : "hover:text-orange-500"
                                }`}
                      style={{
                        left: `calc(50% + ${x}px - 16px)`,
                        top: `calc(50% + ${y}px - 16px)`,
                      }}
                      onClick={() => handleMinuteSelect(minute)}
                    >
                      {minute === 0 ? "00" : minute}
                    </div>
                  );
                })}
          </div>
        </div>

        {/* Bottom buttons */}
        <div className="px-4 py-3 border-t flex justify-between items-center">
          <button
            className="uppercase text-gray-700 font-medium"
            onClick={onClose}
          >
            CANCEL
          </button>
          <button
            className="uppercase text-orange-500 font-medium"
            onClick={() => {
              onTimeChange(selectedTime.toDate());
              onClose();
            }}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

TimePickerClock.propTypes = {
  initialTime: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date),
  ]),
  onTimeChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

TimePickerClock.defaultProps = {
  initialTime: null,
};

export default TimePickerClock;