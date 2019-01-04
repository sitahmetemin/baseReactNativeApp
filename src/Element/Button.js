import React, {Component} from 'react';
import { Text, TouchableOpacity} from 'react-native';

export default class Button extends Component<props> {
    constructor(props) {
        super(props)
        
    }
    render() {
        return (
            <TouchableOpacity onPress={this.props.metodName} style={this.props.styleName}>
                <Text style={{color: '#fff', textAlign: 'center'}}>
                    { this.props.label }
                </Text>
            </TouchableOpacity>
        )
    }
}