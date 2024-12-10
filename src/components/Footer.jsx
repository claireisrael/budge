// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Budget Management System. All rights reserved.
        </p>
        <p className="text-xs">
          Designed by Claire Namagala
        </p>
      </div>
    </footer>
  );
}

export default Footer;
