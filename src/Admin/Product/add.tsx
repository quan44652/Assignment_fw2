import { Button, Select, Form, Input, Upload, message } from "antd";
import { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { UploadChangeParam } from "antd/lib/upload";
import { ICategory, IProduct } from "../../Common";

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const CLOUD_NAME = "dl3q8klyg";
const PRESET_NAME = "portfolio";
const FOLDER_NAME = "portfolio";

interface IProps {
  onAdd?: (product: IProduct) => void;
  category?: ICategory[];
}

const AddProduct = ({ category, onAdd }: IProps) => {
  const [uploadFile, setUploadFile] = useState<string>("");
  const onFinish = (values: IProduct) => {
    onAdd({
      name: values.name,
      priceNew: values.priceNew,
      image: uploadFile,
      categoryId: values.categoryId,
    });
  };

  const handleUpload = (info: UploadChangeParam) => {
    if (info.file.status === "done") {
      setUploadFile(info.file.response.secure_url);
      void message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      void message.error(
        `${info.file.name} [file upload failed](poe://www.poe.com/_api/key_phrase?phrase=file%20upload%20failed&prompt=Tell%20me%20more%20about%20file%20upload%20failed.).`
      );
    }
  };

  console.log(category);

  return (
    <div>
      <h4 className="p-5">New Product</h4>
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
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Price"
          name="priceNew"
          rules={[
            { required: true, message: "Please input price!" },
            {
              type: "number",
              message: "Please input a valid number!",
              transform: (value) => Number(value),
            },
          ]}
        >
          <Input />
        </Form.Item>
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
          label="Lựa chọn"
          name="categoryId"
          rules={[{ required: true, message: "Please select category!" }]}
        >
          <Select placeholder="Chọn Danh Mục">
            {category.map((item) => (
              <Select.Option key={item._id} value={item._id}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
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

export default AddProduct;
