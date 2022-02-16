import { useEffect, useRef } from "react";
import useStoreSelector from "./useStoreSelector";
import useStoreDispatch from "./useStoreDispatch";

const calculateElapsedTime = (startTime: number) => {
  let endTime = new Date().getTime();
  return endTime - startTime;
};

const useTimer = (delay: number | null): void => {
  const { setElapsedTime, resetGame, setIntervalId } = useStoreDispatch();

  const {
    stats: { reset },
  } = useStoreSelector();

  const intervalRef = useRef<number | null>(null);
  const setElapsedTimeRef = useRef(setElapsedTime);
  const resetGameRef = useRef(resetGame);
  const setIntervalIdRef = useRef(setIntervalId);

  useEffect(() => {
    setElapsedTimeRef.current = setElapsedTime;
    resetGameRef.current = resetGame;
  }, [setElapsedTime, resetGame]);

  useEffect(() => {
    resetGameRef.current();
    let startTime = new Date().getTime();
    if (typeof delay === "number") {
      intervalRef.current = window.setInterval(() => {
        setElapsedTimeRef.current(calculateElapsedTime(startTime));
      }, delay);
      setIntervalIdRef.current(intervalRef.current);
    }
    return () => window.clearInterval(intervalRef.current || 0);
  }, [delay, reset]);
};

export default useTimer;
