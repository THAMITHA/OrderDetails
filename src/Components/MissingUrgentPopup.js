import React, { useState } from "react";

const MissingUrgentPopup = ({ onClose, onMarkMissingProduct }) => {
  const [urgent, setUrgent] = useState(false);

  const handleMarkMissing = () => {
    const status = urgent ? "Missing - Urgent" : "Missing";
    onMarkMissingProduct(status);
    onClose();
  };

  return (
    <div className="missing-urgent-popup">
      <h2>Mark as Missing</h2>
      <label>
        Urgent:
        <input
          type="checkbox"
          checked={urgent}
          onChange={() => setUrgent(!urgent)}
        />
      </label>
      <button onClick={handleMarkMissing}>Mark</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default MissingUrgentPopup;
