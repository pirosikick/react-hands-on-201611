import React, { PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import { red500 } from 'material-ui/styles/colors';


/**
 * RemoveButtonコンポーネント
 */
function RemoveButton(props) {
  return (
    <IconButton
      iconClassName="material-icons"
      iconStyle={{
        color: red500,
      }}
      onClick={e => {
        e.preventDefault();
        props.onClick(e);
      }}
    >
      delete_forever
    </IconButton>
  );
}
RemoveButton.propTypes = {
  show: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default RemoveButton;
