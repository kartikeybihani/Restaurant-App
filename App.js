import React from 'react';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import { Text, View } from 'react-native';

const { store } = ConfigureStore();

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  }
} 