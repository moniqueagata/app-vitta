import { StatusBar } from 'expo-status-bar';
import { Image, View, Text,  Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import styles from './styles';


export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.logo}>
            <Image source={require('../../../assets/img/iso.png')} 
                style={{ width: 240, height: 240 }}
                resizeMode='contain'
            />
        </View>
        <View style={styles.content}>
            <View style={styles.texts}>
                <Text style={styles.titulo}>Bem-vindo ao Vitta</Text>
                <Text style={styles.subtitulo}>Seu cuidado começa aqui</Text>
            </View>

            <Pressable style={styles.button} onPress={() => navigation.navigate('Cadastro')}>
                <Text style={styles.white}>Criar conta</Text>
            </Pressable>

            <View style={styles.footer}>
                <Text style={styles.link}>Já possui conta?</Text><Pressable onPress={() => navigation.navigate('Login')}><Text style={styles.linkGreen}>Entrar</Text></Pressable>
            </View>
        </View>

      <StatusBar style="auto" />
    </View>
  );
}