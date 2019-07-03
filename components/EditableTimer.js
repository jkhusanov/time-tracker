import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TimerForm from './TimerForm';
import Timer from './Timer';

export default function EditableTimer({
  id,
  title,
  project,
  elapsed,
  isRunning,
  onFormSubmit,
  onRemovePress,
}) {
  const [editFormOpen, setEditFormOpen] = useState(false);

  const handleEditPress = () => {
    openForm();
  };

  const handleFormClose = () => {
    closeForm();
  };

  const handleSubmit = timer => {
    onFormSubmit(timer);
    closeForm();
  };

  const closeForm = () => {
    setEditFormOpen(false);
  };

  const openForm = () => {
    setEditFormOpen(true);
  };

  if (editFormOpen) {
    return (
      <TimerForm
        id={id}
        title={title}
        project={project}
        onFormSubmit={handleSubmit}
        onFormClose={handleFormClose}
      />
    );
  }

  return (
    <Timer
      id={id}
      title={title}
      project={project}
      elapsed={elapsed}
      isRunning={isRunning}
      onEditPress={handleEditPress}
      onRemovePress={onRemovePress}
    />
  );
}

EditableTimer.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  elapsed: PropTypes.number.isRequired,
  isRunning: PropTypes.bool.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  onRemovePress: PropTypes.func.isRequired,
};
