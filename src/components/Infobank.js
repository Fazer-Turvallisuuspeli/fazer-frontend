import React from 'react';

import { connect } from 'react-redux';

const Infobank = ({ infobankText, isInfobankVisible, children }) => {
  if (isInfobankVisible === false || infobankText === undefined) return null;

  return (
    <div>
      {infobankText.map(({ title, body }) => (
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
    infobankText: state.game.categories.currentCategory.data.instructions,
    isInfobankVisible: state.game.infobank.isVisible,
  };
};

export default connect(
  mapStateToProps,
  null
)(Infobank);
