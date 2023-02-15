import React from "react";
import { useInView } from 'react-intersection-observer';

import styles from '../styles/components/numbers-block.module.scss'

import "../assets/css/fontawesome.css"
import "../assets/css/brands.css"
import "../assets/css/solid.css"

const NumbersBlock = () => {
  return (
    <div className={styles.numbers_component_wrapper}>
      <h2>Numbers don't lie ;)</h2>
      <table>
        <tr>
          <th>95<span>%</span></th>
          <th>7.5<span>M</span></th>
          <th>565<span>+</span></th>
          <th>240<span>%</span></th>
        </tr>
        <tr>
          <td>Succesfull matching</td>
          <td>Active candidates</td>
          <td>Different branches</td>
          <td>Company growth</td>
        </tr>
      </table>
    </div>
  )
}

export default NumbersBlock
