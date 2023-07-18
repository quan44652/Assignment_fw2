import React, { useState } from 'react'
// import { useForm, SubmitHandler } from 'react-hook-form' //import useForm hook
import { IProduct } from '../../../interfaces/product'
import { Button, Form, Input } from 'antd';

import { useNavigate } from 'react-router-dom';
interface IProps {
    onAdd: (product: IProduct) => void
}


const AddProductPage = (props: IProps) => {

    const navigate = useNavigate()
    const onFinish = (values: any) => {
        props.onAdd(values);
        navigate("/admin/products")
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div>
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
                    label="Product Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your product name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Sticker "
                    name="sticker"
                    rules={[{ required: true, message: 'Please input your price!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product Image"
                    name="image"
                    rules={[{ required: true, message: 'Please input your image!' }]}
                >

                    <Input />
                </Form.Item>

                <Form.Item
                    label="Price New"
                    name="priceNew"

                >

                    <Input />
                </Form.Item>
                <Form.Item
                    label="Price Old"
                    name="priceOld"
                    rules={[{ required: true, message: 'Please input your image!' }]}
                >

                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" className='tw-text-white tw-bg-blue-500 tw-border tw-px-3 tw-font-medium tw-rounded-lg tw-border-blue-50 '>
                        Add New Product
                    </Button>
                </Form.Item>
            </Form>


            {/* <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                <input type="text" {...register("name")} />
                <input type="number" {...register("price")} />
                <button type="submit">Add New Product</button>
            </form> */}
        </div>
    )
}

export default AddProductPage