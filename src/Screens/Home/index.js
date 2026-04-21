import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';


export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Bem, vindo!</Text>
        </View>
        <View style={styles.session}>
          <View style={styles.botoes}>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Glicemia')}>
              <Image source={require('../../../assets/img/glicemia.png')} 
                style={{ width: 57, height: 57 }}
              />
              <Text style={styles.textButton}>Glicemia</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Vacinas')}>
              <Image source={require('../../../assets/img/vacina.png')} 
                style={{ width: 57, height: 57 }}
              />
              <Text style={styles.textButton}>Vacinas</Text>
            </Pressable>
          </View>
          <View style={styles.botoes}>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Nutrientes')}>
              <Image source={require('../../../assets/img/fruta.png')} 
                style={{ width: 57, height: 57 }}
              />
              <Text style={styles.textButton}>Nutrientes</Text>
            </Pressable>
            <Pressable style={styles.button}>
              <Image source={require('../../../assets/img/alergia.png')} 
                style={{ width: 57, height: 57 }}
              />
              <Text style={styles.textButton}>Alergias</Text>
            </Pressable>
          </View>
          <View style={styles.botoes}>
            <Pressable style={styles.button}>
              <Image source={require('../../../assets/img/pressao.png')} 
                style={{ width: 57, height: 57 }}
              />
              <Text style={styles.textButton}>Pressão</Text>
            </Pressable>
            <Pressable style={styles.button}>
              <Image source={require('../../../assets/img/imc.png')} 
                style={{ width: 57, height: 57 }}
              />
              <Text style={styles.textButton}>IMC</Text>
            </Pressable>
          </View>
          <View style={styles.botoes}>
            <Pressable style={styles.button}>
              <Image source={require('../../../assets/img/capsula.png')} 
                style={{ width: 57, height: 57 }}
              />
              <Text style={styles.textButton}>Medicações</Text>
            </Pressable>
            <Pressable style={styles.button}>
              <Image source={require('../../../assets/img/agua.png')} 
                style={{ width: 57, height: 57 }}
              />
              <Text style={styles.textButton}>Liquído</Text>
            </Pressable>
          </View>
          <View style={styles.botoes}>
            <Pressable style={styles.button}>
              <Image source={require('../../../assets/img/sangue.png')} 
                style={{ width: 57, height: 57 }}
              />
              <Text style={styles.textButton}>Sangue</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
