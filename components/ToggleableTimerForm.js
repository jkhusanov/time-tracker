import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import TimerButton from './TimerButton';
import TimerForm from './TimerForm';

export default function ToggleableTimerForm() {
  const [isOpen, setIsOpen] = useState(false);

  handleFormOpen = () => {
    setIsOpen(true);
  };

  return (
    <View style={[styles.container, !isOpen && styles.buttonPadding]}>
      {isOpen ? <TimerForm /> : <TimerButton title="+" color="black" onPress={handleFormOpen} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  buttonPadding: {
    paddingHorizontal: 15,
  },
});
