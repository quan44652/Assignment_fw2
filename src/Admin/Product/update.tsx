import React from "react";
import { useState, useEffect } from "react";
import { Button, Select, Form, Input, Upload, message } from "antd";
import { useParams } from "react-router-dom";
import fetchData from "../../Api";
import { UploadOutlined } from "@ant-design/icons";
import { UploadChangeParam } from "antd/lib/upload";
import { ICategory, IProduct } from "../../Common";

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

interface IProps {
  onUpdate?: (id: string | undefined, product: IProducts) => void;
  categories?: ICategory[];
}

const UpdateProduct: any = (props: IProps) => {
  const [uploadFile, setUploadFile] = useState<string>("");
  const PRESET_NAME = "my_image";
  const FOLDER_NAME = "my_image";
  const CLOUD_NAME = "dl3q8klyg";
  const [productCurrent, setProductCurrent] = useState<any>({});
  useEffect(() => {
    fetchData({ method: "getOne", url: "/products", id: id }).then((data) =>
      setProductCurrent(data)
    );
  }, []);
  const { id } = useParams();
  console.log(id);
  const onFinish = (values: IProduct) => {
    props.onUpdate(id, {
      name: values.name,
      price: values.price,
      image: uploadFile || productCurrent.image,
      description: values.description,
      category_id: values.category_id,
    });
  };

  const handleUpdate = (info: UploadChangeParam) => {
    if (info.file.status === "done") {
      setUploadFile(info.file.response.secure_url);
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(
        `${info.file.name} [file upload failed](poe://www.poe.com/_api/key_phrase?phrase=file%20upload%20failed&prompt=Tell%20me%20more%20about%20file%20upload%20failed.).`
      );
    }
  };
  if (Object.keys(productCurrent).length !== 0) {
    return (
      <div>
        <h4 className="p-5">New Product</h4>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={productCurrent}
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
            name="price"
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
          <Form.Item
            label="Image"
            name="image"
            rules={[{ required: true, message: "Please input  image!" }]}
          >
            <Upload
              action={`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`}
              data={{ upload_preset: PRESET_NAME, folder: FOLDER_NAME }}
              listType="picture"
              accept=".jpg,.jpeg,.png"
              maxCount={1}
              onChange={(info) => handleUpdate(info)}
            >
              <Button icon={<UploadOutlined />}>Upload File</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please input  description!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Lựa chọn"
            name="category_id"
            rules={[{ required: true, message: "Please select category!" }]}
          >
            <Select
              placeholder="Chọn Danh Mục"
              defaultValue={productCurrent.category_id}
            >
              {props.categories.map((item) => (
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
  }
};

export default UpdateProduct;
