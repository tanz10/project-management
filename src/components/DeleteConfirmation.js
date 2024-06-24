import React from 'react';
import { Modal, Button } from 'antd';

function DeleteConfirmation({ visible, onConfirm, onCancel, projectName }) {
  return (
    <Modal
      title="Confirm Delete"
      visible={visible}
      onOk={() => onConfirm(projectName)}
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" danger onClick={() => onConfirm(projectName)}>
          Delete
        </Button>,
      ]}
    >
      <p>Are you sure you want to delete {projectName}?</p>
    </Modal>
  );
}

export default DeleteConfirmation;
