import * as React from "react";
import { cn } from "./utils";

export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  defaultValue?: number[];
  value?: number[];
  onValueChange?: (value: number[]) => void;
  min?: number;
  max?: number;
  step?: number;
}

function Slider({
  className,
  defaultValue = [0],
  value,
  onValueChange,
  min = 0,
  max = 100,
  step = 1,
  ...props
}: SliderProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue[0] || 0);
  const currentValue = value ? value[0] : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setInternalValue(newValue);
    if (onValueChange) {
      onValueChange([newValue]);
    }
  };

  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={currentValue}
      onChange={handleChange}
      className={cn(
        "w-full h-4 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-500",
        className,
      )}
      {...props}
    />
  );
}

export { Slider };
