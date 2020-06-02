import React from "react";
import { useSelector } from "react-redux";

import { selectHighlightedPolluter } from "../../app/pollutersSlice";

import styles from "./hqConnectors.module.css";

export const HQConnectors = () => {

  const selectedPolluter = useSelector(selectHighlightedPolluter);

  const connectorLines = [
    "13.5 123.1 0.5 123.1 0.5 195.6 626.1 469.6",
    "13.5 138.1 0.5 138.1 0.5 195.6 87.1 425.6",
    "13.5 152.1 0.5 152.1 0.5 195.6 571.6 360.1",
    "13.5 166.1 0.5 166.1 0.5 195.6 162.6 445.1",
    "13.5 181.1 0.5 181.1 0.5 195.6 625.6 434.1",
    "240.5 123.1 227.5 123.1 227.5 195.6 468.6 374.1",
    "240.5 138.1 227.5 138.1 227.5 195.6 480.6 373.1",
    "240.5 152.1 227.5 152.1 227.5 195.6 752.6 483.1",
    "240.5 166.1 227.5 166.1 227.5 195.6 138.6 494.1",
    "240.5 181.1 227.5 181.1 227.5 195.6 242.6 529.1",
    "496.5 123.1 483.5 123.1 483.5 195.6 826.6 418.1",
    "496.5 138.1 483.5 138.1 483.5 195.6 186.6 419.1",
    "496.5 152.1 483.5 152.1 483.5 195.6 160.6 456.1",
    "496.5 166.1 483.5 166.1 483.5 195.6 639.6 477.1",
    "496.5 181.1 483.5 181.1 483.5 195.6 618.6 458.1",
    "795.5 123.1 782.5 123.1 782.5 195.6 604.6 441.1",
    "795.5 138.1 782.5 138.1 782.5 195.6 473.6 385.1",
    "795.5 152.1 782.5 152.1 782.5 195.6 476.6 430.1",
    "795.5 166.1 782.5 166.1 782.5 195.6 915.6 711.1",
    "795.5 181.1 782.5 181.1 782.5 195.6 323.6 655.1",
  ];

  return (
    <svg className={styles.HQLines} width="1006.8" height="770.5">
      <g id="hqLines">
        {connectorLines.map((connectorLine, index) => (
          <polyline
            key={index}
            className={`${styles["hq-line"]} ${
              selectedPolluter === index ? styles.highlighted : ""
            }`}
            points={connectorLine}
          />
        ))}
      </g>
    </svg>
  );
};
