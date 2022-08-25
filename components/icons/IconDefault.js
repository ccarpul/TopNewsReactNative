import React from 'react';
import { Image, View } from 'react-native'

const IconDefault = ({name}) => {
    return (
        <View style={{
            width: 30,
            height: 30
        }}>
            <Image
                style = {{ height:24, width: 24}}
                source = {{ uri: name }}/>
        </View>
    )
};

export default IconDefault;