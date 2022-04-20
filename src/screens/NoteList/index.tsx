import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
import React from 'react';
import {CompositeNavigationProp} from '@react-navigation/native';

interface NoteListProps {
  navigation: any;
}

const NoteList: React.FC<NoteListProps> = ({navigation}) => {
  const renderItem = ({item}: any) => {
    return (
      <Button
        title={item.key}
        onPress={() => navigation.navigate('NoteDetail')}></Button>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default NoteList;
