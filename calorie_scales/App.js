import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import MyIcon from './icon-font.js';

export default class App extends Component {

  state = {
    loading: true
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'calorie-scales': require('./assets/fonts/calorie-scales.ttf'),
      ...Ionicons.font,
    })
    this.setState({ loading: false })
  }

  render() {
    if (this.state.loading) {
      return (
        <View></View>
      );
    }
    return (
      <Container>
        <Header style={styles.header}>
          <Body>
            <Title style={styles.headerName}>
              CalorieScales
            </Title>
          </Body>
          <Right>
            <Icon style={styles.historyIcon}>
              <MyIcon name={'history'} size={22} color={'#FFFFFF'} />
            </Icon>
            <Text style={styles.historyText}>
              история
            </Text>
          </Right>
        </Header>
        <Content>
          <View></View>
        </Content>
        <Footer>
          <FooterTab></FooterTab>
        </Footer>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    width: 360,
    height: 56,
    left: 0,
    top: 24,
    backgroundColor: '#235905',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: 'black',
    shadowOpacity: .25,
  },
  headerName: {
    position: 'absolute',
    left: 50,
    top: -16,
    fontFamily: 'Roboto_medium',
    fontSize: 20,
    color: '#FFFFFF',
  },
  historyIcon: {
    position: 'absolute',
    right: 27,
    top: -18,
  },
  historyText: {
    position: 'absolute',
    right: 10,
    top: 2,
    fontSize: 14,
    color: '#FFFFFF',
  },
});