/**
 * Created by hexzhou on 2017/8/19 0019.
 */
import React, {Component} from 'react';
import {StyleSheet, Platform} from 'react-native';
import {Image, Tile, Title, Subtitle, View, ListView, Screen, Divider} from '@shoutem/ui';

import {
    Text,
    Card,
    Icon,
} from '@shoutem/ui';


class Hollow extends Component {
    constructor(props) {
        super(props);
        this.renderRow = this.renderRow.bind(this);
        this.state = {
            restaurants: [{
                "name": "Gaspar Brasserie",
                "address": "185 Sutter St, San Francisco, CA 94109",
                "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-1.jpg" },
            }, {
                "name": "Chalk Point Kitchen",
                "address": "527 Broome St, New York, NY 10013",
                "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-2.jpg" },
            }],
        }
    }

    renderRow(restaurant) {
        return (
            <View>
                <Image
                    styleName="large-banner"
                    source={{ uri: restaurant.image.url }}
                >
                    <Tile>
                        <Title styleName="md-gutter-bottom">{restaurant.name}</Title>
                        <Subtitle styleName="sm-gutter-horizontal">{restaurant.address}</Subtitle>
                    </Tile>
                </Image>
                <Divider styleName="line" />
            </View>
        );
    }

    render() {
        return (
            <Screen>
                <ListView
                    data={this.state.restaurants}
                    renderRow={this.renderRow}
                />
            </Screen>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    heading: {
        color: 'white',
        marginTop: 10,
        fontSize: 22,
    },
    fonts: {
        marginBottom: 8,
    },
    user: {
        flexDirection: 'row',
        marginBottom: 6,
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    name: {
        fontSize: 16,
        marginTop: 5,
    },
    locationView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    subtitleView: {
        flexDirection: 'row',
    },
    timeView: {
        flex: 1,
        alignItems: 'flex-end'
    },
    timeText: {
        color: 'grey',
        textAlign: 'center',
        paddingRight: 20,
    },
    locationText: {
        color: 'grey',
    },
});

export default Hollow;
