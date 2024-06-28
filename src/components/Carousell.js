import * as React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const Carousell = () => {
    const width = Dimensions.get('window').width;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Carousel
                mode='parallax'
                loop
                width={width}
                height={200}
                autoPlay={true}
                data={[...new Array(6).keys()]}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
                    <View
                        style={{
                            flex: 1,
                            // borderWidth: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <Image style={{ height: '100%', width: '100%' }} source={require('../assets/images/d1.png')} />
                    </View>
                )}
            />
        </View>
    );
}

export default Carousell;