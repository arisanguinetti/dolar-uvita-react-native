import React from 'react';
import PropTypes from 'prop-types';
import { Linking } from 'react-native';
import { Appbar } from 'react-native-paper';

const Header = props => {
  const { doRefresh } = props;
  return (
    <Appbar.Header>
      <Appbar.Content {...props} />
      <Appbar.Action
        icon="public"
        onPress={() => Linking.openURL('https://dolar-uvita.now.sh')}
      />
      <Appbar.Action
        icon="launch"
        onPress={() => Linking.openURL('https://twitter.com/dolaruvita')}
      />
      <Appbar.Action icon="refresh" onPress={doRefresh} />
    </Appbar.Header>
  );
};

Header.propTypes = {
  doRefresh: PropTypes.func,
};

export default Header;
