import React, { PureComponent } from 'react';
// import moment from 'moment';
// import { connect } from 'dva';
// import Link from 'umi/link';
import { Row, Col, Card, Divider } from 'antd';

import PageHeaderWrapper from '@/components/PageHeaderWrapper';

class TestPage extends PureComponent {
  componentDidMount() {}

  render() {
    return (
      <PageHeaderWrapper loading={false} content={<span>aaa-content</span>}>
        <Card title="hello-test">
          <div>这是一个测试用的页面</div>
          <br />
          <Divider />
          <Row>
            <Col span={8}>123</Col>
            <Col span={8}>123</Col>
            <Col span={8}>123</Col>
          </Row>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default TestPage;
