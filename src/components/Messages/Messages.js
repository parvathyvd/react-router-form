import React from 'react';
import PropTypes from 'prop-types';

const messages = ({text}) => {
    return ( <span style={{color: '#ae5856'}}>{text}</span> );
}
 
messages.propTypes = {
    text: PropTypes.string.isRequired
};



export default messages;