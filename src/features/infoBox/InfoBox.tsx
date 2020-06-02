import React from "react";

import { useSelector } from "react-redux";
import { selectPolluterInfo } from "../../app/pollutersSlice";

import styles from "./infoBox.module.css";

export const InfoBox = () => {
  const selectedPolluterInfo = useSelector(selectPolluterInfo);

  if (!selectedPolluterInfo[0]) return null;

  return (
    <div id={styles["text-box-main"]}>
      <h3 className={styles.h3} >&nbsp;{selectedPolluterInfo[0]}</h3>
      <hr className={styles.hr} />
      <table className={styles.table}>
        <tbody>
          <tr>
            <td className={styles.tdlabel}>Headquarters location</td>
            <td>{selectedPolluterInfo[6]}</td>
          </tr>
          <tr>
            <td className={styles.tdlabel}>Fossil fuel production / coal sold:</td>
            <td>1{selectedPolluterInfo[1]}</td>
          </tr>
          <tr>
            <td className={styles.tdlabel}>Global emissions 1965-2017:</td>
            <td>{selectedPolluterInfo[2]}</td>
          </tr>
          <tr>
            <td className={styles.tdlabel}>Projected future emissions 2018-30:</td>
            <td>{selectedPolluterInfo[3]}</td>
          </tr>
          <tr>
            <td className={styles.tdlabel}>Future projects:</td>
            <td>{selectedPolluterInfo[4]}</td>
          </tr>
          <tr>
            <td className={styles.tdlabel}>Environmental disasters / scandals:</td>
            <td>{selectedPolluterInfo[5]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
