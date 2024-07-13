import React from "react";

interface CustomDateTimePickerProps {
  value: string; // Using string to handle the date-time format
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

const CustomDateTimePicker: React.FC<CustomDateTimePickerProps> = ({
  value,
  onChange,
  inputProps,
}) => {
  return (
    <div>
      <input
        type="datetime-local"
        className="bg-white px-3 py-2 w-full text-black"
        value={value}
        onChange={onChange}
        {...inputProps}
      />
    </div>
  );
};

export default CustomDateTimePicker;
