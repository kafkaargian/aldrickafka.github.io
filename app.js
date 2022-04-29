import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon,Form, Item, Input, Label,Textarea,Left,Body,Title,Right, Row  } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './src/scren/Navbar';
import FooterTabs from './src/scren/Footer';
import Login from './src/scren/Login';


export default class App extends Component {
    render() {
        return (
        <Container>
            <Navbar/>
            <Login/>
            <FooterTabs/>
        </Container>
            
        );
    }
}

    const styles = StyleSheet.create({
    headermenu: {
        
        marginTop: 20,
        color:'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    });