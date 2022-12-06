import TestSaga from "components/templates/TestSaga";
import React from "react";
import { useAppDispatch, useAppSelector } from "store";
import { useCounterActionHook } from "store/counter";

const TestSagaPage: React.FC = () => {
  const { count, isLoading } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  const { INCREMENT, INCREMENT_ASYNC, DECREMENT } = useCounterActionHook();
  return (
    <div>
      <TestSaga
        loading={isLoading}
        count={count}
        onIncrement={() => {
          dispatch(INCREMENT(1));
        }}
        onDecrement={() => dispatch(DECREMENT(1))}
        onIncrementAsync={() => dispatch(INCREMENT_ASYNC())}
      />
      ,
    </div>
  );
};

export default TestSagaPage;
