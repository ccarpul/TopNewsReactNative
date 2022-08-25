/* eslint react/prop-types: 0 */
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';
import CONSTANTS from '../constants';
import MainScreen from '../screens/MainScreen';

const commonNavigationOptions = ({ navigation }) => ({
    header: null,
    title: navigation.state.routeName,
});

const routeOptions = {
    screen: MainScreen,
    navigationOptions: commonNavigationOptions,
};

// different routes for all, active and completed todos
const TabNav = TabNavigator(
    {
        [CONSTANTS.ALL]: routeOptions,
        [CONSTANTS.ACTIVE]: routeOptions,
        [CONSTANTS.COMPLETED]: routeOptions,
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                const { routeName } = navigation.state;
                let iconName;
                switch (routeName) {
                    case CONSTANTS.ALL:
                        iconName = 'format-list-bulleted';
                        break;
                    case CONSTANTS.ACTIVE:
                        iconName = 'filter-center-focus';
                        break;
                    case CONSTANTS.COMPLETED:
                        iconName = 'playlist-add-check';
                }
                return (
                    <MaterialIcons
                        name={iconName}
                        size={28}
                        style={{ marginBottom: -3 }}
                        color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
                    />
                );
            },
        }),
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: true,
    },
);

export default TabNav;