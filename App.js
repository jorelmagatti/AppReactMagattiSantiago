import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import {HomeScreen, ProdutosScreen, RedesScreen, SobreScreen} from './screens/index';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { createStackNavigator } from 'react-navigation-stack'
import DesenvolvimentoScreen from './screens/DesenvolvimentoScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { render } from 'react-dom';

class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render(){
    return (
      <View style={{flexDirection: 'row', backgroundColor: '#000000'}}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image style={{width: 25, height: 25, marginLeft: 20}} source={require('./assets/menu.png')}></Image>
        </TouchableOpacity>
      </View>
    )
  }
}

//rota de navegação Home
const HomeStackNavigator = createStackNavigator({
    Home : {
      screen: HomeScreen,
      navigationOptions: ({navigation}) => ({
        title: 'Bem vindo!',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} ></NavigationDrawerStructure>,
        headerStyle: {
          backgroundColor: '#000000',
        },
        headerTintColor: 'white',
      })
    }
});

//Hota de Navegação Produto
const ProdutoStackNavigator = createStackNavigator({
  Produto : {
    screen: ProdutosScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Tela de Produtos',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} ></NavigationDrawerStructure>,
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTintColor: 'white',
    })
  }
});

//Rota de navegação Redes
const RedesStackNavigator = createStackNavigator({
  Redes : {
    screen: RedesScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Nosso Contatos',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} ></NavigationDrawerStructure>,
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTintColor: 'white',
    })
  }
});

//Rota de navegação Sobre
const SobreStackNavigator = createStackNavigator({
  Sobre : {
    screen: SobreScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Sobre Magatti Santiago',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} ></NavigationDrawerStructure>,
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTintColor: 'white',
    })
  },
  Desenvolvimento: {
    screen: DesenvolvimentoScreen
  }
});

const CustomDrawerComponent = (props) => {
  return(
  <SafeAreaView style={{ flex: 1}} forceInset={{ top: 'always', horizontal: 'never' }}>
    <ScrollView>
      <View style={{ flex: 1, flexDirection: 'column', marginLeft: '30%', marginTop: 80, marginBottom: 60,  height: 100, width: 100 , justifyContent: 'center', alignItems: 'center'}}>
          <Image style={{width: 130, height: 130}} source={require('./assets/LogomarcaFundoPretoRedonda.png')}></Image>
          <Text style={{fontSize: 15, textAlign:'center', marginTop: 10, justifyContent: 'center', fontWeight: 'normal',  color: '#000000', alignItems: 'center'}}>Arte Grafica e Digital</Text>
      </View>
      <View>
        <DrawerItems {...props}></DrawerItems>
      </View>
    </ScrollView>
  </SafeAreaView>
  );
}

//configura e direciona os items do menu para cada pilha de navegação
const MyDrawerNavigator = createDrawerNavigator(
  {
    HomeMenu: {
     screen: HomeStackNavigator,
     navigationOptions :{
      drawerLabel : 'Home',
      drawerIcon: ({focused, tintColor}) => (
          <Image style={{width: 40, height: 40}} source={require('./assets/smart-home.png')}></Image>
      )
     }
    },
    HomeProdutos: {
      screen: ProdutoStackNavigator,
      navigationOptions :{
        drawerLabel : 'Produtos',
        drawerIcon: ({focused, tintColor}) => (
            <Image style={{width: 40, height: 40}} source={require('./assets/produto.png')}></Image>
        )
       }
    },
    HomeRedes: {
      screen: RedesStackNavigator,
      navigationOptions :{
        drawerLabel : 'Contato',
        drawerIcon: ({focused, tintColor}) => (
            <Image style={{width: 40, height: 40}} source={require('./assets/redes.png')}></Image>
        )
       }
    },
    HomeSobre: {
      screen: SobreStackNavigator,
      navigationOptions :{
        drawerLabel : 'Sobre',
        drawerIcon: ({focused, tintColor}) => (
            <Image style={{width: 40, height: 40}} source={require('./assets/sobre.png')}></Image>
        )
       }
    },
  },
  {
    initialRouteName: 'HomeMenu',
    contentComponent: CustomDrawerComponent,
  },
  {
    contentOptions: {
      activeTintColor: '#D52A58',
      labelStyle: {
        fontSize: 20
      }
    }
    
  }

);

export default createAppContainer(MyDrawerNavigator);

