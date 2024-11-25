import styled from "styled-components";

const GalleryWrapper = styled.section`
  padding: 3rem 1rem;
  background-color: #fff;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .gallery-item {
    position: relative;
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const GalleryPage = () => {
  const images = [
    "/src/assets/images/gal1.jpg",
    "/src/assets/images/gal2.jpg",
    "/src/assets/images/gal3.jpg",
    "/src/assets/images/gal4.jpg",
    "/src/assets/images/gal5.jpg",
    "/src/assets/images/gal6.jpg",
    "/src/assets/images/gal7.jpg",
    "/src/assets/images/gal8.jpg",
    "/src/assets/images/gal9.jpg",
    "/src/assets/images/gal10.jpg",
  ];

  return (
    <GalleryWrapper>
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </GalleryWrapper>
  );
};

export default GalleryPage;
