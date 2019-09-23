import React from 'react';

import PropTypes from 'prop-types';

const InfoDisplay = ({ data }) => {
  return (
    <div>
      {data &&
        data.map(item => (
          <div key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        ))}
      /
    </div>
  );
};

InfoDisplay.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      body: PropTypes.string,
    })
  ),
};

InfoDisplay.defaultProps = {
  data: [{ title: 'Error', body: 'Error fetching data' }],
};

export default InfoDisplay;
