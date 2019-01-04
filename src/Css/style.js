import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        margin: 8,
    },
    containerFluid: {
        display: 'flex',
        flex: 1,
        paddingBottom: 40
    },
    header: {
        height: 75,
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#1565c0',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerLogo: {
        flex: 1,
        marginLeft: 5
    },
    headerText: {
        flex: 6,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    },
    body: {
        display: 'flex',
        flex: 10,
    },
    footer: {
        borderWidth: 1,
        display: 'flex',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#e3f2fd',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabTouch: {
        height: 40,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    tabImage: {
        height: 30,
        width: 30,
    },
    card: {},
    cardImage: {
        width: '100%'
    },
    cardBody: {
        padding: '15px'
    },
    btnPrimary: {
        margin: 2,
        padding: 10,
        borderColor: 'black',
        backgroundColor: '#1194f6',
        textAlign: 'center',
        color: '#fff',
        borderRadius: 5,
    },
    btnSecondary: {
        padding: 10,
        borderColor: 'black',
        backgroundColor: '#78909c',
        textAlign: 'center',
        color: '#fff',
        borderRadius: 5
    },
    btnDefault: {
        margin: 2,
        padding: 10,
        borderColor: 'black',
        backgroundColor: '#009688',
        textAlign: 'center',
        borderRadius: 5
    },
    btnSucces: {
        margin: 2,
        padding: 10,
        borderColor: 'black',
        backgroundColor: '#4caf50',
        textAlign: 'center',
        color: '#fff',
        borderRadius: 5
    },
    btnWarning: {
        margin: 2,
        padding: 10,
        borderColor: 'black',
        backgroundColor: '#fb8c00',
        textAlign: 'center',
        color: '#000',
        borderRadius: 5
    },
    btnDanger: {
        margin: 2,
        padding: 10,
        borderColor: 'black',
        backgroundColor: '#f44336',
        textAlign: 'center',
        color: '#fff',
        borderRadius: 5
    },
    btnDark: {
        margin: 2,
        padding: 10,
        borderColor: 'black',
        backgroundColor: '#263238',
        textAlign: 'center',
        color: '#fff',
        borderRadius: 5
    },
    btnText: {
        textAlign: 'center',
        color: '#fff',
    }
});

export default styles;