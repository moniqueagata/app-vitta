import { StatusBar } from 'expo-status-bar';
import { Image, View, ActivityIndicator, Text, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import styles from './styles';


export default function Login() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../../../assets/img/iso.png')} 
            style={{ width: 188, height: 188 }}
            resizeMode='contain'
        />
      </View>

        <Text style={styles.titulo}>Bem-vindo de volta!</Text>
    
        <View style={styles.containerInput}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput 
            style={styles.input}
        />
        <Text style={styles.label}>Senha</Text>
        <TextInput 
            style={styles.input}
        />
        </View>

        <Pressable style={styles.button}>
        <Text style={styles.white}>Entrar</Text>
        </Pressable>

        <View style={styles.footer}>
        <Text style={styles.link}>Não possui uma conta?</Text><Pressable onPress={() => navigation.navigate('Cadastro')}><Text style={styles.linkGreen}>Criar conta</Text></Pressable>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}
