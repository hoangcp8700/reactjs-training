import Button from "components/atoms/Button";
import Loading from "components/atoms/Loading";
import React from "react";

interface TestSagaProps {
  loading?: boolean;
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onIncrementAsync: () => void;
}

const TestSaga: React.FC<TestSagaProps> = ({
  count,
  loading,
  onIncrement,
  onDecrement,
  onIncrementAsync,
}) => (
  <div>
    <div>
      <Button onClick={onIncrementAsync}>Increment after 1 second</Button>{" "}
      <Button onClick={onIncrement}>Increment</Button>{" "}
      <Button onClick={onDecrement}>Decrement</Button>
      <hr />
      <div>Clicked: {count} times</div>
      {loading && <Loading />}
    </div>
  </div>
);

export default TestSaga;
