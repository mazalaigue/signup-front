import React from 'react';
import PropTypes from 'prop-types';

// Source: we do not know where this icon comes from
const SearchIcons = ({ title }) => (
  <svg className="icon icon-search" width="100%" height="100%">
    {title && <title>{title}</title>}
    <path d="M15.504 13.616l-3.79-3.223c-0.392-0.353-0.811-0.514-1.149-0.499 0.895-1.048 1.435-2.407 1.435-3.893 0-3.314-2.686-6-6-6s-6 2.686-6 6 2.686 6 6 6c1.486 0 2.845-0.54 3.893-1.435-0.016 0.338 0.146 0.757 0.499 1.149l3.223 3.79c0.552 0.613 1.453 0.665 2.003 0.115s0.498-1.452-0.115-2.003zM6 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" />
  </svg>
);

SearchIcons.propTypes = {
  title: PropTypes.string,
};

SearchIcons.defaultProps = {
  title: null,
};

export default SearchIcons;