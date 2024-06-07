import React from 'react';
import { Carousel, Container, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const slider: React.FC = () => {
  return (
    <Carousel.Item className="d-block w-100">
            <Carousel.Caption>
              <p><i>Italic</i></p>
            </Carousel.Caption>
          </Carousel.Item>
  )
}

const StickyFooterCarousel: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">

      <footer className="mt-auto">
        <Carousel interval={null}>
          
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/900x200"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/900x200"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </footer>
    </div>
  );
};

export default StickyFooterCarousel;
