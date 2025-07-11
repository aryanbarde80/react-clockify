import React, { useState } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";

const ReactClockify = ({ initialTime, onTimeChange, onClose }) => {
  const [selectedTime, setSelectedTime] = useState(
    initialTime ? dayjs(initialTime) : dayjs()
  );
  const [clockMode, setClockMode] = useState("hour");
  const [selectedAMPM, setSelectedAMPM] = useState(selectedTime.format("A"));

  const getCoordinates = (number, total, radius) => {
    const angle = number * (360 / total) - 90;
    const radians = (angle * Math.PI) / 180;
    return {
      x: Math.cos(radians) * radius,
      y: Math.sin(radians) * radius,
    };
  };

  const handleHourSelect = (hour) => {
    const adjustedHour =
      selectedAMPM === "PM" && hour < 12
        ? hour + 12
        : selectedAMPM === "AM" && hour === 12
        ? 0
        : hour;
    const newTime = selectedTime.hour(adjustedHour);
    setSelectedTime(newTime);
    setClockMode("minute");
    onTimeChange(newTime.toDate());
  };

  const handleMinuteSelect = (minute) => {
    const newTime = selectedTime.minute(minute);
    setSelectedTime(newTime);
    onTimeChange(newTime.toDate());
  };

  const handleAMPMToggle = (value) => {
    setSelectedAMPM(value);
    const currentHour = selectedTime.hour();
    const newHour =
      value === "AM" && currentHour >= 12
        ? currentHour - 12
        : value === "PM" && currentHour < 12
        ? currentHour + 12
        : currentHour;
    const newTime = selectedTime.hour(newHour);
    setSelectedTime(newTime);
    onTimeChange(newTime.toDate());
  };

  const handleTimeClick = (section) => {
    setClockMode(section);
  };

  return (
    <div className="time-picker-container flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl w-80 relative">
        {/* Header */}
        <div className="bg-orange-500 text-white px-4 py-3 flex justify-between items-center rounded-t-2xl">
          <div className="text-3xl font-mono">
            <span
              className={`cursor-pointer ${
                clockMode === "hour" ? "opacity-100" : "opacity-60"
              }`}
              onClick={() => handleTimeClick("hour")}
            >
              {selectedTime.format("h")}
            </span>
            :
            <span
              className={`cursor-pointer ${
                clockMode === "minute" ? "opacity-100" : "opacity-60"
              }`}
              onClick={() => handleTimeClick("minute")}
            >
              {selectedTime.format("mm")}
            </span>
          </div>
          <div className="flex gap-1">
            {["AM", "PM"].map((val) => (
              <button
                key={val}
                className={`text-sm px-2 py-1 rounded ${
                  selectedAMPM === val
                    ? "bg-white text-orange-500 font-semibold"
                    : "text-white border border-white"
                }`}
                onClick={() => handleAMPMToggle(val)}
              >
                {val}
              </button>
            ))}
          </div>
        </div>

        {/* Clock face */}
        <div className="relative h-72">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[220px] h-[220px]">
              {/* Clock center */}
              <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-orange-500 rounded-full -translate-x-1/2 -translate-y-1/2 z-20" />

              {/* Clock hand */}
              {["hour", "minute"].map((mode) => {
                const isHour = mode === "hour";
                const angle = isHour
                  ? (selectedTime.hour() % 12) * 30
                  : selectedTime.minute() * 6;

                return (
                  <div
                    key={mode}
                    className={`absolute top-1/2 left-1/2 bg-orange-500 rounded-full origin-left z-10 transition-transform ${
                      isHour
                        ? "w-20 h-1.5"
                        : "w-24 h-1"
                    } ${clockMode !== mode ? "opacity-40" : ""}`}
                    style={{
                      transform: `rotate(${angle - 90}deg)`,
                    }}
                  >
                    <div className="absolute right-0 -top-1.5 w-3 h-3 rounded-full bg-orange-500"></div>
                  </div>
                );
              })}

              {/* Numbers */}
              {(clockMode === "hour"
                ? [...Array(12)].map((_, i) => i + 1)
                : [...Array(12)].map((_, i) => i * 5)
              ).map((value, i) => {
                const { x, y } = getCoordinates(i + 1, 12, 100);
                const isSelected =
                  clockMode === "hour"
                    ? selectedTime.hour() % 12 === (value % 12)
                    : Math.abs(selectedTime.minute() - value) < 3;

                return (
                  <div
                    key={value}
                    onClick={() =>
                      clockMode === "hour"
                        ? handleHourSelect(value)
                        : handleMinuteSelect(value)
                    }
                    className={`absolute w-8 h-8 text-center leading-8 text-sm rounded-full cursor-pointer transition
                      ${
                        isSelected
                          ? "bg-orange-500 text-white"
                          : "hover:text-orange-500"
                      }`}
                    style={{
                      top: `calc(50% + ${y}px - 16px)`,
                      left: `calc(50% + ${x}px - 16px)`,
                    }}
                  >
                    {clockMode === "minute" && value === 0 ? "00" : value}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between px-4 py-3 border-t">
          <button
            onClick={onClose}
            className="uppercase text-gray-500 hover:text-gray-800"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onTimeChange(selectedTime.toDate());
              onClose();
            }}
            className="uppercase text-orange-500 font-medium"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

ReactClockify.propTypes = {
  initialTime: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date),
  ]),
  onTimeChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

ReactClockify.defaultProps = {
  initialTime: null,
};

export default ReactClockify;
