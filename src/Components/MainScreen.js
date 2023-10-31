import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { approveProduct, markMissingProduct } from "./orderActions";

const MainScreen = ({ products, approveProduct, markMissingProduct }) => {
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showMissingPopup, setShowMissingPopup] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [editedProduct, setEditedProduct] = useState({
    price: 0,
    quantity: 0,
    reason: "Select a reason",
  });

  const handleApproveProduct = (productId) => {
    approveProduct(productId);
  };

  const handleOpenEditPopup = (productId) => {
    setSelectedProductId(productId);
    setShowEditPopup(true);
  };

  const handleCloseEditPopup = () => {
    setShowEditPopup(false);
    setSelectedProductId(null);
  };

  const handleOpenMissingPopup = (productId) => {
    setSelectedProductId(productId);
    setShowMissingPopup(true);
  };

  const handleCloseMissingPopup = () => {
    setShowMissingPopup(false);
    setSelectedProductId(null);
  };

  const handleMarkMissing = () => {
    if (selectedProductId !== null) {
      markMissingProduct(selectedProductId, editedProduct.reason);
      setShowMissingPopup(false);
      setSelectedProductId(null);
    }
  };

  useEffect(() => {
    // You can fetch products from your backend or local storage here
  }, []);

  return (
    <div>
      <h1>Order Details</h1>
      <div>
        <h2>Product List</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - {product.quantity} x ${product.price}
              <button onClick={() => handleApproveProduct(product.id)}>
                Approve
              </button>
              <button onClick={() => handleOpenMissingPopup(product.id)}>
                Mark Missing
              </button>
              <button onClick={() => handleOpenEditPopup(product.id)}>
                Edit
              </button>
            </li>
          ))}
        </ul>
      </div>
      {showEditPopup && (
        <div className="edit-popup">
          {/* Implement edit popup functionality here */}
          <button onClick={handleCloseEditPopup}>Close</button>
        </div>
      )}
      {showMissingPopup && (
        <div className="missing-popup">
          <label>
            <select
              value={editedProduct.reason}
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, reason: e.target.value })
              }
            >
              <option value="Select a reason" disabled>
                Select a reason
              </option>
              <option value="Missing">Missing</option>
              <option value="Missing - Urgent">Missing - Urgent</option>
            </select>
          </label>
          <button onClick={handleMarkMissing}>Save</button>
          <button onClick={handleCloseMissingPopup}>Cancel</button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = {
  approveProduct,
  markMissingProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
