import React, { ReactNode } from 'react';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

interface MobileLayoutProps {
    children: ReactNode;
  }
  
  const MobileLayout: React.FC<MobileLayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#">Mobile WebGUI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <Form className='d-flex'>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      {/* Main Content */}
      <Container fluid className="mt-3">
        <Row>
          <Col xs={12} md={4} className="mb-3">
            <div className="p-3 bg-light border">Sidebar</div>
          </Col>
          <Col xs={12} md={8} className="mb-3">
            <div className="p-3 bg-light border">{children}</div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="mb-3">
            <div className="p-3 bg-light border">Footer</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MobileLayout

