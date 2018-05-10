import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Icon } from 'native-base';

export default class App extends React.Component {
  render() {

    var noteArray = ['first note', 'second note', 'third note'];
    return (
      <Container>
        <Header />
        <Content>
          <List dataArray={noteArray}
            renderRow={(noteArray) =>
              <ListItem icon>
                <Left>
                  <Text>{noteArray}</Text>
                </Left>
                <Right>
                  <Icon name="ios-trash" />
                </Right>
              </ListItem>
            }>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
