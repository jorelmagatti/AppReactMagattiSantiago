import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Linking } from 'react-native';
import { TouchableRipple } from 'react-native-paper';

export default class RedesScreen extends React.Component{
    render(){
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={{flex: 1, justifyContent: 'center'}}>

                <View style={{marginTop: 50, marginBottom: 50, justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width: 170, height: 170}} source={require('../assets/user.png')}></Image>
                </View>

                <View style={{alignItems : 'center', marginBottom: 30, marginTop: 10}}>
                    <Text style={{fontSize: 30, textAlign:'center', marginHorizontal: 20, justifyContent: 'center', fontWeight: 'bold',  color: '#000000', alignItems: 'center'}}>
                        É FACIL FAZER CONTATO EM NOSSAS 
                        ​​​​​​​REDES SOCIAIS
                    </Text>

                    <Text style={{fontSize: 20, textAlign:'center', marginTop: 10, marginHorizontal: 20, justifyContent: 'center', fontWeight: 'normal',  color: '#000000', alignItems: 'center'}}>
                        SIGA NOSSAS REDES SOCIAIS E CONHEÇA MAIS SOBRE NOSSO TRABALHO
                    </Text>
                </View>




              {/* Barra de Redes Sociais */}
                <View style={{flex: 1, justifyContent: 'center', flexDirection:'row'}} >
                    <TouchableRipple onPress={() => {
                      Linking.canOpenURL("https://digitalmagattisantiago.builderall.net/magattisantiago").then(supported => {
                        if (supported) {
                            return Linking.openURL(
                              "whatsapp://send?phone=5511949919420&text=Tenho interece no seus serviços"
                              );
                            } else {
                              return Linking.openURL(
                                "https://api.whatsapp.com/send?phone=5511949919420&text=Tenho interece no seus serviços"
                                );
                              }})
                          
                        }} style={{backgroundColor: '#e6e6e6', justifyContent: 'center', marginTop: 25, borderRadius: 10, marginLeft: 10, marginRight: 10, padding: 20}}>
                    
                        <Image style={{width: 60, height: 60}} source={require('../assets/whatsapp.png')}></Image>
                    </TouchableRipple>



                    <TouchableRipple onPress={() => {
                      Linking.canOpenURL("fb://page/532328090280319").then(supported => {
                        if (supported) {
                            return Linking.openURL("fb://page/532328090280319");
                          } else {
                            return Linking.openURL("https://www.facebook.com/magattisantiagoartesgraficas");
                          }
                        });
                          
                        }} style={{backgroundColor: '#e6e6e6', justifyContent: 'center', marginTop: 25, borderRadius: 10, marginLeft: 10, marginRight: 10, padding: 20}}>
                    
                        <Image style={{width: 60, height: 60}} source={require('../assets/facebook.png')}></Image>
                    </TouchableRipple>



                    <TouchableRipple onPress={() => {
                      Linking.canOpenURL("https://www.instagram.com/magattisantiagoartesgraficas/?hl=pt").then(supported => {
                        return Linking.openURL(
                            "https://www.instagram.com/magattisantiagoartesgraficas/?hl=pt"
                            )});
                          
                        }} style={{backgroundColor: '#e6e6e6', justifyContent: 'center', marginTop: 25, borderRadius: 10, marginLeft: 10, marginRight: 10, padding: 20}}>
                    
                        <Image style={{width: 60, height: 60}} source={require('../assets/insta.png')}></Image>
                    </TouchableRipple>
                </View>





                {/* Barra chamada do email padrão */}
                <View style={{alignItems : 'center', marginTop: 40, marginBottom: 40}}>
                    <Text style={{fontSize: 20, textAlign:'center', marginHorizontal: 20, justifyContent: 'center', fontWeight: 'bold',  color: '#000000', alignItems: 'center'}}>
                        Nos envie um e-mail com sua proposta
                    </Text>

                    <TouchableRipple onPress={() => {
                      Linking.canOpenURL("mailto:atendimento.magattisantiago@gmail.com").then(supported => {
                        return Linking.openURL(
                            "mailto:atendimento.magattisantiago@gmail.com"
                            )});
                          
                        }} style={{backgroundColor: '#e6e6e6', justifyContent: 'center', marginTop: 25, borderRadius: 10, marginLeft: 10, marginRight: 10, padding: 15}}>
                    
                        <Image style={{width: 80, height: 80, resizeMode: 'stretch'}} source={require('../assets/gmail.png')}></Image>
                    </TouchableRipple>
                </View>


                {/* Barra chamada da ligação padrão e roda pé */}
                <View style={{marginTop: 30, paddingTop: 30, paddingBottom: 30, justifyContent: 'center', alignItems: 'center',  backgroundColor: '#000000'}}>
                    
                    <View style={{flex: 1, justifyContent: 'center', flexDirection:'row', alignItems: 'center', paddingHorizontal: 60, paddingVertical: 20}}>
                        <TouchableRipple onPress={() => {
                        Linking.canOpenURL("tel:${5511949919420}").then(supported => {
                            return Linking.openURL(
                                "tel:${5511949919420}"
                                )});
                            
                            }} style={{backgroundColor: '#f2f2f2', justifyContent: 'center', borderRadius: 10, padding: 10, marginLeft: 50}}>
                        
                            <Image style={{width: 30, height: 30,  resizeMode: 'stretch'}} source={require('../assets/call.png')}></Image>
                        </TouchableRipple>

                        <Text style={{fontSize: 20, textAlign:'center', justifyContent: 'center', fontWeight: 'normal',  color: '#FFFFFF', alignItems: 'center'}}>
                            Entre em contato no nosso número oficial
                        </Text>
                    </View>


                    <Image style={{resizeMode: 'center', marginTop: 10, paddingHorizontal: 5, width: '95%', height: 200 }} source={require('../assets/redessociais.png')}></Image>
                </View>

            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    contentContainer: {
      paddingVertical: 0
    },
    container: {
        flex: 1
      },
      item: {
        backgroundColor: '#f2f2f2',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 5,
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        textAlign: 'center'
      },
      title: {
        fontSize: 22,
        textAlign: 'center'
      }
  });