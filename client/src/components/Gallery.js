import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../assets/gallery/1.png';
import img2 from '../assets/gallery/2.png';
import img3 from '../assets/gallery/3.png';
import img4 from '../assets/gallery/4.png';
import img5 from '../assets/gallery/5.png';
import img6 from '../assets/gallery/6.png';
import img7 from '../assets/gallery/7.png';
import img8 from '../assets/gallery/8.png';
import img9 from '../assets/gallery/9.jpg';
import img10 from '../assets/gallery/10.jpg';
import "../styles/Gallery.css";

const images = [
  { id: 1, path: img1, caption: 'First slide label', description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.' },
  { id: 2, path: img2, caption: 'Second slide label', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 3, path: img3, caption: 'Third slide label', description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.' },
  { id: 4, path: img4, caption: 'Fourth slide label', description: 'Maecenas sed diam eget risus varius blandit sit amet non magna.' },
  { id: 5, path: img5, caption: 'Fifth slide label', description: 'Etiam porta sem malesuada magna mollis euismod.' },
  { id: 6, path: img6, caption: 'Sixth slide label', description: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula.' },
  { id: 7, path: img7, caption: 'Seventh slide label', description: 'Nullam id dolor id nibh ultricies vehicula ut id elit.' },
  { id: 8, path: img8, caption: 'Eighth slide label', description: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula.' },
  { id: 9, path: img9, caption: 'Ninth slide label', description: 'Maecenas sed diam eget risus varius blandit sit amet non magna.' },
  { id: 10, path: img10, caption: 'Tenth slide label', description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.' }
];

export default function Gallery() {
  return (
    <div className="galleryContainer">
    <div className='carouselContainer'>
      <Carousel interval={null}>
        {images.map((image) => (
          <Carousel.Item key={image.id} style={{ height: "80vh", width: "70vh"}}>
            <img src={image.path} alt="/" />
            {/* <Carousel.Caption>
              <h3>{image.caption}</h3>
              <p>{image.description}</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        ))}
      </Carousel>
      </div>
      <div className="footer">
            Rondon Construction & Renovations © 2024 
          </div>
    </div>
  );
}
