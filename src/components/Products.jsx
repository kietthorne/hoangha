import React, { useContext, useEffect, useState } from 'react';
import ProductsItem from '@Components/ProductsItem';
import '@Assets/less/products.less';
import Search from './Search';
import AppContext from '@/context/AppContext';
import { dataProduct } from '@/api/data';

function Products({ title, children }) {
  const { theme, setTheme } = useContext(AppContext);
  const [products, setProducts] = useState(dataProduct.products);
  const [search, setSearch] = useState('');
  
  // console.log('theme', theme);
  // // setTimeout(() =>  setTheme(pr => ({...pr, theme: 'light edit'})),2000)
  // const onDeleteProduct = (id) => {
  //   const newData = products.filter((p) => p.id !== id);
  //   setProducts(newData);
  //   setProductsSort(newData);
  // };

  const onSearchProduct = (value) => {
    console.log("hihi", value);
    const res = dataProduct.products.filter((i) =>{
      const r = i.title.toLowerCase().includes(value.toLowerCase())
      return r
    })
    console.log('res',res);
    setProducts(res)
  }

  // const onUpdateProduct = (item) => {
  //   console.log('onUpdate:', item);
  // };

  // useEffect(() => {
  //   fetch('http://localhost:3000/Project_HH/products')
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then(({ products }) => {
  //       console.log('productL:', products);
  //       if (products) {
  //         setProducts(products);
  //         setProductsSort(products);
  //       }
  //     });
  // }, []);

  return (
    <>
      <div className="Product-list grid grid-cols-6 gap-6">
        {products
          .map((item) => (
            <div key={item.id}>
              <img src={item.thumbnail}></img>
              <p>{item.name}</p>
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>
          ))}
      </div>
      <div className="flex mb-4 w-full justify-between items-center">
        <div className="search-product">
          <h2>Tìm sản phẩm</h2>
          <Search onSearching={onSearchProduct} placeholder={'Nhập tên sản phẩm'} />
        </div>
        <span>số lượng: {products?.length || 0}</span>
      </div>
      {/* <div className="products">
        {productsSort
          ? productsSort.map((product) => (
              <ProductsItem
                item={product}
                key={product?.id}
                onDelete={onDeleteProduct}
                onUpdate={onUpdateProduct}
              />
            ))
          : 'Loading....'}
      </div> */}
    </>
  );
}

export default Products;
