/* eslint-disable react/function-component-definition */
import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

const Container = Styled.div`
  progress {
    margin-right: 8px;
  }

  @media screen and (min-width: 1024px) {
    progress {
      width: 30%;
    }
  }

  progress[value] {
    width: ${(props) => props.width};

    -webkit-appearance: none;
    appearance: none;
  }

  progress[value]::-webkit-progress-bar {
    height: 10px;
    border-radius: 20px;
    background-color: grey;
  }  

  @media screen and (min-width: 1024px) {
    progress[value]::-webkit-progress-bar {
      width: 39%;
      margin-left: 19.5rem;
    }
  }

  progress[value]::-webkit-progress-value {
    height: 10px;
    border-radius: 20px;
    background-color: ${(props) => props.color};
  }
`;

const ProgressBar = ({ value, max, color, width }) => {
  return (
    <Container className="container-back" color={color} width={width}>
      <progress value={value} max={max} />
    </Container>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.string,
};

ProgressBar.defaultProps = {
  max: 100,
  color: "lightBlue",
  width: "250px",
};

export default ProgressBar;
