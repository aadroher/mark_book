import React from 'react'

import styles from './ButtonSelector.module.css'

const NavigationLink = props => {
  const disabled = props.option.disabled
  const className = disabled
    ? styles.selected
    : undefined
  const href = '#'

  const properties = {
    href,
    className,
    onClick: props.onClick
  }

  return (
    <a {...properties}>
      {props.option.label}
    </a>
  )
}

const NavigationItem = props =>
  <li>
    <NavigationLink {...props}/>
  </li>

const NavigationPills = props => {
  const navigationItems = props.options.map((option, i) => {
    const onClick = e => {
      e.preventDefault()
      props.onGroupNameClick(option.id)
    }
    const properties = {
      option,
      onClick
    }
    return (
      <NavigationItem
        key={i}
        {...properties}
      />
    )
  })

  return (
    <ul className={styles['button-selector']}>
      {navigationItems}
    </ul>
  )
}

export default NavigationPills