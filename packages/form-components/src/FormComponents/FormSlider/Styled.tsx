import styled from '@emotion/styled';

export interface WrapperProps {
  styled?: string;
  showInputNumber?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  display: flex;
  .ant-slider {
    width: ${(props) => (props.showInputNumber ? '60%' : '100%')};
    margin-right: 10px;
  }
  .ant-input-number-group-wrapper {
    width: 40%;
  }
  ${(props) => props.styled};
`;
