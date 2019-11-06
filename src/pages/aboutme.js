import React, { Fragment } from 'react';
import AngledSection from '../components/angled-section/AngledSection';
import Header from '../components/header/Header';

const aboutme = () => (
  <Fragment>
    <Header />
    <div className="content">
     <div className="content-section">
      <AngledSection title="About Me" />
        <div className="content">
          I'm Florencia from Argentina
        </div>
     </div>
    </div>
  </Fragment>
)

export default aboutme;




   

 