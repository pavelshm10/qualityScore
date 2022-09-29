import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Pet } from "../../types/pet";
import "./Filters.scss";
import Select, { SingleValue, ActionMeta } from "react-select";

export interface Option {
  value: string;
  label: string;
}

export const Filters: React.FC = () => {
  const handleAgeSelect = (
    value: SingleValue<Option>,
    actionMeta: ActionMeta<Option>
  ) => {};
  const handleTypeSelect = (
    value: SingleValue<Option>,
    actionMeta: ActionMeta<Option>
  ) => {};
  const correctOptions = (options: any[]) => {
    return options.map((option) => {
      return { value: option.toString(), label: option.toString() };
    });
  };
  return (
    <>
      <Select
        // styles={customStyle}
        className="select-input margin-right-30"
        placeholder="Age"
        onChange={handleAgeSelect}
        options={correctOptions(Array.from(Array(31).keys()))}
      />
      <Select
        // styles={customStyle}
        className="select-input"
        placeholder="Type"
        onChange={handleAgeSelect}
        options={correctOptions([
          "breed1",
          "breed2",
          "breed3",
          "breed4",
          "breed5",
        ])}
      />
    </>
  );
};
