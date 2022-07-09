import styled from '@emotion/styled';

export interface WrapperProps {
  styled?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  height: 100%;
  min-height: 300px;
  overflow: hidden;
  .ant-tabs {
    height: 100%;
    padding-left: 0px;
    .ant-tabs-content {
      height: 100%;
      overflow: scroll;
      .ant-tabs-tabpane {
        padding: 24px;
      }
    }
  }
  ${(props) => props.styled}
`;
