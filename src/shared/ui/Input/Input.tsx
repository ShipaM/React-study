/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { classNames } from "shared/lib/classNames/classNames";
import React, {
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";
import "./Input.css";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input: React.FC<InputProps> = memo(
  ({
    className,
    value,
    onChange,
    type = "text",
    placeholder,
    autofocus,
    ...otherProps
  }) => {
    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    useEffect(() => {
      if (autofocus) {
        setIsFocused(true);
        ref.current?.focus();
      }
    }, [autofocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
      setCaretPosition(e.target.value.length);
    };

    const onBlur = () => {
      setIsFocused(false);
    };

    const onFocus = () => {
      setIsFocused(true);
    };

    const onSelect = (e: React.SyntheticEvent<HTMLInputElement>) => {
      const input = e.target as HTMLInputElement; // Assert the target is an HTMLInputElement
      setCaretPosition(input.selectionStart || 0); // Use selectionStart to get the caret position
    };

    return (
      <div className={classNames("input-wrapper", {}, [className])}>
        {placeholder && (
          <div className={"placeholder"}>{`${placeholder} >`}</div>
        )}
        <div className={"caret-wrapper"}>
          <input
            ref={ref}
            type={type}
            value={value}
            onChange={onChangeHandler}
            className={"input"}
            onFocus={onFocus}
            onBlur={onBlur}
            onSelect={onSelect}
            data-testid="input"
            {...otherProps}
          />
          {isFocused && (
            <span
              className={"caret"}
              style={{ left: `${caretPosition * 9}px` }}
            />
          )}
        </div>
      </div>
    );
  }
);
