import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/color';

export default function Board() {
  return (
    <View style={styles.container}>

      {/* Dark background (middle layer) */}
      <View style={styles.darkLayer}>

        {/* Orange border (outer board layer) */}
        <View style={styles.orangeLayer}>

          {/* Green board (inner layer with 9 boxes) */}
          <View style={styles.greenBoard}>

            {/* Row 1: O, nothing, O */}
            <View style={styles.row}>
              <View style={styles.cell}><Text style={styles.o}>O</Text></View>
              <View style={styles.cell}></View>
              <View style={styles.cell}><Text style={styles.o}>O</Text></View>
            </View>

            {/* Row 2: X, X, nothing */}
            <View style={styles.row}>
              <View style={styles.cell}><Text style={styles.x}>X</Text></View>
              <View style={styles.cell}><Text style={styles.x}>X</Text></View>
              <View style={styles.cell}></View>
            </View>

            {/* Row 3: X, nothing, O */}
            <View style={styles.row}>
              <View style={styles.cell}><Text style={styles.x}>X</Text></View>
              <View style={styles.cell}></View>
              <View style={styles.cell}><Text style={styles.o}>O</Text></View>
            </View>

          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkLayer: {
    backgroundColor: colors.dark,
    padding: 20,
    borderRadius: 10,
  },
  orangeLayer: {
    backgroundColor: colors.orange,
    padding: 15,
    borderRadius: 8,
  },
  greenBoard: {
    backgroundColor: colors.green,
    padding: 10,
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
  },
  cell: {
    width: 80,
    height: 80,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  x: {
    fontSize: 40,
    fontWeight: 'bold',
    color: colors.blue,
  },
  o: {
    fontSize: 40,
    fontWeight: 'bold',
    color: colors.red,
  },
});