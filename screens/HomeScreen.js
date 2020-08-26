import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Linking, FlatList, SafeAreaView  } from 'react-native';
import { TouchableRipple } from 'react-native-paper';

export default class HomeScreen extends React.Component{
    render(){
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#000000', paddingVertical: 80}}>

                    <View style={{margin:5, justifyContent: 'center', alignItems: 'center'}}>
                        <Image style={{width: 190, height: 190}} source={require('../assets/perfil.png')}></Image>
                    </View>

                    <View style={{alignItems : 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 40, textAlign:'center', justifyContent: 'center', fontWeight: 'bold',  color: '#ffffff', alignItems: 'center'}}>VOCÊ ESTÁ CONSEGUINDO VENDER COM SUAS REDES SOCIAIS?</Text>
                        <Text style={{fontSize: 20, textAlign:'center', marginTop: 20, justifyContent: 'center', fontWeight: 'normal',  color: '#ffffff', alignItems: 'center'}}>ARTES PARA REDES SOCIAIS QUE SE COMUNICAM COM SEU PÚBLICO</Text>
                    </View>

                </View>
                <View  style={{flex: 1, justifyContent: 'center', paddingVertical: 60, alignItems: 'center'}}>
                    <View style={{marginBottom: 40, justifyContent: 'center', alignItems: 'center'}}>
                        <Image style={{width: 150, height: 150}} source={require('../assets/client.png')}></Image>
                    </View>
                    <Text style={{fontSize: 20, textAlign:'center', justifyContent: 'center', fontWeight: 'normal',  color: '#000000', alignItems: 'center'}}>Conquiste clientes que precisam do seu produto ou serviço através das redes sociais com artes exclusivas e focadas em chamar a atenção do público certo.</Text>
                    <View style={{ flexDirection: 'row', marginBottom: 40, marginTop: 20 , justifyContent: 'center', alignItems: 'center'}}>

                            <TouchableRipple onPress={() => {
                              Linking.canOpenURL("whatsapp://send?text=oi").then(supported => {
                                if (supported) {
                                  return Linking.openURL(
                                    "whatsapp://send?phone=5511949919420&text=Tenho interece no seus serviços"
                                    );
                                  } else {
                                    return Linking.openURL(
                                      "https://api.whatsapp.com/send?phone=5511949919420&text=Tenho interece no seus serviços"
                                      );
                                    }})
                                    
                                  }} style={{backgroundColor: '#e200bc', justifyContent: 'center', borderRadius: 5, width: 300, marginLeft: 40, marginRight: 40 , height: 60}}>
                                <Text style={{fontSize: 20, textAlign:'center', justifyContent: 'center', fontWeight: 'bold',  color: '#FFFFFF', alignItems: 'center'}}>COMECE AGORA !</Text>
                            </TouchableRipple>     
                    </View>
                </View>
                
                {/* Barra de divisoria Rosa */}
                <View style={{flex: 1, justifyContent: 'center', alignContent: 'center', alignSelf: 'center',  backgroundColor: '#e200bc',  width: '100%', height: 5}}></View>

                <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#ffffff', paddingVertical: 40}}>

                    <Text style={{fontSize: 40, textAlign:'center', justifyContent: 'center', fontWeight: 'bold',  color: '#000000', alignItems: 'center'}}>VOCÊ USA AS REDES SOCIAIS DA FORMA CERTA?​​​​​​​</Text>


                    <View style={{marginBottom: 40, justifyContent: 'center', alignItems: 'center'}}>
                            <Image style={{width: 200, height: 350}} source={require('../assets/pensando.png')}></Image>
                    </View>

                    <Text style={{fontSize: 18, textAlign:'center', justifyContent: 'center', fontWeight: 'bold',  color: '#000000', alignItems: 'center'}}> Com artes profissionais para representar sua marca nas redes sociais:​​​​​​​</Text>

                    <SafeAreaView style={styles.container}>
                        <FlatList
                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            />
                    </SafeAreaView>

                    <Text style={{fontSize: 18, textAlign:'center', marginTop: 50, justifyContent: 'center', fontWeight: 'normal',  color: '#000000', alignItems: 'center'}}>E usando da forma certa, você ganha mais autonomia passando a ter mais respeito profissional do seu público.​​​​​​​</Text>

                </View>


                <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#000000', paddingVertical: 40}}>
                    <Text style={{fontSize: 15, textAlign:'center', justifyContent: 'center', fontWeight: 'normal',  color: '#ffffff', alignItems: 'center'}}>Conheça Nosso Site Acesse:​​​​​​​</Text>
                    
                    <View style={{marginBottom: 20, marginTop: 20, justifyContent: 'center', alignItems: 'center'}}>
                            <Image style={{width: 150, height: 150}} source={require('../assets/search.png')}></Image>
                    </View>
                    <Text style={{fontSize: 15, textAlign:'center', justifyContent: 'center', fontWeight: 'bold',  color: '#ffffff', alignItems: 'center'}}>https://digitalmagattisantiago.builderall.net/magattisantiago​​​​​​​</Text>
                    
                    <TouchableRipple onPress={() => {
                      Linking.canOpenURL("https://digitalmagattisantiago.builderall.net/magattisantiago").then(supported => {
                        return Linking.openURL(
                          "https://digitalmagattisantiago.builderall.net/magattisantiago"
                          )});
                          
                        }} style={{backgroundColor: '#e200bc', justifyContent: 'center', marginTop: 25, borderRadius: 5, width: 300, marginLeft: 40, marginRight: 40 , height: 60}}>
                                <Text style={{fontSize: 15, textAlign:'center', justifyContent: 'center',  fontWeight: 'bold',  color: '#ffffff', alignItems: 'center'}}>Site Magatti Santiago</Text>
                    </TouchableRipple>
                </View>

              {/* Barra de Redes Sociais */}
                <Text style={{fontSize: 20, textAlign:'center', marginTop: 30, marginHorizontal: 20, justifyContent: 'center', fontWeight: 'normal',  color: '#000000', alignItems: 'center'}}>
                        SIGA NOSSAS REDES SOCIAIS E CONHEÇA MAIS SOBRE NOSSO TRABALHO
                </Text>
                <View style={{flex: 1, justifyContent: 'center', flexDirection:'row', marginBottom: 50}} >
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
                      Linking.canOpenURL("https://www.facebook.com/magattisantiagoartesgraficas/").then(supported => {
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




                {/* Barra de divisoria Rosa */}
                <View style={{flex: 1, justifyContent: 'center', alignContent: 'center', alignSelf: 'center',  backgroundColor: '#e200bc',  width: '100%', height: 5}}></View>

                
                {/* Roda pé da Home */}
                <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#000000', paddingVertical: 40}}>
                    <View style={{marginBottom: 40, justifyContent: 'center', alignItems: 'center'}}>
                            <Image style={{width: 450, height: 120}} source={require('../assets/LogotipoRetangular.png')}></Image>
                    </View>
                    <Text style={{fontSize: 15, textAlign:'center', justifyContent: 'center', fontWeight: 'normal',  color: '#ffffff', alignItems: 'center'}}>Magatti Santiago Artes Gráficas - Desde 2013​​​​​​​</Text>
                    <Text style={{fontSize: 14, textAlign:'center', justifyContent: 'center', fontWeight: 'normal',  color: '#ffffff', alignItems: 'center'}}>2020 © Todos os Direitos Reservados​​​​​​​</Text>
                </View>
            </ScrollView>
                        
        );
    }
}

const DATA = [
    {
      id: '1',
      title: 'Você apresenta ser mais profissional e não um amador.',
    },
    {
      id: '2',
      title: 'Transmite mais confiança em quem visitar sua página',
    },
    {
      id: '3',
      title: 'Consegue mais interação do seu público e atração de novas pessoas para sua página',
    },
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Image style={{width: 50, height: 50}} source={require('../assets/check.png')}></Image>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );







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