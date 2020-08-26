import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Linking, Alert } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import { TouchableRipple } from 'react-native-paper';



export default class ProdutosScreen extends React.Component{  
    render(){
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>

            <View style={{flex: 1, justifyContent: 'center', paddingTop: 30}}>

                <View style={{margin:5, justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width: 110, height: 110}} source={require('../assets/produto.png')}></Image>
                </View>

                <View style={{alignItems : 'center'}}>
                    <Text style={{fontSize: 30, textAlign:'center', justifyContent: 'center', fontWeight: 'bold',  color: '#000000', alignItems: 'center'}}>Nossos Produtos</Text>
                    <Text style={{fontSize: 20, textAlign:'center', justifyContent: 'center', fontWeight: 'normal',  color: '#000000', alignItems: 'center'}}>Veja um pouco do nosso Trabalho já em mercado.</Text>
                </View>

                
                <View style={{flex: 1, justifyContent: 'center', paddingVertical: 0}}>
                    <SliderBox sliderBoxHeight={200}
                               style={{height: 500, width: '100%', resizeMode: 'center'}}
                               images={images}
                               dotColor="#e200bc"
                               onPress="#90A4AE"
                               inactiveDotColor="#90A4AE"
                               paginationBoxVerticalPadding={10}
                               autoplay
                               resizeMethod={'resize'}
                               resizeMode={'center'}
                               //onCurrentImagePressed={index => Alert.alert(`image ${index} pressed`) }
                               circleLoop
                               ImageComponentStyle={{borderRadius: 15, width: 300, height: 300, resizeMode: 'stretch', marginTop: 0}} />
                </View>
            </View>

            <View style={{flex: 1, justifyContent: 'center', paddingVertical: 20}}>
                <View style={{margin:5, justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width: 110, height: 110}} source={require('../assets/presentation.png')}></Image>
                </View>        
                <Text style={{fontSize: 20, textAlign:'center', justifyContent: 'center', fontWeight: 'normal',  color: '#000000', alignItems: 'center'}}>Nos envie sua proposta agora mesmo! </Text>
            </View>

            <View style={{ flexDirection: 'row', marginBottom: 40, marginTop: 0 , justifyContent: 'center', alignItems: 'center'}}>
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
            </ScrollView>
        );
    }
}


const images = [
    require('../assets/imagen1.png'),
    require('../assets/imagen2.png'),   
    require('../assets/imagen3.png'),   
    require('../assets/imagen4.png'),   
    require('../assets/imagen5.png'),   
    require('../assets/imagen6.png'),   
    require('../assets/imagen7.png'),   
    require('../assets/imagen8.png'),   
    require('../assets/imagen9.png'),             
  ]

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 0
      }
  });