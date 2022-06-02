import {View, Text, StyleSheet} from 'react-native';

export function PointItem({item}) {
    return(
        <View style={{
            ...styles.container,
            opacity: item.created_at ? 1 : 0.6
            }}>
            <Text style={styles.text}>
              {item.created_at ? item.created_at : ''}
            </Text>
            <Text style={styles.text}>
               {item.type}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#D0D0D0',
        marginHorizontal: 50,
        marginVertical: 20,
        padding: 15
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16
    }
})