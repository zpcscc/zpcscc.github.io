import styled from '@emotion/styled';
import { Form } from 'antd';

export const Wrapper = styled.div`
  .ant-select,
  input,
  .ant-input-number {
    max-width: 300px;
  }

  /* 多层级时，那条层级线 */
  .FormItemRender::before {
    position: absolute;
    top: -10px;
    left: -50px;
    width: 0px;
    height: 130%;
    border: 1px dashed #000;
    content: '';
  }
`;

export interface FormItemWrapperProps {
  styled?: string;
}

export const FormItemWrapper = styled(Form.Item)<FormItemWrapperProps>`
  ${(props) => props.styled};
`;
