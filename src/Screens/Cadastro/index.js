import { StatusBar } from 'expo-status-bar';
import { Image, View, ActivityIndicator, Text, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import styles from './styles';


export default function Cadastro() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.barraProgresso}></View>
        </View>
        <View style={styles.logo}>
            <Image source={require('../../../assets/img/iso.png')} 
                style={{ width: 170, height: 170 }}
                resizeMode='contain'
            />
        </View>
        <View style={styles.texts}>
            <Text style={styles.titulo}>Comece sua jornada</Text>
            <Text style={styles.subtitulo}>Preencha as informaçoes abaixo para realizar o cadastro</Text>
        </View>

        <View style={styles.containerInput}>
            <Text style={styles.label}>Nome completo</Text>
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
            <Text style={styles.label}>Confimar senha</Text>
                <TextInput 
                    style={styles.input}
                />
        </View>
            <Pressable style={styles.button}>
                <Text style={styles.white}>Continuar</Text>
            </Pressable>
        
            <View style={styles.footer}>
                <Text style={styles.link}>Já possui conta?</Text><Pressable onPress={() => navigation.navigate('Login')}><Text style={styles.linkGreen}>Entrar</Text></Pressable>
            </View>
      <StatusBar style="auto" />
    </View>
  );
}
