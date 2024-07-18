import * as React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const Carousell = ({ source, items }) => {
    const width = Dimensions.get('window').width;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Carousel
                mode='parallax'
                loop
                width={width}
                height={200}
                autoPlay={true}
                data={items}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => (index)}
                renderItem={({ item }) => (
                    <View style={{ flex: 1, justifyContent: 'center', }}>
                        <Image style={{ height: '100%', width: '100%' }} source={{ uri: item.image }} />
                    </View>
                )}
            />
        </View>
    );
}

export default Carousell;

