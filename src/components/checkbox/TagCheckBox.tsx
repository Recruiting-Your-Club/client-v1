import React, { ChangeEvent, useState, useEffect } from "react";

interface TagProps {
  title: string;
  major: string[];
  onChange: (selected: string[]) => void;  
}

const TagCheckBox: React.FC<TagProps> = ({ title, major, onChange }) => {
  const [majorCheckedList, setMajorCheckedList] = useState<string[]>([]);

  const handleCheckedMajor = (value: string, isChecked: boolean) => {
    if (isChecked) {
      setMajorCheckedList((prev) => [...prev, value]);
    } else {
      setMajorCheckedList((prev) => prev.filter((item) => item !== value));
    }
  };

  const handleOnChangeCheckMajor = (e: ChangeEvent<HTMLInputElement>, value: string) => {
    handleCheckedMajor(value, e.target.checked);
  };
 
  useEffect(() => {
    onChange(majorCheckedList);
  }, [majorCheckedList, onChange]);

  return (
    <div className="bg-white p-4 border rounded-lg flex flex-col h-full">
      <div className="flex-1 flex flex-col justify-start">
        <div className="text-md mb-4">{title}</div>
        <div className="flex flex-col space-y-4">
          {major.map((item) => (
            <label key={item} htmlFor={item} className="flex items-center space-x-2">
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
      </div>
    </div>
  );
};

export default TagCheckBox;
