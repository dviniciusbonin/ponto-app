import { StyleSheet, Text, View } from 'react-native';
import { formatDate } from '../../helpers/date';
export function HomePage() {

    const today = new Date();


    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.title}>
                    Segunda - {formatDate(today)}
                </Text>
            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20
    },
    main:{
        borderColor: 'black',
        borderWidth: 1,
        width: '90%',
        flex: 1,
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        marginVertical: 20
    }
})