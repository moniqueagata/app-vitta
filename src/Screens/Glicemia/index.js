import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View, Image, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import styles from './styles';

export default function Glicemia() {
  const navigation = useNavigation ();

  const [glicemia, setGlicemia] = useState('');
  const [observacao, setObservacao] = useState('');
  const [historico, setHistorico] = useState([]);

  const adicionarRegistro = () => {
    if (!glicemia.trim()) return;

    const valor = parseInt(glicemia);

    // Status 
    const status = valor >= 126 ? 'Diabetes' : valor >= 100 ? 'Pré-Diabete' : 'Normal';
    const corStatus = valor >= 126 ? '#eb2e2e' : valor >= 100 ? '#e76800' : '#1cc206';

    const novoRegistro = {
      id: Math.random().toString(),
      valor: valor,
      obs: observacao || 'Em jejum',
      data: new Date().toLocaleDateString('pt-BR'),
      tipo: status,
      cor: corStatus
    };

    setHistorico([novoRegistro, ...historico]);
    setGlicemia('');
    setObservacao('');
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.buttonHeader} onPress={() => navigation.navigate('Home')}>
          <Image source={require('../../../assets/img/arrow.png')}
            style={{ width: 28, height: 28 }}
            resizeMode='contain'
            tintColor= '#00382A'
          />
        </Pressable>
        <Text style={styles.textHeader}>Glicemia</Text>
      </View>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.session}>
            <Text style={styles.titulo}>Sua glicemia atual</Text>
            <View style={styles.row}>
              <Text style={styles.glicemia}>108</Text>
              <Text style={styles.desc}>mg/dl</Text>
            </View>

            <View>
              <Text>Tipo</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
