import {
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Image,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Fuzis() {
  const data = [
    {
      image: require('../assets/ak47.jpg'),
      name: 'ak 47',
      description:
        ' Este fuzil é conhecido por sua confiabilidade em condições adversas e simplicidade de design. Ele foi amplamente usado durante a Guerra Fria e continua a ser popular em todo o mundo.',
      id: 1,
    },
    {
      image: require('../assets/m16.jpeg'),
      name: 'M16',
      description:
        'O M16 é o fuzil padrão das Forças Armadas dos Estados Unidos. É conhecido por sua precisão e versatilidade, e tem várias variantes em serviço.',
      id: 2,
    },
    {
      image: require('../assets/famas.jpg'),
      name: 'Famas',
      description:
        '   Este fuzil bullpup é o padrão das Forças Armadas Francesas. Possui um design compacto, onde o carregador fica atrás do gatilho, economizando espaço.',
      id: 3,
    },
  ];
  const render = ({ item }) => {
    return (
      <View style={styles.weaponview}>
      <Text style={{color:"red"}}>{item.name}</Text>
        <Image style={{ height: 120, width: 120 }} source={item.image} />
        <Text>{item.description}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Fuzis</Text>
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
