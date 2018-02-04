import React from 'react'

const ButtonSelector = props =>
  <div>
    {
      props.options.map((option, i) =>
        <button
          key={i}
          disabled={option.id === props.selectedGroupId}
          onClick={_ => {
            props.onGroupNameClick(option.id)
          }}
        >
          {option.label}
        </button>
      )
    }
  </div>

export default ButtonSelector