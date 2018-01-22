import React from 'react'
import FlatButton from 'material-ui/FlatButton'

const ButtonSelector = props =>
  <div>
    {
      props.options.map((option, i) =>
        <button
          key={i}
          label={option.label}
          disabled={option.id === props.selectedGroupId}
          onClick={_ => {
            props.onGroupNameClick(option.id)
          }}
        />
      )
    }
  </div>

export default ButtonSelector