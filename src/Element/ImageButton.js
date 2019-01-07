import React, {Component} from 'react';
import {TouchableOpacity,Image} from 'react-native'

class ImageButton extends Component {

    render() {
        return (
            <TouchableOpacity
                style={this.props.styleName}
                onPress={this.props.metodName}>
                <Image
                    style={this.props.imageStyle}
                    source={this.props.imageSource} />
            </TouchableOpacity>
        );
    }
}

export default ImageButton;