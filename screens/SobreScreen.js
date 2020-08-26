import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { color } from 'react-native-reanimated';
import { TouchableRipple } from 'react-native-paper';

export default class SobreScreen extends React.Component{
    render(){
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.container}>
                <View style={{margin:5, justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width: 190, height: 190}} source={require('../assets/LogomarcaFundoPretoRedonda.png')}></Image>
                </View>

                <View style={{alignItems : 'center'}}>
                    <Text style={{fontSize: 40, textAlign:'center', justifyContent: 'center', fontWeight: 'normal',  alignItems: 'center'}}>Nossa História</Text>
                    <Text style={{fontSize: 18, textAlign:'justify', marginTop: 10, marginHorizontal: 20, justifyContent: 'center', fontWeight: 'normal',  color: '#000000', alignItems: 'center'}}>Em meados de 2013 foi fundada nossa gráfica online Magatti Santiago Artes Gráficas.
                        No começo trabalhávamos para complemento de nossa renda sem muito foco. Nossa divulgação deu início em vendas somente pelo Facebook através dos grupos.
                        Depois de algumas experiências, aprendemos muito sobre o comportamento das pessoas nas redes sociais, como a aparência e o conteúdo nos perfis e páginas influenciam muito na transformação de uma empresa.
                        Hoje a Magatti Santiago desenvolve artes que conseguem interagir com o público dos nossos clientes nas redes sociais, se tornando um ótimo canal de vendas.
                    </Text>
                </View>
            </View>

            <View style={styles.container}>
                <View style={{margin:5, justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width: 190, height: 190}} source={require('../assets/jaci.png')}></Image>
                </View>

                <View style={{alignItems : 'center'}}>
                    <Text style={{fontSize: 25, textAlign:'center', marginTop: 20, justifyContent: 'center', fontWeight: 'normal',  alignItems: 'center'}}>Jaciara Magatti Santiago</Text>
                    <Text style={{fontSize: 18, textAlign:'justify', marginTop: 10, marginHorizontal: 20, justifyContent: 'center', fontWeight: 'bold',  color: '#000000', alignItems: 'center'}}>
                        Designer Gráfico e Empreendedora Digital
                    </Text>
                </View>
            </View>
            <View style={styles.container}>
            <TouchableRipple onPress={() => {
                this.props.navigation.navigate('Desenvolvimento')
                                  }} style={{backgroundColor: '#e200bc', justifyContent: 'center', borderRadius: 5, width: 300, marginLeft: 40, marginRight: 40 , height: 60}}>
                                <Text style={{fontSize: 20, textAlign:'center', justifyContent: 'center', fontWeight: 'bold',  color: '#FFFFFF', alignItems: 'center'}}>Sobre o Desenvolvimento</Text>
                            </TouchableRipple>  
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