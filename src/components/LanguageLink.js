import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const LanguageLink = ({ type, ...props }) => {
  const { pathname } = useLocation();
  const lang = pathname.split('/')[1];

  const linkProps = {
    ...props,
  };

  if (linkProps.to) {
    linkProps.to = `/${lang}${linkProps.to && linkProps.to !== '/' ? linkProps.to : ''}`;
  }

  if (type === 'navLink') {
    return <NavLink {...linkProps} />;
  } else {
    return <Link {...linkProps} />;
  }
};

export default LanguageLink;
