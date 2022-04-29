import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon,Form, Item, Input, Label,Textarea,Left,Body,Title,Right, Row, Tabs, Tab  } from 'native-base';


export default class Navbar extends Component {
    render() {
        return (
        
            <Header noShadow>
            <Left>
                <Button transparent>
                <Icon name="arrow-back" />
                </Button>
            </Left>
            <Body>
                <Title style={{marginLeft:40}}>Babastudio</Title>
            </Body>
            <Right>
                <Button transparent>
                <Icon name="menu" />
                </Button>
            </Right>
            </Header>
        
        
        );
    }
    }