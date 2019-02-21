import React, { PureComponent } from 'react';
import { Text } from 'react-native';

export default (props) => {
  return (
    <Text {...props} numberOfLines={1} />
  )
}