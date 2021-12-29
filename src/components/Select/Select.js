import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <FakeSelect>
        {displayedValue}
        <IconWrapper style={{ '--size': 24 + 'px' }}>
          <Icon id="chevron-down" size={24} strokeWidth={1} />
        </IconWrapper>
      </FakeSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: max-content;
  position: relative;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;  
  width: 100%;
  height: 100%;
  opacity: 0;
  /* Allow the select to span the full height in Safari */
  -webkit-appearance: none;
`;

const FakeSelect = styled.div `
color: ${COLORS.gray700};
font-size: 1rem;
background-color: ${COLORS.transparentGray15};
border-radius: 8px;
padding: 12px 16px;
padding-right: 40px;

${NativeSelect}:focus + & {
  outline: 1px dotted black; /* Fallback */
  outline: 5px auto -webkit-focus-ring-color; /* Fake focus ring mimicking Safari */
}

${NativeSelect}:hover + & {
  color: ${COLORS.black};
}


`;

const IconWrapper = styled.div `
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;

export default Select;
