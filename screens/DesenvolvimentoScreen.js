import React from 'react';
import { View, Text, Image, Linking, StyleSheet, ScrollView } from 'react-native';
import { color } from 'react-native-reanimated';
import { TouchableRipple } from 'react-native-paper';

export default class DesenvolvimentoScreen extends React.Component{
    render(){
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.container}>
                <View style={{margin:5, justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width: 190, height: 190}} source={require('../assets/dev.png')}></Image>
                </View>

                <View style={{alignItems : 'center'}}>
                    <Text style={{fontSize: 40, textAlign:'center', justifyContent: 'center', fontWeight: 'normal',  alignItems: 'center'}}>Sobre o Desenvolvimento</Text>
                    <Text style={{fontSize: 18, textAlign:'justify', marginTop: 10, marginHorizontal: 20, justifyContent: 'center', fontWeight: 'normal',  color: '#000000', alignItems: 'center'}}>
                        Olá, me chamo Jorel Magatti, sou Desenvolvedor formado em Analise e Desenvolvimento de Sistemas, atualmente minhas Skills são C# .Net (Windows Forms para Desktop, Asp Net Core para Web ou Rest API e React Native para Mobile). Sou apaixonado por tecnologias e novos desafios. 
                    </Text>

                    <View style={{marginTop:25, justifyContent: 'center', alignItems: 'center'}}>

                        <Image style={{width: 60, height: 60}} source={require('../assets/github.png')}></Image>
                        <TouchableRipple onPress={() => {
                            Linking.canOpenURL("https://github.com/jorelmagatti").then(supported => {
                                return Linking.openURL(
                                    "https://github.com/jorelmagatti"
                                    )});
                                    
                                }}>
                                <Text style={{fontSize: 18, textAlign:'justify', marginTop: 10, marginHorizontal: 20, justifyContent: 'center', fontWeight: 'bold',  color: '#000000', alignItems: 'center'}}>
                                    https://github.com/jorelmagatti
                                </Text>
                                
                    </TouchableRipple>


                    </View>

                </View>
            </View>

            <View style={{alignItems : 'center', backgroundColor: '#ffffff'}}>
                    <Text style={{fontSize: 25, textAlign:'center', marginTop: 20, justifyContent: 'center', fontWeight: 'normal',  alignItems: 'center'}}>Tecnologias</Text>
                    <Text style={{fontSize: 15, textAlign:'center', marginTop: 10, marginHorizontal: 20, justifyContent: 'center', fontWeight: 'normal',  color: '#000000', alignItems: 'center'}}>
                        Tecnologias usadas no Desenvolvimento deste App.
                    </Text>
            </View>

            <View style={styles.container}>
                <View style={{flexDirection: 'row', margin:5, justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width: 180, marginHorizontal: 5, height: 69}} source={require('../assets/minireact.png')}></Image>
                    <Image style={{width: 180, marginHorizontal: 5, height: 69}} source={require('../assets/miniexpo.png')}></Image>
                </View>

            </View>


            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      justifyContent: 'center',
      paddingVertical: 40,
    }
  });