import React from 'react';

import PropTypes from 'prop-types';

const initialData = [{ title: 'Error', body: 'Error fetching data' }];

const InfoDisplay = ({ data = initialData }) => {
  const formatBody = body => {
    const parsedBody = body.split('\n');
    const filteredBody = parsedBody.filter(Boolean);
    return filteredBody;
  };

  return (
    <div>
      {data &&
        data.map(item => (
          <div key={item.title}>
            <h2>{item.title}</h2>
            {formatBody(item.body).map(paragraph => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ))}
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

export default InfoDisplay;
