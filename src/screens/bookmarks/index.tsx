import React from 'react';
import {View} from 'react-native';
import Button from '../../components/button';
import TextView from '../../components/text-view';

const Bookmarks = () => {
  return (
    <View style={{flex: 1}}>
      <TextView color="BLACKDARKER">Bookmarks Screen</TextView>
      <Button size='small' label='Login' />
    </View>
  );
};

export default Bookmarks;
