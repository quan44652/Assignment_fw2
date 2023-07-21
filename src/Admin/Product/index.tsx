import React, { useEffect, useState } from "react";
import { Space, Table, Button, Popconfirm, Input } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Link, Outlet } from "react-router-dom";
import { ICategory, IProduct } from "../../Common";

// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
// library.add(faSearch);

interface IProps {
  products?: IProduct[];
  category?: ICategory[];
  onRemove?: (id: string) => void;
}
const AdminProducts = ({ products, category, onRemove }: IProps): any => {
  const columns: ColumnsType<IProduct> = [
    {
      title: "Id",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (imgUrl) => <img width={100} height={100} src={imgUrl} alt="" />,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "priceNew",
      key: "priceNew",
    },
    {
      title: "Category",
      dataIndex: "category_id",
      key: "category_id",
    },

    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Popconfirm
            placement="top"
            title=""
            description="Bạn có muốn xóa sản phẩm này ???"
            onConfirm={() => onRemove(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" danger>
              Remove
            </Button>
          </Popconfirm>
          <Button type="primary">
            <Link
              className="text-decoration-none"
              to={"/admin/products/update/" + record._id}
            >
              Update
            </Link>
          </Button>
        </Space>
      ),
    },
  ];
  const [listProducts, setListProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    setListProducts(products);
  }, [products]);
  console.log(category);

  const handleSearch = (value: string) => {
    const newProducts = products.filter((item) => {
      if (item.name.includes(value)) {
        return item;
      }
    });
    setListProducts(newProducts);
  };

  return (
    <>
      <Input.Search
        placeholder="Search"
        // enterButton={<FontAwesomeIcon icon={faSearch} />}
        size="large"
        onSearch={(value) => handleSearch(value)}
      />

      <button className="btn btn-primary mt-5">
        <Link className="text-light" to={"/admin/products/add"}>
          New product
        </Link>
      </button>
      <Table className="my-5" columns={columns} dataSource={listProducts} />
    </>
  );
};

export default AdminProducts;
