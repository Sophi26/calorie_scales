import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, List, ListItem } from 'native-base';
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
          <Left>
            <Icon ios='ios-menu' android="md-menu" style={styles.menuIcon} />
          </Left>
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
          <View>

          </View>
        </Content>
        <Footer style={styles.footer}>
          <Text style={styles.calorieNum}>0</Text>
          <Text style={styles.calorieText}>ккал</Text>
          <List style={styles.listInfo}>
            <ListItem style={styles.listItem}>
              <Text style={styles.infoText}>Белки</Text>
              <Text style={styles.infoNum}>0 г</Text>
            </ListItem>
            <ListItem style={styles.listItem}>
              <Text style={styles.infoText}>Жиры</Text>
              <Text style={styles.infoNum}>0 г</Text>
            </ListItem>
            <ListItem style={styles.listItem}>
              <Text style={styles.infoText}>Углеводы</Text>
              <Text style={styles.infoNum}>0 г</Text>
            </ListItem>
          </List>
          <View style={styles.lineStyle} />
          <Text style={styles.weightText}>общий вес:</Text>
          <Text style={styles.weightNum}>0 г</Text>
          <View style={styles.navTmp}></View>
        </Footer>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  lineStyle: {
    position: 'absolute',
    height: 100,
    left: 222,
    top: 15,
    borderLeftColor: '#FFFFFF',
    borderLeftWidth: .5,
  },
  listInfo: {
    position: 'absolute',
    left: 85,
    top: 0,
  },
  listItem: {
    lineHeight: 14,
    width: 100,
  },
  infoText: {
    color: '#FFFFFF',
    fontSize: 12,
    lineHeight: 14,
  },
  infoNum: {
    color: '#FFFFFF',
    fontSize: 12,
    lineHeight: 14,
    position: 'absolute',
    right: 0,
  },
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
  footer: {
    position: 'relative',
    width: 360,
    height: 178,
    left: 0,
    bottom: 0,
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
    left: 10,
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
  menuIcon: {
    position: 'absolute',
    left: 15,
    top: -12,
    fontSize: 24,
    color: '#FFFFFF',
  },
  calorieNum: {
    position: 'absolute',
    left: 27,
    top: 41,
    fontSize: 24,
    fontWeight: 'bold',
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  calorieText: {
    position: 'absolute',
    left: 17,
    top: 69,
    fontSize: 16,
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  weightNum: {
    position: 'absolute',
    right: 16,
    top: 61,
    fontSize: 30,
    fontWeight: 'bold',
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  weightText: {
    position: 'absolute',
    right: 15,
    top: 33,
    fontSize: 18,
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  navTmp: {
    position: 'absolute',
    width: 360,
    height: 48,
    left: 0,
    bottom: 0,
    backgroundColor: '#000000',
  },
});