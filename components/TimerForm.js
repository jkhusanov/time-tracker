import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import TimerButton from './TimerButton';

export default function TimerForm({ id, title, project, onFormClose, onFormSubmit }) {
  const [titleInput, setTitleInput] = useState(id ? title : '');
  const [projectInput, setProjectInput] = useState(id ? project : '');

  const submitText = id ? 'Update' : 'Create';

  const handleTitleChange = newTitle => {
    setTitleInput(newTitle);
  };

  const handleProjectChange = newProject => {
    setProjectInput(newProject);
  };

  const handleSubmit = () => {
    onFormSubmit({
      id,
      titleInput,
      projectInput,
    });
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.attributeContainer}>
        <Text style={styles.textInputTitle}>Title</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            onChangeText={handleTitleChange}
            value={titleInput}
          />
        </View>
      </View>
      <View style={styles.attributeContainer}>
        <Text style={styles.textInputTitle}>Project</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            onChangeText={handleProjectChange}
            value={projectInput}
          />
        </View>
      </View>
      <View style={styles.buttonGroup}>
        <TimerButton small color="#21BA45" title={submitText} onPress={handleSubmit} />
        <TimerButton small color="#DB2828" title="Cancel" onPress={onFormClose} />
      </View>
    </View>
  );
}

TimerForm.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  project: PropTypes.string,
  onFormClose: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

TimerForm.defaultProps = {
  id: null,
  title: '',
  project: '',
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: 'white',
    borderColor: '#D6D7DA',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0,
  },
  attributeContainer: {
    marginVertical: 8,
  },
  textInputContainer: {
    borderColor: '#D6D7DA',
    borderRadius: 2,
    borderWidth: 1,
    marginBottom: 5,
  },
  textInput: {
    height: 30,
    padding: 5,
    fontSize: 12,
  },
  textInputTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
