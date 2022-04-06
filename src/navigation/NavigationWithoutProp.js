import {createNavigationContainerRef} from '@react-navigation/native';
export const navigationRef = createNavigationContainerRef();

const navigationWithoutProp = {
  navigate: (screenName, params) => {
    if (navigationRef.isReady()) {
      navigationRef.navigate(screenName, params);
    }
  },
  goBack: () => {
    if (navigationRef.isReady()) {
      navigationRef.goBack();
    }
  },
};

// const navigationWithoutProp = new NavigationWithoutProp();
export const navigate = navigationWithoutProp.navigate;
