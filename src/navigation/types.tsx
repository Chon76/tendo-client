import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

// RootStack
export type RootStackParamList = {
  Root: NavigatorScreenParams<BottomTabParamList | PublicStackParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};
export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

// BottomTab
export type BottomTabParamList = {
  Home: HomeStackParamList | undefined;
  Team: undefined;
  Calendar: undefined;
  Profile: undefined;
};
export type RootTabScreenProps<Screen extends keyof BottomTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

// HomeStack
export type HomeStackParamList = {
  Court: undefined;
  Chat: undefined;
};
export type HomeStackScreenProps<Screen extends keyof HomeStackParamList> = NativeStackScreenProps<
  HomeStackParamList,
  Screen
>;

// PublicStack
export type PublicStackParamList = {
  Login: undefined;
  Register: undefined;
};
export type PublicStackScreenProps<Screen extends keyof PublicStackParamList> = NativeStackScreenProps<
  PublicStackParamList,
  Screen
>;