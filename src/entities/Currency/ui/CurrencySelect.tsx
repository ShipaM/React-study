import React, { memo, useCallback } from "react";
import { Select } from "shared/ui/Select/Select";
import { Currency } from "../model/types/currency";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";

interface ICurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readOnly?: boolean;
}

const options = [
  { value: Currency.UAH, content: Currency.UAH },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect: React.FC<ICurrencySelectProps> = memo(
  ({ className, value, onChange, readOnly }) => {
    const { t } = useTranslation("profile");

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Currency);
      },
      [onChange]
    );

    return (
      <Select
        label={t("CURRENCY")}
        className={classNames("currency-select", {}, [className])}
        options={options}
        value={value}
        onChange={onChangeHandler}
        readOnly={readOnly}
      />
    );
  }
);

CurrencySelect.displayName = "CurrencySelect";
