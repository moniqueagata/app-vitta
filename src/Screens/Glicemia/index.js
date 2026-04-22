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

    // Status e cores
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
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Pressable style={styles.buttonSaida} onPress={() => navigation.navigate('Home')}>
            <Image source={require('../../../assets/img/arrow.png')}
              style={{ width: 28, height: 28 }}
              resizeMode='contain'
              tintColor= '#00382A'
            />
          </Pressable>
          <Text style={styles.textHeader}>Glicemia</Text>
        </View>
        <View style={styles.session}>
          <View style={styles.card}>
            <View style={styles.row}>
            <Text style={styles.label}>Glicemia</Text>
              <TextInput
                style={styles.input}
                keyboardType='numeric'
                maxLength={3}
                placeholder='--'
                value={glicemia}
                onChangeText={setGlicemia}
              />
              <Text style={styles.desc}>mg/dL</Text>
            </View>
            <View style={styles.row}>
            <Text style={styles.label}>Obs</Text>
              <TextInput
                style={styles.input}
                value={observacao}
                onChangeText={setObservacao}
                placeholder='Em jejum'
              />
            </View>
          </View>

          <Pressable style={styles.button} onPress={adicionarRegistro}>
            <Text style={styles.textButton}>Adicionar</Text>
          </Pressable>

          <Text style={styles.titulo}>Histórico</Text>

            {historico.map((item) =>(
              <View style={styles.cardHistorico}>
                <View style={styles.headerCard}>
                  <Text style={styles.textData}>{item.data}</Text>
                  <View style={[styles.tag, { backgroundColor: item.cor }]}>
                    <Text style={styles.textTipo}>{item.tipo}</Text>
                  </View>
                </View>
                <View style={styles.bodyCard}>
                  <Text style={styles.textValor}>{item.valor}</Text>
                  <Text style={styles.textSmall}>mg/dL</Text>
                  <Text style={styles.textObs}>{item.obs}</Text>
                </View>
              </View>
            ))}
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
