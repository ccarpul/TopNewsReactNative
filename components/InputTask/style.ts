import StyleSheet from 'react-native' 

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        height: 120,
        padding: 10,
    },
    textInputContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignContent: 'space-around',
        width: '80%'
    },
    textInput: {
        backgroundColor: '#EEE',
        height: 34,
        borderWidth: 1
    },
    button: {
        justifyContent: 'center',
        flex: 1,
        alignContent: 'center',
        alignItems: 'center'
    }
});