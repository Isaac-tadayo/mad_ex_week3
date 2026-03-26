import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../constants/color';

export default function TButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.dark,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
    width: 200,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});