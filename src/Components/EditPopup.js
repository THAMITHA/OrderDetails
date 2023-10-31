import React, { useState } from "react";

const EditPopup = ({ product, onClose, onUpdateProduct }) => {
  const [editedProduct, setEditedProduct] = useState({ ...product });

  const handleUpdateProduct = () => {
    onUpdateProduct(editedProduct);
    onClose();
  };

  return (
    <div className="edit-popup">
      <h2>Edit Product</h2>
      <label>
        Price:
        <input
          type="number"
          value={editedProduct.price}
          onChange={(e) =>
            setEditedProduct({
              ...editedProduct,
              price: parseFloat(e.target.value),
            })
          }
        />
      </label>
      <label>
        Quantity:
        <input
          type="number"
          value={editedProduct.quantity}
          onChange={(e) =>
            setEditedProduct({
              ...editedProduct,
              quantity: parseInt(e.target.value, 10),
            })
          }
        />
      </label>
      <button onClick={handleUpdateProduct}>Update</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default EditPopup;
