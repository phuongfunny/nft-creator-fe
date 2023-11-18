import * as React from "react";
import styled from "styled-components";

export interface ISelectProps {
  options: { value: string; label: string }[];
  value: string | number;
  name: string;
  defaultValue?: string;
  onChange: (e: any) => void;
}

export default function Select({
  value,
  onChange,
  options,
  name,
  defaultValue,
}: Readonly<ISelectProps>) {
  return (
    <SelectCustom
      value={value}
      name={name}
      onChange={onChange}
      defaultValue={defaultValue}
    >
      {options?.map((item) => (
        <OptionItem value={item.value} key={item.value}>
          {item.label}
        </OptionItem>
      ))}
    </SelectCustom>
  );
}
const SelectCustom = styled.select`
  border-radius: 4px;
  border: 0.5px solid #3e6fff;
  background: #00062b;
  min-width: 186px;
  height: 56px;
  padding: 16px 12px;
  color: var(--white-100, #fff);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 100% */
  letter-spacing: 0.8px;
  appearance: none;
  background-image: url("/dropdown.svg"); /* Replace with your icon path */
  background-repeat: no-repeat;
  background-position: calc(100% - 12px) center;
`;

const OptionItem = styled.option``;
