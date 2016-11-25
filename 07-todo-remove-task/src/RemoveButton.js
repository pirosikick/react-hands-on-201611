import React, { PropTypes } from 'react';

/**
 * RemoveButtonコンポーネント
 */
function RemoveButton(props) {
  return (
    <a
      href="#"
      style={{
        color: 'red',
        visibility: props.show ? 'visible' : 'hidden'
      }}
      onClick={e => {
        e.preventDefault();
        props.onClick(e);
      }}
    >削除</a>
  );
}
RemoveButton.propTypes = {
  show: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default RemoveButton;
