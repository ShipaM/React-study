import React, { memo, useCallback } from "react";
import { Select } from "shared/ui/Select/Select";
import { Country } from "../model/types/country";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";

interface ICountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readOnly?: boolean;
}

const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect: React.FC<ICountrySelectProps> = memo(
  ({ className, value, onChange, readOnly }) => {
    const { t } = useTranslation("profile");

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Country);
      },
      [onChange]
    );

    return (
      <Select
        label={t("COUNTRY")}
        className={classNames("country-select", {}, [className])}
        options={options}
        value={value}
        onChange={onChangeHandler}
        readOnly={readOnly}
      />
    );
  }
);

CountrySelect.displayName = "CountrySelect";
