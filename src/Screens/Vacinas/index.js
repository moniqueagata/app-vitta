import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import styles from './styles';

  const listaVacinas = {
    Bebê: [
      { titulo: 'Ao nascer', vacinas: ['BCG', 'Hepatite B'] },
      { titulo: '2 meses', vacinas: ['Pentavalente', 'Poliomielite (VIP)', 'Pneumocócica', 'Rotavírus'] },
      { titulo: '3 meses', vacinas: ['Meningocócica C'] },
      { titulo: '4 meses', vacinas: ['Pentavalente (2ª dose)', 'Poliomielite (2ª dose)', 'Pneumocócica (2ª dose)', 'Rotavírus (2ª dose)'] },
      { titulo: '5 meses', vacinas: ['Meningocócica C (2ª dose)'] },
      { titulo: '6 meses', vacinas: ['Pentavalente (3ª dose)', 'Poliomielite (3ª dose)'] },
      { titulo: '9 meses', vacinas: ['Febre amarela'] },
      { titulo: '12 meses', vacinas: ['Tríplice viral', 'Pneumocócica (reforço)', 'Meningocócica (reforço)'] },
    ],

    Criança: [
      { titulo: '15 meses', vacinas: ['DTP (reforço)', 'Poliomielite (reforço)', 'Hepatite A', 'Tetra viral'] },
      { titulo: '4 anos', vacinas: ['DTP (reforço)', 'Poliomielite (reforço)', 'Varicela (reforço)'] },
      { titulo: '5 anos ou mais', vacinas: ['dT (difteria e tétano)'] },
    ],

    Adolescente: [
      { titulo: '10 a 14 anos', vacinas: ['HPV', 'Meningocócica ACWY'] },
      { titulo: '15 a 19 anos', vacinas: ['Hepatite B', 'dT (reforço)', 'Febre amarela', 'Tríplice viral'] },
    ],

    Adulto: [
      { titulo: '20 a 59 anos', vacinas: ['Hepatite B', 'dT (reforço a cada 10 anos)', 'Febre amarela', 'Tríplice viral'] }
    ],

    Idoso: [
      { titulo: '60+ anos', vacinas: ['Influenza (anual)', 'Covid-19', 'Pneumocócica', 'dT', 'Hepatite B'] },
    ],

    Gestante: [
      { titulo: 'Durante a gestação', vacinas: ['dTpa', 'Hepatite B', 'Influenza', 'Covid-19'] },
    ]
  };

export default function Vacinas() {
  const navigation = useNavigation();

  const categoria = ['Bebê', 'Criança', 'Adolescente', 'Adulto', 'Idoso', 'Gestante'];
  const [categoriaAtiva, setCategoriaAtiva] = useState('Bebê');


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
        <Text style={styles.textHeader}>Vacinas</Text>
      </View>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
      <View style={styles.sessionFiltro}>
        <ScrollView horizontal style={styles.scroll} contentContainerStyle={styles.scrollContent} showsHorizontalScrollIndicator={false}>
          {categoria.map((cat) => (
            <Pressable key={cat} onPress={() => setCategoriaAtiva(cat)}
              style={[
                styles.button,
                categoriaAtiva === cat && { backgroundColor: '#5ABC9E' }
              ]}            
            >
              <Text style={[ styles.textButton, categoriaAtiva === cat && { color: '#fff' } ]}>
                {cat}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      <View style={styles.session}>
        {listaVacinas[categoriaAtiva].map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.tituloCard}>{item.titulo}</Text>
            {item.vacinas.map((v, index) => (
              <Text key={index} style={styles.textVacina}>• {v}</Text>            
            ))}
          </View>
        ))}
      </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}