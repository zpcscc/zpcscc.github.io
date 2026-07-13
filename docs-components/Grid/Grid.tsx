import Col from '@/components/Col';
import Row from '@/components/Row';
import { type FC } from 'react';

const App: FC = () => {
  return (
    <Row>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
    </Row>
  );
};

export default App;
