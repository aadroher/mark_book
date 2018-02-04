import React from 'react'
import styled from 'styled-jss'

const StyledLink = styled('a')({
  color: 'blue'
})

const DisabledStyledLink = styled(StyledLink)({
  color: 'grey'
})

const ButtonSelector = props =>
  <div>
    {
      props.options.map((option, i) => {
        const childProps = {
          key: i,
          disabled: option.disabled,
          onClick: e => {
            e.preventDefault()
            props.onGroupNameClick(option.id)
          }
        }
        if (!option.disabled) {
          return (
            <StyledLink href='#' {...childProps}>
              {option.label}
            </StyledLink>
          )
        } else {
          return (
            <DisabledStyledLink href='#' {...childProps}>
              {option.label}
            </DisabledStyledLink>
          )
        }
      })
    }
  </div>

export default ButtonSelector