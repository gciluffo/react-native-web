import {mockReactNavigation} from './__mocks__/react-navigation';

jest.mock('@react-navigation/native', () => mockReactNavigation);
jest.mock('@react-navigation/native-stack', () => jest.fn());
