import React from 'react';
import PropTypes from 'prop-types';

const CardTransparent = ({ children }) => {
  return (
    <div className="card-transparent">
      {children}
      <style jsx>{`
        .card-transparent {
          margin: 10%;
          padding: 15px;
          gap: 10px;
          max-height: 70%;
          max-width: 35%;
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          background-color: rgba(17, 25, 40, 0.25);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.125);
          filter: drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125));
        }
      `}</style>
    </div>
  );
};

CardTransparent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardTransparent;
