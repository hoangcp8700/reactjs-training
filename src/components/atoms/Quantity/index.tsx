import styled from "@emotion/styled";
import clsx from "clsx";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import STYLES from "styles";

import Button from "../Button";
import Text from "../Text";

interface QuantityProps {
  size?: number | undefined;
  isVertical?: boolean;
  disabled?: {
    increase?: boolean;
    decrease?: boolean;
  };
  id?: string;
  value?: number;
  className?: string;
  onChange?: (quantity: number, id?: string) => void;
}

const ButtonControl = styled(Button)(() => ({
  width: 36,
  padding: 0,
}));

const Quantity: React.FC<QuantityProps> = ({
  isVertical,
  disabled,
  id,
  value,
  className,
  onChange,
}) => {
  const [quantityValue, setQuantityValue] = useState<number>(-1);
  const [currentTimeoutId, setCurrentTimeoutId] = useState<NodeJS.Timeout | undefined>();

  useEffect(() => {
    if (value && value > 0) {
      setQuantityValue(value);
    }
  }, [value]);

  const renderQuantity = useMemo(() => {
    if (quantityValue <= 0) {
      return 0;
    }

    if (quantityValue < 10) {
      return `0${quantityValue}`;
    }
    return quantityValue;
  }, [quantityValue]);

  const handleQuantity = useCallback(
    (isIncrease?: boolean) => {
      if (onChange) {
        clearTimeout(currentTimeoutId);
      }

      let newValue = quantityValue;
      if (isIncrease) {
        newValue += 1;
      } else {
        newValue = quantityValue <= 0 ? 0 : quantityValue - 1;
      }
      if (onChange) {
        const idTimeout: NodeJS.Timeout = setTimeout(() => onChange(newValue, id), 200);
        setCurrentTimeoutId(idTimeout);
      }

      setQuantityValue(newValue);
    },
    [currentTimeoutId, onChange, quantityValue, id],
  );

  return (
    <div className='a-quantity'>
      <div className={clsx("adjust-flex-center rounded-md w-fit", isVertical && "flex-col")}>
        <ButtonControl
          onClick={() => handleQuantity()}
          disabled={quantityValue === 0 || disabled?.decrease}
        >
          <Text className='text-sm'>-</Text>
        </ButtonControl>
        <div className='a-quantity_content'>
          <input
            value={renderQuantity}
            id={id}
            className={clsx(
              STYLES.MIXINS.resetInput,
              "m-0 block text-base font-normal text-gray-600 bg-white bg-clip-border max-w-[50px]",
              isVertical && "max-w-9",
              className,
            )}
            type='number'
            onChange={(e) => {
              setQuantityValue(Number(e.target.value));
            }}
          />
        </div>
        <ButtonControl onClick={() => handleQuantity(true)} disabled={disabled?.increase}>
          <Text className='text-sm'>+</Text>
        </ButtonControl>
      </div>
    </div>
  );
};
export default Quantity;
