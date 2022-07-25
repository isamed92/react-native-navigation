import { StyleSheet } from 'react-native';

export const colors = {
    primary: '#5856D6',
}


export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 30,
        marginBottom: 10
    },
    btn: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    btnTxt: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100,

    },
    containerMenu:{
        marginVertical: 30,
        marginHorizontal: 20,
    },
    menuBtn: {
        marginVertical: 5,
        paddingHorizontal: 30,
        paddingVertical: 10,
    },
    menuText:{
        fontSize: 25,
    }
});