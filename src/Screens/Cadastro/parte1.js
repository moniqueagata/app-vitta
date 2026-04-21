import { StatusBar } from 'expo-status-bar';
import { Image, View, ActivityIndicator, Text, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import styles from './styles/styles1';


export default function Parte1() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('Welcome')}>
          <Image source={require('../../../assets/img/arrow.png')} 
            style={{ width: 30, height: 30 }}
            resizeMode='contain'
            tintColor='#aaa'
          />
        </Pressable>
      </View>
      <View style={styles.content}>
        <View style={styles.logo}>
          <Image source={require('../../../assets/img/iso.png')} 
            style={{ width: 140, height: 140 }}
            resizeMode='contain'
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titulo}>Crie sua conta</Text>
          <Text style={styles.desc}>Descrição</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome</Text>
          <TextInput 
            style={styles.input}
          />
          <Text style={styles.label}>E-mail</Text>
          <TextInput 
            style={styles.input}
          />
          <Text style={styles.label}>Senha</Text>
          <TextInput 
            style={styles.input}
          />
          <Text style={styles.label}>Confirmar senha</Text>
          <TextInput 
            style={styles.input}
          />
        </View>

        <Pressable style={styles.button} onPress={() => navigation.navigate('Parte2')}>
          <Text style={styles.white}>Continuar</Text>
        </Pressable>

        <View style={styles.footer}>
          <Text style={styles.link}>Já possui uma conta?</Text><Pressable><Text style={styles.link}>Entrar</Text></Pressable>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
