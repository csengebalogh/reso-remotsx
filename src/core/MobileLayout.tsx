import React, { ReactNode } from 'react';
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import StickyFooterCarousel from './StickyFooter';
import {components} from '../services/schema'

type Composition = components["schemas"]["Composition"];


interface MobileLayoutProps {
  children: ReactNode;

}

const MobileLayout: React.FC<MobileLayoutProps> = ({ children }) => {
  return (
    <div>
      <div className="controls p-2">
        <div className="d-flex justify-content-center">
          <ButtonGroup style={{ width: '100%' }}>
            <Button variant="primary" style={{ flex: '1', padding: '40 10' }}>Button 1</Button>
            <Button variant="primary" style={{ flex: '1', padding: '40 10' }}>Button 2</Button>
            <Button variant="primary" style={{ flex: '1', padding: '40 10' }}>Button 3</Button>
            <Button variant="primary" style={{ flex: '1', padding: '40 10' }}>Button 4</Button>
            <Button variant="primary" style={{ flex: '1', padding: '40 10' }}>Button 5</Button>
          </ButtonGroup>
        </div>
      </div>

      {/* Main Content */}
      <Container fluid className="mt-3">

        <Row>
          <Col xs={12} md={12} className="dropdown mb-3">
            {children}
          </Col>
        </Row>
        <Row>
          <StickyFooterCarousel  />
        </Row>
      </Container>
    </div>
  );
}

export default MobileLayout

