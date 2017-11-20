import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledSeparator = styled.div`
  height: 2px;
  background: #4d71b7;
  width: 100%;
  margin-bottom: 10px;
  margin-top: 10px;
  display: block;
  background: linear-gradient(
    to right,
    #ffb74d 0%,
    #ffb74d 25%,
    #ffc107 25%,
    #ffc107 50%,
    #ffd740 50%,
    #ffd740 75%,
    #ffd600 75%,
    #ffd600 100%
  );
`;

const Separator = () => <StyledSeparator />;

export default Separator;
