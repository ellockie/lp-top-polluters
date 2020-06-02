import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { pollutantSelected, selectPollutant } from "../counter/counterSlice";

import { ReactComponent as Polluter00 } from "../../svg/pollutersList/polluter00.svg";
import { ReactComponent as Polluter01 } from "../../svg/pollutersList/polluter01.svg";
import { ReactComponent as Polluter02 } from "../../svg/pollutersList/polluter02.svg";
import { ReactComponent as Polluter03 } from "../../svg/pollutersList/polluter03.svg";
import { ReactComponent as Polluter04 } from "../../svg/pollutersList/polluter04.svg";
import { ReactComponent as Polluter05 } from "../../svg/pollutersList/polluter05.svg";
import { ReactComponent as Polluter06 } from "../../svg/pollutersList/polluter06.svg";
import { ReactComponent as Polluter07 } from "../../svg/pollutersList/polluter07.svg";
import { ReactComponent as Polluter08 } from "../../svg/pollutersList/polluter08.svg";
import { ReactComponent as Polluter09 } from "../../svg/pollutersList/polluter09.svg";
import { ReactComponent as Polluter10 } from "../../svg/pollutersList/polluter10.svg";
import { ReactComponent as Polluter11 } from "../../svg/pollutersList/polluter11.svg";
import { ReactComponent as Polluter12 } from "../../svg/pollutersList/polluter12.svg";
import { ReactComponent as Polluter13 } from "../../svg/pollutersList/polluter13.svg";
import { ReactComponent as Polluter14 } from "../../svg/pollutersList/polluter14.svg";
import { ReactComponent as Polluter15 } from "../../svg/pollutersList/polluter15.svg";
import { ReactComponent as Polluter16 } from "../../svg/pollutersList/polluter16.svg";
import { ReactComponent as Polluter17 } from "../../svg/pollutersList/polluter17.svg";
import { ReactComponent as Polluter18 } from "../../svg/pollutersList/polluter18.svg";
import { ReactComponent as Polluter19 } from "../../svg/pollutersList/polluter19.svg";

import styles from "./polluters.module.css";

/*
 *  Vectorised polluter names
 */
export const Polluters = () => {
  const dispatch = useDispatch();
  const selectedPollutant = useSelector(selectPollutant);

  const polluterNames: [
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
    number,
    number,
  ][] = [
    [Polluter00, 20.7, 118.6],
    [Polluter01, 19.98, 132.6],
    [Polluter02, 19.98, 147.3],
    [Polluter03, 19.98, 161.7],
    [Polluter04, 19.98, 176.09],
    [Polluter05, 247.6, 118.5],
    [Polluter06, 247.6, 132.9],
    [Polluter07, 247.6, 147.3],
    [Polluter08, 247.6, 161.7],
    [Polluter09, 247.6, 176.09],
    [Polluter10, 503.6, 118.5],
    [Polluter11, 503.6, 132.9],
    [Polluter12, 503.6, 147.3],
    [Polluter13, 503.6, 161.7],
    [Polluter14, 503.6, 176.09],
    [Polluter15, 803.3, 118.5],
    [Polluter16, 803.3, 132.9],
    [Polluter17, 803.3, 147.3],
    [Polluter18, 803.3, 161.7],
    [Polluter19, 803.3, 176.09],
  ];

  const onMouseAction = (index: number) => {
    dispatch(pollutantSelected(index));
  };

  return (
    <>
      {polluterNames.map((position, index) =>
        React.createElement(position[0], {
          key: index,
          style: { left: position[1], top: position[2] },
          onMouseEnter: () => onMouseAction(index),
          onMouseLeave: () => onMouseAction(-1),
          className: `${styles["list-item"]} ${
            selectedPollutant === index ? styles.highlighted : ""
          }`,
        })
      )}
    </>
  );
};
