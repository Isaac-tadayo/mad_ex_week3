import { Text, StyleSheet } from 'react-native';
import colors from '../constants/color';

export default function Message({ text }) {
  return (
    <Text style={styles.message}>{text}</Text>
  );
}

const styles = StyleSheet.create({
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.dark,
    marginBottom: 10,
  },
});