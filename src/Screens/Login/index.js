import { StatusBar } from 'expo-status-bar';
import { Image, View, ActivityIndicator, Text, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import styles from './styles';


export default function Login() {
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
                style={{ width: 160, height: 160 }}
                resizeMode='contain'
            />
            </View>

            <Text style={styles.titulo}>Bem Vindo!</Text>
        
            <View style={styles.inputContainer}>
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
            <Text style={styles.link}>Não possui uma conta?</Text><Pressable><Text style={styles.link}>Criar conta</Text></Pressable>
            </View>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}
