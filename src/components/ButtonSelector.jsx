import React from 'react'

import './button_selector.css'

const NavigationLink = props => {
  const isActive = props.selectedGroupId === props.option.id
  const className = `nav-link ${isActive ? 'disabled' : ''}`
  const href = '#'

  const properties = {
    className,
    href,
    onClick: props.onClick
  }

  return (
    <a {...properties}>
      {props.option.label}
    </a>
  )
}

const NavigationItem = props =>
  <li className="nav-item">
    <NavigationLink {...props}/>
  </li>

const NavigationPills = props => {
  const navigationItems = props.options.map((option, i) => {
    const onClick = e => {
      e.preventDefault()
      props.onGroupNameClick(option.id)
    }
    const properties = {
      selectedGroupId: props.selectedGroupId,
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
    <ul className="nav">
      {navigationItems}
    </ul>
  )
}

export default NavigationPills