import React, { useEffect, useState } from "react";
import TopTotal from "./TopTotal";
import LatestOrder from "./LasterOrder";
import SaleStatistics from "./SalesStatistic";
import ProductsStatistics from "./ProductsStatistics";
import { useDispatch, useSelector } from "react-redux";
import * as ProductService from "../../Services/ProductService";
import { useQuery } from "react-query";
import * as PayService from "../../Services/OrderSevice";

const Main = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [products, setProduct] = useState([]);

  const hangldeGetAll = async () => {
    setLoading(true);
    const res = await PayService.getPay();
    const resProduct = await ProductService.getAll();
    setOrders(res);
    setProduct(resProduct)
    setLoading(false)
    
    // dispatch(updatePay(res));
  };
  useEffect(() => {
    hangldeGetAll();
  }, []);
  return (
    <>
      <section className="content-main">
        <div className="content-header">
          <h2 className="content-title"> Dashboard </h2>
        </div>
        {/* Top Total */}
        <TopTotal orders={orders} products={products} />

        <div className="row">
          {/* STATICS */}
          <SaleStatistics />
          <ProductsStatistics />
        </div>

        {/* LATEST ORDER */}
        <div className="card mb-4 shadow-sm">
          {/* <LatestOrder orders={orders} loading={loading}  /> */}
        </div>
      </section>
    </>
  );
};

export default Main;
