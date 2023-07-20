import { useState } from "react";
import { Button, Select, Form, Input, Upload, message } from "antd";
import { ICategory } from "../../Common";
import { UploadOutlined } from "@ant-design/icons";
import { UploadChangeParam } from "antd/lib/upload";
import { toast } from "react-toastify";

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

interface IProps {
  onAdd?: (category: ICategory) => void;
}

const CLOUD_NAME = "dl3q8klyg";
const PRESET_NAME = "portfolio";
const FOLDER_NAME = "portfolio";

const AddCategory = (props: IProps) => {
  const [uploadFile, setUploadFile] = useState<string>("");
  const onFinish = (values: ICategory) => {
    if (values.file == undefined) {
      toast.error("file ảnh không hợp lệ !!!");
      return;
    }
    props.onAdd({
      image: values.file.file.response.secure_url,
      name: values.name,
    });
  };

  const handleUpload = (info: UploadChangeParam) => {
    if (info.file.status === "done") {
      setUploadFile(info.file.response.secure_url);
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(
        `${info.file.name} [file upload failed](poe://www.poe.com/_api/key_phrase?phrase=file%20upload%20failed&prompt=Tell%20me%20more%20about%20file%20upload%20failed.).`
      );
    }
  };
  return (
    <div>
      <h4 className="p-5">New Category</h4>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item name="file" label="Upload">
          <Upload
            action={`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`}
            data={{ upload_preset: PRESET_NAME, folder: FOLDER_NAME }}
            maxCount={1}
            listType="picture"
            accept=".jpg,.jpeg,.png"
            onChange={(info) => handleUpload(info)}
          >
            <Button icon={<UploadOutlined />}>Upload File</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddCategory;
