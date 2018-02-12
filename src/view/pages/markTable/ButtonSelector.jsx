import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './ButtonSelector.module.css'

const NavigationLinks = props =>
  <ul className={styles['button-selector']}>
    {
      props.options.map((option, i) =>
        <li key={i} >
          <NavLink
            exact
            to={option.path}
            activeClassName={styles.selected}
          >
            {option.label}
          </NavLink>
        </li>
      )
    }
  </ul>

export default NavigationLinks