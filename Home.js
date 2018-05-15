import React from 'react';
import { StyleSheet, Text, TextInput, View, AsyncStorage } from 'react-native';
import { Container, Header, Title, Content, List, Button, ListItem, Left, Body, Right, Icon } from 'native-base';
import AddNote from './AddNote.js';
import { Font, AppLoading } from "expo";
import Expo from "expo";


export default class Home extends React.Component {
    state = {
        'Heading': '',
        'loading': true,
    }
    async componentWillMount() {
        await Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        });
        this.setState({ loading: false });
    }

    componentDidMount = () => AsyncStorage.getItem('name').then((value) => this.setState({ 'Heading': value }))

    setName = (value) => {
        AsyncStorage.setItem('Heading', value);
        this.setState({ 'Heading': value });
    }

    render() {
        if (this.state.loading) {
            return <Expo.AppLoading />;
        }

        const { navigate } = this.props.navigation;
        var noteArray = ['first note', 'second note', 'third note'];

        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Note Book</Title>
                    </Body>
                    <Right>
                        <Button transparent >
                            <Icon name='ios-add' onPress={() => navigate('AddNote')} />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <List dataArray={noteArray}
                        renderRow={(noteArray) =>
                            <ListItem icon>
                                <Left>
                                    <Text>{noteArray}</Text>
                                </Left>
                                <Right>
                                    <Button transparent>
                                        <Icon name='ios-trash' />
                                    </Button>
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
        marginTop: 50
    },
    textInput: {
        margin: 15,
        height: 35,
        borderWidth: 1,
        backgroundColor: '#7685ed'
    }
});
