import React from 'react'
//screens
import HomePage from '../_features/_home/home';
import Auth from '../_features/_auth/auth';
import History from '../_features/_history/history';
import Point from '../_features/_points/point';
import Profile from '../_features/_profile/profile';
//navigator
import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer,
    BottomTabBar,
    createSwitchNavigator
} from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../_config/theme';

import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'


const AuthStack = createStackNavigator({
    AuthScreen: {
        screen: Auth,
        navigationOptions: {
            header: null
        }
    }
})

const HistoryStack = createStackNavigator({
    MainHistory: {
        screen: History,
        navigationOptions: {
            header: null
        }
    }
})

const PointStack = createStackNavigator({
    MainPoint: {
        screen: Point,
        navigationOptions: {
            header: null
        }
    }
})

const ProfileStack = createStackNavigator({
    MainProfile: {
        screen: Profile,
        navigationOptions: {
            header: null
        }
    }
})

const HomeStack = createStackNavigator({
    MainHome: {
        screen: HomePage,
        navigationOptions: {
            header: null
        }
    }
})

const TabBarComponent = (props) => (<BottomTabBar {...props} />);

const BottomTabs = createMaterialBottomTabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            title:'My Home',
            tabBarIcon: <Icon name="home" size={26} />
        }
    },
    MyActivity: {
        screen: HistoryStack,
        navigationOptions: {
            title:'My History',
            tabBarIcon: <Icon name="history" size={26} />
        }
    },
    MyPoint: {
        screen: PointStack,
        navigationOptions: {
            title:'My Point',
            tabBarIcon: <Icon name="attach-money" size={26} />
        }
    },
    MyProfile: {
        screen: ProfileStack,
        navigationOptions: {
            title:'Me',
            tabBarIcon: <Icon name="face" size={26} />
        }
    }
}, 
    {
        initialRouteName: 'Home',
        activeColor: Colors.active,
        inactiveColor: Colors.inactive,
        barStyle: { backgroundColor: Colors.inactive },
      }

)

const SwitchNavigator = createSwitchNavigator({
    AuthStack,
    BottomTabs
}, {
        initialRouteName: 'AuthStack'
    })

const AppContainer = createAppContainer(SwitchNavigator)

export default AppContainer
