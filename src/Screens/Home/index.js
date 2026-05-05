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
          <View style={styles.profile}>
            <Image source={require('../../../assets/img/people.jpg')}
            style={{ width: 55, height: 55, borderRadius: '100%' }}
              resizeMode='cover'
            />
          </View>
          <Text style={styles.textHeader}>Olá, Monique</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.titulo}>Como você está hoje?</Text>

          <View style={styles.rowBtn}>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Glicemia')}>
            <Image source={require('../../../assets/img/glicemia.png')} 
              style={{ width: 35, height: 35 }}
              resizeMode='contain'
            />
            <Text style={styles.textButton}>Glicemia</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Image source={require('../../../assets/img/pressao.png')} 
              style={{ width: 35, height: 35 }}
              resizeMode='contain'
            />
            <Text style={styles.textButton}>Pressão</Text>
          </Pressable>
          </View>

          <View style={styles.rowBtn}>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Vacinas')}>
            <Image source={require('../../../assets/img/vacina.png')} 
              style={{ width: 35, height: 35 }}
              resizeMode='contain'
            />
            <Text style={styles.textButton}>Vacinas</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Image source={require('../../../assets/img/alergia.png')} 
              style={{ width: 35, height: 35 }}
              resizeMode='contain'
            />
            <Text style={styles.textButton}>Alergias</Text>
          </Pressable>
          </View>

          <View style={styles.rowBtn}>
          <Pressable style={styles.button}>
            <Image source={require('../../../assets/img/imc.png')} 
              style={{ width: 35, height: 35 }}
              resizeMode='contain'
            />
            <Text style={styles.textButton}>IMC</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Nutrientes')}>
            <Image source={require('../../../assets/img/fruta.png')} 
              style={{ width: 35, height: 35 }}
              resizeMode='contain'
            />
            <Text style={styles.textButton}>Nutrientes</Text>
          </Pressable>
          </View>
          <View style={styles.rowBtn}>
          <Pressable style={styles.button}>
            <Image source={require('../../../assets/img/capsula.png')} 
              style={{ width: 35, height: 35 }}
              resizeMode='contain'
            />
            <Text style={styles.textButton}>Remédio</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Image source={require('../../../assets/img/agua.png')} 
              style={{ width: 35, height: 35 }}
              resizeMode='contain'
            />
            <Text style={styles.textButton}>Liquido</Text>
          </Pressable>
          </View>
          <View style={styles.rowBtn}>
          <Pressable style={styles.button}>
            <Image source={require('../../../assets/img/sangue.png')} 
              style={{ width: 35, height: 35 }}
              resizeMode='contain'
            />
            <Text style={styles.textButton}>Sangue</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Image source={require('../../../assets/img/emergencia.png')} 
              style={{ width: 35, height: 35 }}
              resizeMode='contain'
            />
            <Text style={styles.textButton}>Emergência</Text>
          </Pressable>
          </View>
        </View>
      </ScrollView>

      <View style={styles.navbar}>
        <Pressable style={styles.navButton}>
          <Image source={require('../../../assets/img/home.png')} 
            style={{ width: 30, height: 30 }}
            resizeMode='contain'
            tintColor='#ccc'
          />
          <Text style={styles.navLabel}>Home</Text>
        </Pressable>
        <Pressable style={styles.navButton}>
          <Image source={require('../../../assets/img/user.png')} 
            style={{ width: 30, height: 30 }}
            resizeMode='contain'
            tintColor='#ccc'
          />
          <Text style={styles.navLabel}>Você</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
