import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Modal from 'react-modal';
import './App.css';

function App() {
  const images = Array.from({ length: 16 }, (_, i) => i + 1); // creates an array [1, 2, ..., 18]

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageNumber) => {
    setSelectedImage(imageNumber);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  const redirectToFacebook = () => {
    window.location.href = 'https://www.facebook.com/oanhh.hoangg.03';
  };
  return (
    <div>
      <h1>Image Gallery</h1>
      <div className="image-gallery">
        
        <div className="image-grid">
          {images.map((imageNumber) => (
            <div key={imageNumber} className="image-item" onClick={() => openModal(imageNumber)}>
              <img src={`/assets/${imageNumber}.jpg`} alt={`Image ${imageNumber}`} />
            </div>
          ))}
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className={`modal ${modalIsOpen ? 'modal-open' : ''}`}
          overlayClassName="overlay"
        >
          {selectedImage !== null && (
            <img src={`/assets/${selectedImage}.jpg`} alt={`Image ${selectedImage}`} />
          )}
        </Modal>
      </div>
      <div className="social-icons">
        <FontAwesomeIcon icon={faFacebook} size="2x"  onClick={redirectToFacebook}/>
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </div>
    </div>
  );
}

export default App;
