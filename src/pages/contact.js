import React, { Fragment } from 'react';
import AngledSection from '../components/angled-section/AngledSection';
import Header from '../components/header/Header';

const contact = () => (
   <Fragment>
    <Header />
    <div className="content">
     <div className="content-section">
  <AngledSection title="Contact" />
  </div>
  </div>
  </Fragment>
)

export default contact;