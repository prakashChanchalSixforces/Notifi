import React from 'react';
import { withAppContext } from '../context';

import UserMessage from './userMessage';
import FileMessage from './fileMessage';
import AdminMessage from './adminMessage';

const Message = props => {
  const { message,key } = props;
  return  <UserMessage message={ message} key={key} {...props} />;
};

export default withAppContext(Message);
