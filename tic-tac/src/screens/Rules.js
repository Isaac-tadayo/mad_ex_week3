import { View, Text, StyleSheet } from 'react-native';
import TButton from '../components/TButton';
import colors from '../constants/color';

export default function Rules({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rules</Text>
      <Text style={styles.rule}>1. The game is played on a 3x3 grid</Text>
      <Text style={styles.rule}>2. Players take turns placing X or O</Text>
      <Text style={styles.rule}>3. First to get 3 in a row wins!</Text>
      <Text style={styles.rule}>4. If all 9 squares are filled it's a draw</Text>
      <TButton title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.dark,
  },
  rule: {
    fontSize: 16,
    marginBottom: 10,
    color: colors.dark,
  },
});