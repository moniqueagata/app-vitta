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
          <Image source={require('../../../assets/img/iso.png')} 
            style={{ width: 50, height: 50 }}
            resizeMode='contain'
          />
          <View style={styles.msgHeader}>
            <Text style={styles.nome}>Olá, Nome</Text>
            <Text style={styles.desc}>Como está sua saúde hoje?</Text>
          </View>
        </View>
        <View style={styles.content}>
            <View style={styles.row}>
              <Pressable style={styles.button} onPress={() => navigation.navigate('Glicemia')}>
                <View style={styles.circle}>
                  <Image source={require('../../../assets/img/glicemia.png')} 
                    style={{ width: 46, height: 46 }}
                    resizeMode='contain'
                  />
                </View>
                <Text style={styles.textButton}>Glicemia</Text>
              </Pressable>
              <Pressable style={styles.button}>
                <View style={styles.circle}>
                  <Image source={require('../../../assets/img/pressao.png')} 
                    style={{ width: 46, height: 46 }}
                    resizeMode='contain'
                  />
                </View>
                <Text style={styles.textButton}>Pressão</Text>
              </Pressable>
            </View>
            <View style={styles.row}>
              <Pressable style={styles.button} onPress={() => navigation.navigate('Vacinas')}>
                <View style={styles.circle}>
                  <Image source={require('../../../assets/img/vacina.png')} 
                    style={{ width: 46, height: 46 }}
                    resizeMode='contain'
                  />
                </View>
                <Text style={styles.textButton}>Vacinas</Text>
              </Pressable>
              <Pressable style={styles.button}>
                <View style={styles.circle}>
                  <Image source={require('../../../assets/img/alergia.png')} 
                    style={{ width: 46, height: 46 }}
                    resizeMode='contain'
                  />
                </View>
                <Text style={styles.textButton}>Alergias</Text>
              </Pressable>
            </View>
            <View style={styles.row}>
              <Pressable style={styles.button}>
                <View style={styles.circle}>
                  <Image source={require('../../../assets/img/imc.png')} 
                    style={{ width: 46, height: 46 }}
                    resizeMode='contain'
                  />
                </View>
                <Text style={styles.textButton}>IMC</Text>
              </Pressable>
              <Pressable style={styles.button} onPress={() => navigation.navigate('Nutrientes')}>
                <View style={styles.circle}>
                  <Image source={require('../../../assets/img/fruta.png')} 
                    style={{ width: 46, height: 46 }}
                    resizeMode='contain'
                  />
                </View>
                <Text style={styles.textButton}>Nutrientes</Text>
              </Pressable>
            </View>
            <View style={styles.row}>
              <Pressable style={styles.button}>
                <View style={styles.circle}>
                  <Image source={require('../../../assets/img/capsula.png')} 
                    style={{ width: 46, height: 46 }}
                    resizeMode='contain'
                  />
                </View>
                <Text style={styles.textButton}>Medicações</Text>
              </Pressable>
              <Pressable style={styles.button}>
                <View style={styles.circle}>
                  <Image source={require('../../../assets/img/agua.png')} 
                    style={{ width: 46, height: 46 }}
                    resizeMode='contain'
                  />
                </View>
                <Text style={styles.textButton}>Líquido</Text>
              </Pressable>
            </View>
            
            <View style={styles.row}>
              <Pressable style={styles.button}>
                <View style={styles.circle}>
                  <Image source={require('../../../assets/img/sangue.png')} 
                    style={{ width: 46, height: 46 }}
                    resizeMode='contain'
                  />
                </View>
                <Text style={styles.textButton}>Sangue</Text>
              </Pressable>
              <Pressable style={styles.button}>
                <View style={styles.circle}>
                  <Image source={require('../../../assets/img/emergencia.png')} 
                    style={{ width: 46, height: 46 }}
                    resizeMode='contain'
                  />
                </View>
                <Text style={styles.textButton}>Emergência</Text>
              </Pressable>
            </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
