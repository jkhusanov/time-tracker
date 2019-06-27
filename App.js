import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import uuidv4 from 'uuid/v4';

import EditableTimer from './components/EditableTimer';
import ToggleableTimerForm from './components/ToggleableTimerForm';

export default function App() {
  const [timers, setTimers] = useState([
    {
      title: 'Mow the lawn',
      project: 'House Chores',
      id: uuidv4(),
      elapsed: 5456099,
      isRunning: true,
    },
    {
      title: 'Bake squash',
      project: 'Kitchen Chores',
      id: uuidv4(),
      elapsed: 1273998,
      isRunning: false,
    },
    {
      title: 'Cook food',
      project: 'Home',
      id: uuidv4(),
      elapsed: 2244244,
      isRunning: false,
    },
  ]);

  return (
    <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Timers</Text>
      </View>
      <ScrollView style={styles.timerList} alwaysBounceVertical={true}>
        <ToggleableTimerForm />
        {timers.map(({ title, project, id, elapsed, isRunning }) => (
          <EditableTimer
            key={id}
            id={id}
            title={title}
            project={project}
            elapsed={elapsed}
            isRunning={isRunning}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  titleContainer: {
    paddingTop: 35,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D6D7DA',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  timerList: {
    paddingBottom: 15,
  },
});
