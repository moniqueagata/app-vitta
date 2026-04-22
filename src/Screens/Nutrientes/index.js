import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View, Image, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import styles from './styles';


export default function Nutrientes() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Pressable style={styles.buttonSaida} onPress={() => navigation.navigate('Home')}>
            <Image source={require('../../../assets/img/arrow.png')}
              style={{ width: 20, height: 20 }}
              resizeMode='contain'
              tintColor= '#1E333C'
            />
          </Pressable>
          <Text style={styles.textHeader}>Nutrientes</Text>
        </View>
        
        <View style={styles.session}>
          <View style={styles.content}>
            <Text style={styles.titulo}>Pesquise o nome de uma fruta</Text>
            <TextInput 
              style={styles.input}
            />
            <Pressable style={styles.button}>
                <Text style={styles.textButton}>Procurar</Text>
            </Pressable>
          </View>

            <View style={styles.card}>
              <Text style={styles.nome}>Nome da fruta</Text>

              <View style={styles.info}>
                <Text style={styles.label}>Calorias:</Text>
                <Text style={styles.valor}>11111</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.label}>Carboidratos:</Text>
                <Text style={styles.valor}>11111</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.label}>Proteínas:</Text>
                <Text style={styles.valor}>11111</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.label}>Gorduras:</Text>
                <Text style={styles.valor}>11111</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.label}>Fibras:</Text>
                <Text style={styles.valor}>111111</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.label}>Potássio:</Text>
                <Text style={styles.valor}>111111</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.label}>Cálcio:</Text>
                <Text style={styles.valor}>111111</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.label}>Ferro:</Text>
                <Text style={styles.valor}>1111111</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.label}>Vitamina:</Text>
                <Text style={styles.valor}>11111</Text>
              </View>
            </View>
        </View>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}