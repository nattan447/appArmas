import { Text, SafeAreaView, StyleSheet, FlatList,View,Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Dozes() {
  const data = [
    {
      image: require('../assets/esperguingabomba.jpg'),
      name: 'Espingarda de Bomba (Pump-Action Shotgun)',
      description:
        ' Essas espingardas são operadas manualmente, onde o atirador move uma alavanca para ejetar o cartucho vazio e carregar um novo cartucho na câmara. Elas são conhecidas por sua confiabilidade e são frequentemente usadas para caça e tiro esportivo.',
      id: 1,
    },
    {
      image: require('../assets/espingardasemiauto.png'),
      name: 'Espingarda Semiautomática (Semi-Automatic Shotgun)',
      description:
        'As espingardas semiautomáticas são projetadas para disparar um cartucho a cada puxada do gatilho. Elas são populares entre caçadores e atiradores esportivos devido à sua taxa de tiro mais rápida em comparação com as espingardas de bomba.',
      id: 2,
    },
    {
      image: require('../assets/espingardacanoduplo.jpg'),
      name: 'Espingarda de Cano Duplo (Double-Barrel Shotgun):',
      description:
        '  Como o nome sugere, essas espingardas têm dois canos e geralmente estão disponíveis em duas configurações: over-under (sobrepostos) ou side-by-side (paralelos). Elas são amplamente usadas na caça e têm uma aparência clássica e elegante.',
      id: 3,
    },
  ];
  const render = ({ item }) => {
    return (
      <View style={styles.weaponview}>
      <Text style={{color:"red"}}>{item.name}</Text>
      <Image style={{height:100,width:100}} source={item.image} />
        <Text>{item.description}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Espingardas</Text>
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
    color:"red"
  },
  weaponview:{
  backgroundColor:"white",
  marginTop:30,
  height:300,
  margin:20,borderRadius:10,
  justifyContent:"center",
  alignItems:"center"
  }
});
