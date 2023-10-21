import { Text, SafeAreaView, StyleSheet,View,FlatList,Image } from 'react-native';

import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";




export default function Granadas() {
  const data = [
    {
      image: require('../assets/M67.jpg'),
      name: 'Granada de Mão M67',
      description:
        ' Quando a alavanca de segurança é removida e a alavanca de liberação é lançada, a granada explode após cerca de 4 segundos. Libera fragmentos metálicos em todas as direções.',
      id: 1,
    },
    {
      image: require('../assets/granada_GL-120-CS.jpg'),
      name: 'Granada de Gás CS',
      description:
        'Libera gás CS, um agente lacrimogêneo irritante, causando irritação nos olhos, nariz e garganta.',
      id: 2,
    },
    {
      image: require('../assets/impacto.jpg'),
      name: 'Granada de impacto.',
      description:
        ' : Não explode; em vez disso, causa danos por impacto quando atinge o alvo, geralmente liberando fragmentos de metal.',
      id: 3,
    },
  ];
  const render = ({ item }) => {
    return (
      <View style={styles.weaponview}>
      <Text style={{color:"red",margin:30,}}>{item.name}</Text>
      <Image style={{height:100,width:100,margin:10}} source={item.image} />
        <Text>{item.description}</Text>
      </View>
    );
  };




  return (
      <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Granadas</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={render}></FlatList>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
  },
  weaponview: {
    backgroundColor: 'white',
    marginTop: 30,
    height: 300,
    margin: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});