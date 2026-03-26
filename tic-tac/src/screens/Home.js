import { View, StyleSheet } from 'react-native';
import TButton from '../components/TButton';
import colors from '../constants/color';
import Board from '../components/Board';
import Title from '../components/Title';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Title />
      <Board />
      <TButton title="Rules" onPress={() => navigation.navigate('Rules')} />
      <TButton title="Credits" onPress={() => navigation.navigate('Credits')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', 
    alignItems: 'center',
    justifyContent: 'center',
  },
});