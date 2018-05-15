import React, { Component } from 'react'
import { AsyncStorage, Text, View, TextInput, StyleSheet, Button } from 'react-native'
import { Container, Content, Header, Body, Title } from 'native-base';
import { Font, AppLoading } from "expo";
import Expo from "expo";


export default class AddNote extends Component {

    state = {
        'Content': '',
        'loading': true,
        'Heading': '',
    }

    async componentWillMount() {
        await Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        });
        this.setState({ loading: false });
    }

    setContent = (value) => {
        this.setState({ 'Content': value });
    }
    setHeading = (value) => {
        this.setState({ 'Heading': value });
    }

    render() {
        if (this.state.loading) {
            return <Expo.AppLoading />
        }
        return (

            <Container>
                <Content>
                    <Header>
                        <Body>
                            <Title>New Note</Title>
                        </Body>
                    </Header>
                    <View style={styles.container}>
                        <TextInput style={styles.textHeading} autoCapitalize='none'
                            onChangeText={this.setHeading} defaultValue='Enter your Note heading here ' />

                        <TextInput style={styles.textContent} autoCapitalize='none'
                            onChangeText={this.setContent} defaultValue='Enter your Note content here ' />

                        <Button 
                            onPress={saveData(this.state.Heading,this.state.Content)}
                            title='SAVE'
                            color='#32cd32'
                        />
                    </View>
                </Content>
            </Container>
        );
    }

}
saveData = (key, value) => {
    if(key !== '' && value !== ''){
    AsyncStorage.setItem(key, value);
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 10,
    },
    textHeading: {
        margin: 5,
        height: 50,
        width: 350,
        backgroundColor: '#ffffff'
    },
    textContent: {
        margin: 5,
        height: 350,
        width: 350,
        // borderWidth: 20,
        backgroundColor: '#ffffff'
    }
})