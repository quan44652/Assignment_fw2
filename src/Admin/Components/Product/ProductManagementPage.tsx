import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IProduct } from '../../../interfaces/product';
import { Space, Table, } from 'antd';

import type { ColumnsType } from 'antd/es/table';
import { getAllProducts } from '../../../apis/product';
// const { Column, ColumnGroup } = Table;

interface DataType {
    key: string | number;
    _id: number | string;
    name: string;
    priceNew: number;
    priceOld: number


}
interface IProps {

    // onRemove: (_id: number | string) => void
}
const ProductManagementPage = (props: IProps) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    useEffect(() => {
        getAllProducts().then(({ data }) => setProducts(data))
    }, [])
    // const removeProduct1 = (_id: number | string) => {
    //     setProducts(products.filter(product => product._id !== _id))
    //     props.onRemove(_id)
    // }

    const columns: ColumnsType<DataType> = [
        {
            title: 'ID',
            dataIndex: '_id',
            key: '_id',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Product Image',
            dataIndex: 'image',
            key: 'image',
            render: (img) => <img className='tw-w-70 tw-h-48' src={img} alt="" />,
        },
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Price New',
            dataIndex: 'priceNew',
            key: 'priceNew',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Price Old',
            dataIndex: 'priceOld',
            key: 'priceOld',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <button className='tw-text-white tw-bg-blue-500 tw-border tw-px-3 tw-font-medium tw-rounded-lg tw-border-blue-50 '><Link to={`/admin/products/${record._id}/update`}>Update</Link></button>
                    <button className='tw-text-white tw-bg-red-500 tw-border tw-px-3 tw-font-medium tw-rounded-lg tw-border-blue-50' >Remove</button>
                </Space>
            ),
        },
    ];
    console.log(props)
    const data: DataType[] = products.map((item: IProduct) => {
        return {
            key: item._id,
            ...item
        }
    })
    return (

        <div>

            <h1 className='tw-text-3xl tw-font-bold '>Product Management Page</h1>
            {
                <div>
                    <button className='tw-border tw-p-1.5 tw-my-5 tw-font-medium tw-rounded-lg tw-border-blue-50'><Link to={'/admin/products/add'}>Add New Product</Link></button>

                    <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />


                </div>
            }

        </div >
    )
}

export default ProductManagementPage