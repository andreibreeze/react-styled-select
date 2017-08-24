import styled from 'styled-components'
import defaults from '../defaults.js'

export default styled.div`
  font-family: ${defaults.fontFamily};
  font-family: var(--styled-select-value-label-font-family, ${defaults.fontFamily});
  color: ${defaults.valueLabel__color};
  color: var(--styled-select-color, ${defaults.valueLabel__color});
  box-sizing: border-box;
  border-right: 1px solid;
  display: inline-block;
  padding: 1px 5px;

  &:hover {
    background-color: #ccc;
    cursor: pointer;
  }
`
