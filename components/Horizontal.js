import React, { Component } from 'react';
import {  
    View, Text, StyleSheet, 
    ScrollView, Dimensions 
} from 'react-native';

export default class Horizontal extends Component {
  render() {
    return (
    <ScrollView 
        horizontal={true} 
        paddingEnabled={true}
        style={styles.containerScrollView
    }>
        <View style={styles.outer}>
            <Text style={styles.containerFont}>Getting Started</Text>
            <Text style={styles.containerFontOne}>
                Create React Native App is the easiest way to start building a new React Native application. 
                It allows you to start a project without installing or configuring any tools to build native code 
                - no Xcode or Android Studio installation required 
            </Text>
            <Text style={styles.containerFont}>to continue can scroll to the right</Text>
        </View> 
        <View style={[styles.outer, styles.red]}>
            <Text style={styles.containerFont}>Hello World</Text>
            <Text style={styles.containerFontOne}>
                Hello React, Install the Expo client app on your iOS or Android phone 
                and connect to the same wireless network as your computer. 
                On Android, use the Expo app to scan the QR code from your terminal to open your project.
                 On iOS, follow on-screen instructions to get a link.
                </Text>
            <Text style={styles.containerFont}>to continue can scroll to the right</Text>
        </View>     
        <View style={[styles.outer, styles.green]}>
            <Text style={styles.containerFont}>Enjoy React NAtive</Text>
            <Text style={styles.containerFontOne}>Hello React</Text>
            <Text style={styles.containerFont}>Creat App now</Text>
        </View>                  
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    containerScrollView: {
     
    },
    outer: {
        backgroundColor: '#007bb6',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    containerFont: {
        fontSize: 20,
        color : '#fff',
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    containerFontOne: {
        fontSize: 12,
        color : '#fff',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    red: {
        backgroundColor: '#dd4b39',
    },
    green: {
        backgroundColor: '#27ae60',
    },
  });
