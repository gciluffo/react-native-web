export const mockReactNavigation = () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useIsFocused: jest.fn(() => true),
    useRoute: () => jest.fn(),
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
      goBack: jest.fn(),
      canGoBack: jest.fn(() => true),
      replace: jest.fn(),
      addListener: jest.fn(),
      removeListener: jest.fn(),
      dangerouslyGetState: jest.fn(),
    }),
  };
};
