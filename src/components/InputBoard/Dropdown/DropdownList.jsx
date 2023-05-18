/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import { SDiv, colors } from "@styles";

import DropdownListItem from "./DropdownListItem";

const DropdownList = ({ options = [], onClick }) => {
  // const optionList = options ?? DUMMY_OPTIONS;
  return (
    <S.MainWrapper pd="10px" g8 bg={colors.gray8} br={12} mgt={4}>
      <SDiv col ast g={2}>
        {/* Todo: SearchInput 컴포넌트 추가 */}
        {options.map((item) => (
          <DropdownListItem key={item.id} option={item} onClick={onClick} />
        ))}
      </SDiv>
    </S.MainWrapper>
  );
};

DropdownList.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

DropdownList.defaultProps = {
  options: [],
};

const S = {};

S.MainWrapper = styled(SDiv)`
  position: absolute;
  overflow: scroll;
  z-index: 10;

  width: 100%;
  max-height: 255px;
  min-height: 55px;

  @media only screen and (max-width: 768px) {
    position: fixed;
    top: 50%;
    left: 50%;

    margin: 0;
    width: 80%;
    max-width: 600px;
    max-height: 50%;

    transform: translateX(-50%) translateY(-50%);
  }
`;

export default DropdownList;
