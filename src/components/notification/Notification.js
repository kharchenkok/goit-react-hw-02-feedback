import React from 'react';
import PropTypes from 'prop-types';
import NotificationStyles from "./NotificationStyles.module.css"

export default function Notification({ message }){
  return <p className={NotificationStyles.notification__message}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

