import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 500, size, placeholder }) => {
  let Component;
  let IconSize;
  let IconStokeWidth;
  if (size === "large") {
    Component = InputLarge;
    IconSize = 24;
    IconStokeWidth = 2;
  } else if (size === "small") {
    Component = InputSmall;
    IconSize = 16;
    IconStokeWidth = 1;
  } else {
    throw new Error(`Unrecognized IconInput size: ${size}`);
  }
  
  return (
    <Wrapper width={width}>
      <VisuallyHidden>
        <label for={label}>{label}</label>
      </VisuallyHidden>
      <IconWrapper style={{ '--size': IconSize + 'px' }}>
        <Icon id={icon} size={IconSize} strokeWidth={IconStokeWidth} />
      </IconWrapper>
      <Component type="text" placeholder={placeholder} id={label}></Component>
    </Wrapper>
  );
};

const Wrapper = styled.div `
  width: ${(props) => props.width}px;
  position: relative;
  color: ${COLORS.gray700};
  
  &:hover {
    color: ${COLORS.black};
  }
`;

const InputBase = styled.input`
  width: 100%;
  border: none;
  font-weight: 700;
  color: inherit;
  
  
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
  
  &:focus {
    outline-offset: 2px;
  }
`;

/* Missing height, but it does not seem to matter to much :) */

const InputSmall = styled(InputBase)`
  border-bottom: 1px solid ${COLORS.black};
  padding: 4px;
  padding-left: 20px;
  font-size: ${14/16}rem;
`;

const InputLarge = styled(InputBase)`
  border-bottom: 2px solid ${COLORS.black};
  padding: 8px;
  padding-left: 30px;
  font-size: ${18/16}rem;
`;

const IconWrapper = styled.div `
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
  color: inherit;
`;

export default IconInput;
