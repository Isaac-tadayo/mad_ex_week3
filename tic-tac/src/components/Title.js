import { Text, StyleSheet } from 'react-native';
import colors from '../constants/color';

export default function Title() {
  return (
    <Text style={styles.title}>Tic Tac Toe</Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.dark,
    marginBottom: 20,
  },
});