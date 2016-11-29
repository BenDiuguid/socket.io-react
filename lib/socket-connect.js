import React, { PropTypes, createElement } from 'react';

function socketConnect(Target) {
  const SocketConnect = (props, context) =>
    createElement(Target, {
      ...props,
      socket: context.socket
    });

  SocketConnect.contextTypes = {
    socket: PropTypes.oneOfType([
      PropTypes.bool, PropTypes.object
    ]),
  }

  return SocketConnect;
}

export default socketConnect;
