"use client";

import React, { ChangeEvent, useState, FormEvent, useCallback } from "react";

interface TagProps {
  title: string;
}
const major = ["프로그래밍", "탁구", "축구", "피구", "발야구"];

const TagCheckBox: React.FC<TagProps> = ({ title }) => {
  const [majorCheckedList, setMajorCheckedList] = useState<string[]>([]);

  const handleCheckedMajor = (value: string, isChecked: boolean) => {
    if (isChecked) {
      setMajorCheckedList((prev) => [...prev, value]);
    } else {
      setMajorCheckedList(majorCheckedList.filter((item) => item !== value));
    }
  };

  const handleOnChangeCheckMajor = (
    e: ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    handleCheckedMajor(value, e.target.checked);
  };

  const handleOnSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    },
    [majorCheckedList]
  );

  return (
    <div className="bg-white p-4 border rounded-lg flex flex-col h-full">
      <div className="flex-1 flex flex-col justify-start">
        <div className="text-md   mb-4">{title}</div>
        <form onSubmit={handleOnSubmit}>
          <div className="flex flex-col space-y-4">
            {major.map((item) => (
              <label
                key={item}
                htmlFor={item}
                className="flex items-center space-x-2"
              >
                <input
                  type="checkbox"
                  id={item}
                  checked={majorCheckedList.includes(item)}
                  onChange={(e) => handleOnChangeCheckMajor(e, item)}
                  className="custom-checkbox"
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default TagCheckBox;
