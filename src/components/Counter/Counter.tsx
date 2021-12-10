import { useEffect, useState } from "react";
import { CounterDate, countTheDifference } from "../../common/counter";
import "./Counter.scss";

interface CounterProps {
  deadline: string;
}

const Counter: React.FC<CounterProps> = ({ deadline }) => {
  const [dateToDisplay, setDateToDisplay] = useState<CounterDate>({
    days: 0,
    hours: 0,
    min: 0,
    sec: 1,
  });
  const [outdatedProject, setOutdatedProject] = useState<boolean>(false);

  useEffect(() => {
    setDateToDisplay(countTheDifference(deadline));
    let interval = setInterval(function () {
      setDateToDisplay(countTheDifference(deadline));
    }, 1000);
    if (
      dateToDisplay.sec === 0 &&
      dateToDisplay.min === 0 &&
      dateToDisplay.hours === 0 &&
      dateToDisplay.days === 0
    ) {
      clearInterval(interval);
      setOutdatedProject(true);
    }
  }, [dateToDisplay.sec, dateToDisplay.min, dateToDisplay.hours, dateToDisplay.days, deadline]);

  return (
    <div className="counter">
      {outdatedProject ? (
        <div className="counter__outdated"></div>
      ) : (
        <div className="counter__wrapper">
          <p className="counter__detail">days: {dateToDisplay.days}</p>
          <p className="counter__detail">hours: {dateToDisplay.hours}</p>
          <p className="counter__detail">minutes: {dateToDisplay.min}</p>
          <p className="counter__detail">seconds: {dateToDisplay.sec}</p>
        </div>
      )}
    </div>
  );
};

export default Counter;
