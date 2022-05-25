import React from 'react';
import { Form, Input, Button, Select } from 'eh-design';
import { FormInstance } from 'eh-design/es/form';

const { Option } = Select;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 10 },
};

class Demo extends React.Component {
  formRef = React.createRef<FormInstance>();

  onGenderChange = (value: string) => {
    switch (value) {
      case 'male':
        this.formRef.current!.setFieldsValue({ note: 'Hi, man!' });
        return;
      case 'female':
        this.formRef.current!.setFieldsValue({ note: 'Hi, lady!' });
        return;
      case 'other':
        this.formRef.current!.setFieldsValue({ note: 'Hi there!' });
    }
  };

  onFinish = (values: any) => {
    console.log(values);
  };

  onReset = () => {
    this.formRef.current!.resetFields();
  };

  onFill = () => {
    this.formRef.current!.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };

  render() {
    return (
      <Form
        {...layout}
        ref={this.formRef}
        name="control-ref"
        onFinish={this.onFinish}
      >
        <Form.Item name="note" label="Note" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
          <Select
            placeholder="Select a option and change input text above"
            onChange={this.onGenderChange}
            allowClear
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.gender !== currentValues.gender
          }
        >
          {({ getFieldValue }) =>
            getFieldValue('gender') === 'other' ? (
              <Form.Item
                name="customizeGender"
                label="Customize Gender"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            ) : null
          }
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" style={{ marginRight: 8 }}>
            Submit
          </Button>
          <Button
            htmlType="button"
            onClick={this.onReset}
            style={{ marginRight: 8 }}
          >
            Reset
          </Button>
          <Button type="link" htmlType="button" onClick={this.onFill}>
            Fill form
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Demo;
