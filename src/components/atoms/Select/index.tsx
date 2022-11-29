import clsx from "clsx";
import React, { useCallback, useMemo, useRef, useState } from "react";
import useClickOutside from "hooks/useClickOutside";
import useScrollInfinite from "hooks/useScrollInfinite";
import { removeAccents } from "utils/functions";
import STYLES from "styles";
import useDebounce from "hooks/useDebounce";

import Icon from "../Icon";

interface SelectProps {
  id?: string;
  error?: string;
  label?: string;
  name?: string;
  optionData: OptionType[];
  option?: OptionType;
  placeholder: string;
  disabled?: boolean;
  isSearch?: boolean;
  isLoading?: boolean;
  required?: boolean;
  noOptionMessage?: string;
  handleLoadMore?: () => void;
  handleSelect?: (option: OptionType) => void;
}

const Select: React.FC<SelectProps> = ({
  id,
  error,
  label,
  name,
  optionData = [],
  isSearch,
  isLoading,
  required,
  placeholder,
  option,
  disabled,
  noOptionMessage = "No option",
  handleLoadMore,
  handleSelect,
}) => {
  const pulldownRef = useRef<HTMLDivElement>(null);
  const [txtSearch, setTxtSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isDebounceSearch, setIsDebounceSearch] = useState(false);
  const { setNode } = useScrollInfinite(handleLoadMore);

  useClickOutside(pulldownRef, () => {
    if (isOpen) setIsOpen(false);
  });

  const handleToggling = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  const handleChangeTxt = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setTxtSearch(e.currentTarget.value);
      // debounce search when onChange
      if (isSearch && !isDebounceSearch) {
        setIsDebounceSearch(true);
      }
    },
    [isSearch, isDebounceSearch],
  );

  const handleClickOption = useCallback(
    (value: OptionType) => {
      if (handleSelect) {
        if (isSearch) {
          setTxtSearch(value.label);
        }
        handleSelect(value);
        setIsOpen(false);
      }
    },
    [handleSelect, isSearch],
  );

  const mappingFunc = useCallback(
    (data: OptionType[]) => {
      if (isSearch && !isDebounceSearch) {
        return data.filter(
          (item) =>
            removeAccents(item.label)
              .toLocaleLowerCase()
              .search(removeAccents(txtSearch).toLocaleLowerCase()) !== -1,
        );
      }
      return data;
    },
    [isDebounceSearch, txtSearch, isSearch],
  );

  // debounce search list
  useDebounce(() => setIsDebounceSearch(false), 300, [txtSearch]);

  const styles = useMemo(
    () => ({
      li: "relative cursor-pointer py-2 px-4 before:content-[''] before:absolute before:right-0 before:top-0 before:h-full before:w-0 before:bg-black-100 before:transition-all before:duration-300 hover:before:left-0 hover:before:w-full",
    }),
    [],
  );
  return (
    <div className='relative' ref={pulldownRef}>
      {label && (
        <div className='text-base text-white mb-2'>
          <label htmlFor={id}>{label}</label>
          {required && <span className='ml-1 text-red-500 font-medium'>*</span>}
        </div>
      )}
      <div
        aria-hidden
        className={clsx(
          "m-0 relative py-2 px-3 border rounded-lg border-gray-300 transition-all focus:bg-white focus:border-blue-600",
          error && "border border-red-500 text-red-500",
          disabled && "pointer-events-none cursor-not-allowed bg-gray-100 opacity-50",
          isOpen ? "bg-gray-100 rounded-t-md" : "shadow-md rounded-md",
        )}
        onClick={!disabled ? handleToggling : () => undefined}
      >
        {!isSearch ? (
          <div className={clsx("flex items-center justify-between text-inherit")}>
            <span className={clsx(!option && "text-gray-500", error && "text-red-500")}>
              {option?.label || placeholder}
            </span>
            <span className={clsx(!isOpen ? "rotate-180" : "rotate-0", " transition-transform")}>
              <Icon iconName='arrowUp' size={16} className={error && "fill-red-500"} />
            </span>
          </div>
        ) : (
          <input
            name={name}
            className={clsx(
              STYLES.MIXINS.resetInput,
              "bg-transparent w-full text-base font-normal placeholder:text-gray-400",
            )}
            value={txtSearch}
            onKeyDown={(e) => e.code === "Enter" && handleToggling()}
            onChange={handleChangeTxt}
            disabled={disabled}
            placeholder={placeholder}
          />
        )}
      </div>
      <div
        className={clsx(
          "absolute w-full z-3 rounded-b-md overflow-hidden transition-all",
          isOpen && !disabled ? "max-h-96 opacity-100 visible" : "max-h-0 opacity-100 invisible",
        )}
      >
        <ul className='bg-white shadow-primary overflow-y-auto max-h-72'>
          {optionData?.length ? (
            mappingFunc(optionData).map((ele, index) => (
              <li
                key={`${ele?.id}-${index.toString()}`}
                className={clsx(styles.li, ele?.value === option?.value && "bg-black-100")}
                onClick={() => handleClickOption(ele)}
                aria-hidden
              >
                {ele.label}
              </li>
            ))
          ) : (
            <li className={styles.li}>{noOptionMessage}</li>
          )}
          {handleLoadMore && (
            <li className='flex justify-center py-1.5' ref={(suggest) => setNode(suggest)}>
              {isLoading && <Icon iconName='loading' size={40} />}
            </li>
          )}
        </ul>
      </div>
      {error && (
        <div className='mt-1 ml-2'>
          <span className='text-sm text-red-500'>{error}</span>
        </div>
      )}
    </div>
  );
};

export default Select;

// Storybook
// Default.args = {
//   placeholder: "Chọn địa điểm",
//   name: "place",
//   noOptionMessage: "Khong co du lieu",
//   optionData: new Array(10).fill(true).map((_, idx) => ({
//     id: (idx + 1).toString(),
//     value: (idx + 11).toString(),
//     label: `value ${idx + 11} ${Math.floor(Math.random() * 1000)}`,
//   })),
// option : {
//   id: '123',
//   value: 'demo',
//   label: 'demo'
// }
//   isLoading: true,
//    handleSelect: (value) => console.log('select is:' value)
// };
