import styled from '@emotion/styled';

export interface WrapperProps {
  styled?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  height: 100%;
  position: relative;
  min-height: 300px;
  .FormMonacoEditor {
    position: absolute;
    left: 0;
    width: 50%;
    height: 100%;
  }
  .SettingPanel {
    position: absolute;
    right: 0;
    width: 50%;
    height: 100%;
  }
  ${(props) => props.styled}
`;
