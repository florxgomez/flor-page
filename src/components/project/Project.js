import React, { Fragment } from 'react';
import { faGlobe, faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJs,
  faReact,
  faNodeJs,
  faCss3,
  faBootstrap,
} from '@fortawesome/free-brands-svg-icons';
import firebaseIcon from '../../images/icons/firebase.png';
import reduxIcon from '../../images/icons/redux.png';
import materialIcon from '../../images/icons/material-ui-logo.png';
import nextjsIcon from '../../images/icons/nextjs.png';
import prismaIcon from '../../images/icons/prisma.png';
import postgressIcon from '../../images/icons/postgress.png';
import vercelIcon from '../../images/icons/vercel.png';

import './Project.css';

const Project = (props) => {
  const renderFA = (icon) => {
    switch (icon) {
      case 'fajs':
        return faJs;
      case 'fareact':
        return faReact;
      case 'fanode':
        return faNodeJs;
      case 'facss':
        return faCss3;
      case 'faboot':
        return faBootstrap;
      default:
        return null;
    }
  };

  const renderOtherIcon = (el) => {
    switch (el.icon) {
      case 'firebase':
        return firebaseIcon;
      case 'redux':
        return reduxIcon;
      case 'material':
        return materialIcon;
      case 'nextjs':
        return nextjsIcon;
      case 'prisma':
        return prismaIcon;
      case 'postgress':
        return postgressIcon;
      case 'vercel':
        return vercelIcon;
      default:
        return null;
    }
  };

  const renderIcons = (icons) =>
    icons.map((el) =>
      el.icon.startsWith('fa') ? (
        <div class="icon">
          <FontAwesomeIcon
            icon={renderFA(el.icon)}
            size="lg"
            style={{ color: `${el.color}` }}
          />
        </div>
      ) : (
        <div class="icon">
          <img
            class={`${el.icon}-size`}
            src={renderOtherIcon(el)}
            alt={el.icon}
          />
        </div>
      )
    );

  const { title, desc, stack, website, codeUrl } = props;

  return (
    <Fragment>
      <div class="box">
        <div class="tech">{renderIcons(stack)}</div>
        <div class="box-title">
          <h2>{title}</h2>
        </div>
        <div class="box-desc">
          <p>{desc}</p>
        </div>
        <div class="box-links">
          <a
            href={website}
            class="box-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGlobe} size="lg" />
          </a>
          <a
            href={codeUrl}
            class="box-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faCode} size="lg" />
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Project;
