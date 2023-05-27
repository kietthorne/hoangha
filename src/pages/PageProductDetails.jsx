import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "@/api/dataDraw";

export default function PageProductDetails() {
  const [product, setProduct] = useState();
  const { id } = useParams();

  const findProduct = (title) => {
    const res = products.filter((i) => i.id == id);
    console.log("res", res);
    if (res.length > 0) {
      setProduct(res[[0]]);
    }
  };

  useEffect(() => {
    console.log("match:", id);
    findProduct(id);
  }, [id]);
  return (
    <>
      <h2>Sản phẩm bạn tìm kiếm : </h2>

      {!product ? (
        <h2>Not found product!</h2>
      ) : (
        <h2>
          <div key={product?.id}>
            <img src={product?.thumbnail}></img>
            <p>{product?.name}</p>
            <p>Điện thoại: {product?.title}</p>
            <p>Giá tiền
              : {product?.price}</p>
          </div>
        </h2>
      )}
    </>
  );
}
