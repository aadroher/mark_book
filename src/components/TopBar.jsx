import React from 'react'

import styles from './TopBar.module.css'

const TopBar = () =>
  <nav className={styles['top-bar']}>
    <div>
      <span className='app-name'>
        Mark Book
      </span>
    </div>
  </nav>

export default TopBar