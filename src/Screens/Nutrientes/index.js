import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View, Image, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import styles from './styles';


export default function Nutrientes() {
  const navigation = useNavigation();

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