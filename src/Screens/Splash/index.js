import { StatusBar } from 'expo-status-bar';
import { Image, View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import styles from './styles';

export default function Splash() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Welcome');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../../../assets/img/iso.png')} 
          style={{ width: 180, height: 180 }}
          resizeMode='contain'
        />
      </View>
        <ActivityIndicator size="large" color="#3ca184" />
      <StatusBar style="auto" />
    </View>
  );
}
