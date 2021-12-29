/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

/* Josh uses CSS variable for value */
const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: 100%;
  width: ${(props) => props.value}%;
  border-radius: 4px 0 0 4px;
`;

const ProgressBarBase = styled.div`
  width: 370px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
`;

const ProgressBarLarge = styled(ProgressBarBase)`
  padding: 4px;
  height: 24px;
`;

const ProgressBarMedium = styled(ProgressBarBase)`
  height: 12px;
  border-radius: 4px;
`;

const ProgressBarSmall = styled(ProgressBarBase)`
  height: 8px;
  border-radius: 4px;
`;

/* To hide corners of bar when near 100% */
const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
`;

const ProgressBar = ({ value, size }) => {
  let Component;
  if (size === "large") {
    Component = ProgressBarLarge;
  } else if (size === "medium") {
    Component = ProgressBarMedium;
  } else if (size === "small") {
    Component = ProgressBarSmall;
  } else {
    throw new Error(`Unrecognized Button variant: ${size}`);
  }
  return (
    <Component>
      <BarWrapper>
        <Bar
          value={value}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <VisuallyHidden>{value}</VisuallyHidden>
        </Bar>
      </BarWrapper>
    </Component>
  );
};

export default ProgressBar;
