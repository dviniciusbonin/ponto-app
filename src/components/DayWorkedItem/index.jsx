import {View, Text, StyleSheet} from 'react-native';
import i18n from '../../config/locale';

export function DayWorkedItem({item}) {
    return(
        <View style={styles.container}>
            <Text>
                {item.date}
            </Text>
            <Text style={styles.hours}>
                {item.total} {i18n.t('hoursWorked')}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#D0D0D0',
        opacity: 0.6,
        marginHorizontal: 50,
        marginVertical: 15,
        padding: 10
    },
    hours: {
        fontWeight: 'bold'
    }
})