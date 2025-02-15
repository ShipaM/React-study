import React, { ChangeEvent, memo, useMemo } from "react";
import "./Select.css";
import { classNames, Mods } from "shared/lib/classNames/classNames";

interface ISelectOption {
  value: string;
  content: string;
}

interface ISelectProps {
  className?: string;
  label?: string;
  options?: ISelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
  "data-tesId"?: string;
}

export const Select: React.FC<ISelectProps> = memo(
  ({
    className,
    label,
    options,
    value,
    readOnly,
    onChange,
    "data-tesId": testId,
  }) => {
    const mods: Mods = {};

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value);
    };

    const optionsList = useMemo(
      () =>
        options?.map((opt) => (
          <option className="option" value={opt.value} key={opt.value}>
            {opt.content}
          </option>
        )),
      [options]
    );

    return (
      <div className={classNames("wrapper", mods, [className])}>
        {label && <span className="label">{label}</span>}
        <select
          data-testid={testId}
          disabled={readOnly}
          className="select"
          value={value}
          onChange={onChangeHandler}
        >
          {optionsList}
        </select>
      </div>
    );
  }
);

Select.displayName = "Select";
