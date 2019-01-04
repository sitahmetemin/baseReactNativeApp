import React, {Component} from 'react';
import { View , Text, ScrollView} from 'react-native';

//--------------------------------------------imports
import styles from '../Css/style';
import Button from '../Element/Button';
//--------------------------------------------imports

export default class Home extends Component <Props> {
    render () {
        return <View style={styles.container}>
            <Text>Ana Sayfadasın</Text>
            {/* <TouchableOpacity style = { styles.btnDark} >
                <Text style={styles.btnText}>
                    Button deneme
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnPrimary}>
                <Text style={styles.btnText}>
                    Button deneme
                </Text>
            </TouchableOpacity> */}
            <ScrollView>
                <Button styleName={styles.btnSucces} label={'Succes'} metodName={btnMessage} />
                <Button styleName={styles.btnDefault} label={'default'} metodName={btnMessage} />
                <Button styleName={styles.btnDanger} label={'danger'} metodName={btnMessage} />
                <Button styleName={styles.btnDark} label={'dark'} metodName={btnMessage} />
                <Button styleName={styles.btnPrimary} label={'primary'} metodName={btnMessage} />
                <Button styleName={styles.btnSecondary} label={'secondary'} metodName={btnMessage} />
                <Button styleName={styles.btnWarning} label={'warning'} metodName={btnMessage} />
            </ScrollView>
        </View>
    }

}


btnMessage = () => {
    console.warn('work')
}