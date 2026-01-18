import React from 'react';
import useFetch from '../hooks/useFetch';
import './ProductList.css';

const ProductList = () => {
  const API_URL = 'https://api.escuelajs.co/api/v1/products';
  const { data, loading, error, refetch } = useFetch(API_URL);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error!</h2>
        <p>{error}</p>
        <button onClick={refetch} className="retry-btn">
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="product-container">
      <h1>Product List</h1>
      <button onClick={refetch} className="refresh-btn">
        Refresh Data
      </button>
      <div className="product-grid">
        {data &&
          data.slice(0, 12).map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                {product.images && product.images[0] ? (
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/150';
                    }}
                  />
                ) : (
                  <div className="image-placeholder">No Image</div>
                )}
              </div>
              <div className="product-info">
                <h3>{product.title}</h3>
                <p className="product-category">{product.category?.name || 'Uncategorized'}</p>
                <p className="product-price">${product.price}</p>
                <p className="product-description">
                  {product.description.length > 100
                    ? `${product.description.substring(0, 100)}...`
                    : product.description}
                </p>
              </div>
            </div>
          ))}
      </div>
      {data && (
        <p className="product-count">
          Showing {Math.min(12, data.length)} of {data.length} products
        </p>
      )}
    </div>
  );
};

export default ProductList;
