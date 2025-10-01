import useFetch from '../hooks/useFetch';
import './PhotoGallery.css';

const PhotoGallery = () => {
  const { data, loading, error } = useFetch('https://api.escuelajs.co/api/v1/products');

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <p>Failed to load images</p>
      </div>
    );
  }

  return (
    <div className="photo-gallery">
      {data && data.map((product) => (
        <div key={product.id} className="photo-card">
          <img 
            src={product.images[0]} 
            alt={product.title}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/600x600/cccccc/666666?text=No+Image';
            }}
          />
          <div className="photo-info">
            <h3 className="photo-title">{product.title}</h3>
            <p className="photo-price">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;