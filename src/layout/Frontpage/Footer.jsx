import React  from 'react';


import FooterContent from '../../themes/learning/FooterContent';

const Footer = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <footer>
        <div className="container">
            <FooterContent/>
        </div>
    </footer>
  </React.Suspense>
  );
};


export default Footer;