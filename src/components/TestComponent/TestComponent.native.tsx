import {Text} from 'react-native';
import React from 'react';

interface TestComponentProps {}

const TestComponent: React.FC<TestComponentProps> = () => {
  return (
    <Text style={{backgroundColor: 'orange'}}>
      This is a component for the native apps
    </Text>
  );
};

export default TestComponent;
