import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import Header from './ortak/Header';
import LoginForm from './LoginForm';
import Button from './ortak/Button';
import CardSection from './ortak/CardSection';
import Spinner from './ortak/Spinner';
import ProductList from './my/components/ProductList';

class Main extends Component {
  state = { loggedIn: null };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCkNPZCAhkt5JSHj92p_LN0Bfnv2DHhyV0',
      authDomain: 'fcrs-539ea.firebaseapp.com',
      databaseURL: 'https://fcrs-539ea.firebaseio.com/',
      projectId: 'fcrs-539ea',
      storageBucket: 'kimlikdogrulama-2ab1b.appspot.com',
      messagingSenderId: '893455216843'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  clickLogout() {
    firebase.auth().signOut();
  }

  renderContent() {
    switch (this.state.loggedIn) {
        case true:
        return (
          <CardSection>
            <Button onPress={this.clickLogout.bind(this)}> LOGOUT </Button>
          </CardSection>
        );
      case false:
        return (
            <LoginForm />
        );
      default:
        return (
          <View>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Login Screen" />
        {this.renderContent()}
      </View>
    );
  }
}

export default Main;
