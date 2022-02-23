// import React, {  } from 'react';
import React, { Component, useState } from 'react'

//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';

//Adding antd modules and style
import { Button, Modal, Form, Input, Radio } from 'antd';
import "antd/dist/antd.css";




export default class Login2 extends Component {
    render() {
 //popup and form code
 const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        visible={visible}
        title="Login Here"
        okText="Login"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log('Validate Failed:', info);
            });
        }}
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          initialValues={{
            modifier: 'public',
          }}
        >
          <Form.Item
            name="username"
            label="User Name"
            rules={[
              {
                required: true,
                message: 'Please enter username!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Password"
          rules={[
            {
              required: true,
              message: 'Please enter password!',
            },
          ]}
          >
            <Input type="password" />
          </Form.Item>
          
        </Form>
      </Modal>
    );
  };
  
  const CollectionsPage = () => {
    const [visible, setVisible] = useState(false);
  
    const onCreate = (values) => {
      console.log('Received values of form: ', values);
      setVisible(false);
    };
  
    return (
        
      <div className="login content-wrapper bg-white">
        
        <Button className="login2"
          type="primary"
          onClick={() => {
            setVisible(true);
          }}
        >
          Login22222
        </Button>
        <CollectionCreateForm
          visible={visible}
          onCreate={onCreate}
          onCancel={() => {
            setVisible(false);
          }}
        />
      </div>
     
    );
  };
return (
<div className="content-wrapper MainDiv bg-white">
  {/* <div class="jumbotron text-center">
      <h3>Login Page</h3>
     
  </div> */}
  
  <div className="container">
      
  <CollectionsPage />
    </div>
  </div>
);
    }
}

// export default App;