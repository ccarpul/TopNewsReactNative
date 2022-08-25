import React from 'react';
import { StatusBar, View } from 'react-native';
import { Container, Spinner } from 'native-base';
import { ReactiveBase } from '@appbaseio/reactivesearch-native';

import CONFIG from '../constants/Config';
import COLORS from '../constants/Colors';
import MainScreen from '../screens/MainScreen'
import MainTabNavigator from './MainTabNavigator'


const MyRoot = () => {
    return (
        <>
        <MainScreen />
        </>
    )
};


const RootComponent = () => {

    return (
        <>
            <StatusBar backgroundColor={COLORS.primary} barStyle="dark-content" />
            <MyRoot />
        </>
    )
};
export default RootComponent;