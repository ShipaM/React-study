import { classNames, Mods } from "shared/lib/classNames/classNames";
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
  "value" | "onChange" | "readOnly" | "data-testId"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readOnly?: boolean;
  "data-tesId"?: string;
}

export const Input: React.FC<InputProps> = memo(
  ({
    className,
    value,
    onChange,
    type = "text",
    placeholder,
    autofocus,
    readOnly,
    "data-tesId": testId,
    ...otherProps
  }) => {
    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    const isCarretVisible = isFocused && !readOnly;

    const mods: Mods = { ["readonly"]: readOnly };

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
            className={classNames("input", mods, [className])}
            onFocus={onFocus}
            onBlur={onBlur}
            onSelect={onSelect}
            data-testid={testId}
            readOnly={readOnly}
            {...otherProps}
          />
          {isCarretVisible && (
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

Input.displayName = "Input";
