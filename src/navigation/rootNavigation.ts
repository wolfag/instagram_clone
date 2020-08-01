import * as React from 'react';
import {
  NavigationContainerRef,
  NavigationAction,
  StackActions,
} from '@react-navigation/native';

export const navigationRef: React.RefObject<NavigationContainerRef> = React.createRef();

export function navigate(name: string, params?: object): void {
  navigationRef.current?.navigate(name, params);
}

export function dispatch(action: NavigationAction): void {
  navigationRef.current?.dispatch(action);
}

export function replace(name: string, params?: object): void {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}

export function push(name: string, param?: object): void {
  navigationRef.current?.dispatch(StackActions.push(name, param));
}

export function goBack(): void {
  navigationRef.current?.goBack();
}

export const navigation = {
  navigate,
  dispatch,
  replace,
  push,
  goBack,
};
