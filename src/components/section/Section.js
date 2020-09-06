import React from 'react';
import PropTypes from 'prop-types';
import SectionStyles from './SectionStyles.module.css';

export default function Section({ title, children }) {
  return (
    <>
      <h2 className={SectionStyles.section__title}>{title}</h2>
      {children}
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
