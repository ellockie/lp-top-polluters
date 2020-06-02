import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { pollutantSelected, selectPollutant } from "../counter/counterSlice";

import { ReactComponent as HQsStatic } from "../../svg/hqs/hqs.svg";
import { ReactComponent as HQ } from "../../svg/hqs/hq.svg";

import styles from "./headQuarters.module.css";

export const HeadQuarters = () => {
  const dispatch = useDispatch();
  const selectedPollutant = useSelector(selectPollutant);

  const hQCoordinates: [number, number][] = [
    [617.65, 463.56],
    [78.65, 419.56],
    [563.15, 354.06],
    [154.15, 439.06],
    [617.15, 428.06],
    [460.15, 368.06],
    [472.15, 367.06],
    [744.15, 477.06],
    [130.15, 488.06],
    [234.15, 523.06],
    [818.15, 412.06],
    [178.15, 413.06],
    [152.15, 450.06],
    [631.15, 471.06],
    [610.15, 452.06],
    [596.15, 435.06],
    [465.15, 379.06],
    [468.15, 424.06],
    [907.15, 705.06],
    [315.15, 649.06],
  ];

  const selectItem = (index: number) => {
    dispatch(pollutantSelected(index));
  };

  return (
    <>
      <HQsStatic />
      {hQCoordinates.map((hq, index) => (
        <HQ
          key={index}
          className={`${styles["hq-disc-dynamic"]} ${
            selectedPollutant === index ? styles.highlighted : ""
          }`}
          style={{ left: hq[0], top: hq[1] }}
          onMouseEnter={() => selectItem(index)}
          onMouseLeave={() => selectItem(-1)}
          title={`Head Quarter ${index}`}
        />
      ))}
    </>
  );
};
