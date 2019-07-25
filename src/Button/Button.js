import React from 'react';
import button from './button@0,1x.png';

import './styles.css';

class Button extends React.Component {
  render() {
    const {onClick, direction} = this.props;
    const className = direction === 'right' ? 'button-right' : 'button-left';

    return (
        <img onClick={onClick} src={button} className={'button ' + className} />
    );
  }
}

export default Button;
