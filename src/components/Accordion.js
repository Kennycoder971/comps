import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
export default function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    setExpandedIndex((currenExpandedIndex) => {
      if (currenExpandedIndex === nextIndex) {
        return -1;
      }
      return nextIndex;
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <li key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </li>
    );
  });
  return <ul className="border-x border-t rounded">{renderedItems}</ul>;
}
