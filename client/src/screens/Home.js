import React, { useState, useEffect } from "react";
import Axios from "axios";
import Card from "./Card"
import Header from "./Header";

const Home = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001").then((response) => {
      console.log(response);
      setProduct(response.data);
    });
  }, [])

  

  return (
    <div>
      <Header />
      <div className="wrapper">
        {product.map(e =>
         <Card title={e.title}
               img={e.image} 
               description={e.description}
               price={e.price} 
               category={e.category}/> ) }
      </div>
    </div>
  );
}

export default Home;
