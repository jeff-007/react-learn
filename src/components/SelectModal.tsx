import React, { useState } from 'react';
import { Button, Modal, Select } from 'antd'; // 修改: 从 'antd' 导入 Button, Modal, Select

interface SelectModalProps {
  buttonLabel: string;
}

const SelectModal: React.FC<SelectModalProps> = ({ buttonLabel }) => {
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);

  const showModal = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsModalVisible(true);
    }, 1000);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    console.log('Selected option:', selectedOption);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleChange = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <>
      <Button type="primary" onClick={showModal} loading={loading}>
        {buttonLabel}
      </Button>
      <Modal
        title="Select an Option"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Select defaultValue="a" style={{ width: 120 }} onChange={handleChange}>
          <Select.Option value="a">A</Select.Option>
          <Select.Option value="b">B</Select.Option>
          <Select.Option value="c">C</Select.Option>
        </Select>
      </Modal>
    </>
  );
};

export default SelectModal;