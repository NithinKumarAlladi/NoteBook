import React, { Component } from 'react'
import { AsyncStorage, Text, View, TextInput, StyleSheet } from 'react-native'
import { Container, Content, Header, Body, Title } from 'native-base';

export default class AddNote extends Component {

    state = {
        'name': ''
    }

    setName = (value) => {
        AsyncStorage.setItem('name', value);
        this.setState({ 'name': value });
    }

    render() {
        return (

            <Container>
                <Content>
                    <Header>
                        <Body>
                            <Title>Add your note here</Title>
                        </Body>
                    </Header>
                    <View style={styles.container}>
                        <TextInput style={styles.textInput} autoCapitalize='none'
                            onChangeText={this.setName} />
                        <Text>
                            {this.state.name}
                        </Text>
                    </View>
                </Content>
            </Container>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50
    },
    textInput: {
        margin: 15,
        height: 35,
        borderWidth: 1,
        backgroundColor: '#7685ed'
    }
})