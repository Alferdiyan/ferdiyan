import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="p-10 flex border-gray-100 justify-center">
        <div>
          &copy; Copyright{' '}
          <strong>
            <span className="text-orange-500">Ferdiyan 2023</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
