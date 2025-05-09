import React, { ChangeEvent, useMemo } from "react";
import "./Select.css";
import { classNames, Mods } from "shared/lib/classNames/classNames";

export interface ISelectOption<T extends string> {
  value: T;
  content: string;
}

interface ISelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: ISelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readOnly?: boolean;
  "data-testid"?: string;
}

export const Select = <T extends string>({
  className,
  label,
  options,
  value,
  readOnly,
  onChange,
  "data-testid": testId,
}: ISelectProps<T>) => {
  const mods: Mods = {};

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
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
};
