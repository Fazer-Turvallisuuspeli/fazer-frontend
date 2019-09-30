import React from 'react';

import { connect } from 'react-redux';

const InfoDisplay = ({ welcomeMessage, children }) => {
  if (!welcomeMessage.data) return null;

  return (
    <div>
      {welcomeMessage.data.map(({ title, body }) => (
        <div key={title}>
          {title && <p>{title}</p>}
          {body
            .split('\n')
            .filter(Boolean)
            .map(text => (
              <p key={text}>{text}</p>
            ))}
        </div>
      ))}

      {children}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    welcomeMessage: state.info.welcomeMessage,
  };
};

export default connect(
  mapStateToProps,
  null
)(InfoDisplay);
