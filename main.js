'use strict';

import React, { Component } from 'react'
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';
import SearchPage from './SearchPage';

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    margin: 5,
    padding: 5,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#48BBEC',
    alignSelf: 'center',
    marginTop: 10
  },


});

class PropertyFinderApp extends Component {

  renderScene(route, navigator) {
    return <route.component navigator={navigator} {...route.passProps} />
  }

  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}
        renderScene={ this.renderScene }
              navigationBar={
        <Navigator.NavigationBar
          navigationStyles={Navigator.NavigationBar.StylesIOS}
          routeMapper={{
            LeftButton: (route, navigator, index, navState) => {
              if (route.title == 'Property Finder') {
                return null;
              } else {
                return (
                  <TouchableHighlight style={styles.button} onPress={() => navigator.pop()}>
                    <Text style={styles.buttonText}>Back</Text>
                  </TouchableHighlight>
                );
              }
            },
            RightButton: (route, navigator, index, navState) =>
              { return null },
            Title: (route, navigator, index, navState) =>
              { return (<Text style={styles.titleText}>{route.title}</Text>); },
            }}
        />
      }
      />
    );
  }
}

AppRegistry.registerComponent('PropertyFinder', function() { return PropertyFinderApp });