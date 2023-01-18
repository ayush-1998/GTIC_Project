import React, {useState} from "react";
import Card from "react-bootstrap/Card";
//import ListGroup from "react-bootstrap/ListGroup";
import "../styles/productList.css";
import {productsData} from "../db.js"
import Pagination from "../components/Pagination";

function ProductList() {
  const [products, setProducts] = useState(productsData);
  //const [quantity, setQuantity] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(9);
  const nPages = Math.ceil(products.length / recordsPerPage);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = products.slice(indexOfFirstRecord, indexOfLastRecord);

  // const sortByPrice = () => {

  // }
  const handleQuantity = (e,id,name) => {
    e.preventDefault();
    if(name === "incQuantity"){
      setProducts((v) => {
        const a = JSON.parse(JSON.stringify(v)); // FOR AVOIDING MUTATING DATA, BECAUSE IN STRICT MODE THIS SETSTATE CALLBACK WILL TRIGGER TWICE
        a[id-1].quantity += 1;      
        return [...a];
      });
    }
    if(name==="decrQuantity"){
      setProducts((v) => {
        const a = JSON.parse(JSON.stringify(v)); // FOR AVOIDING MUTATING DATA, BECAUSE IN STRICT MODE THIS SETSTATE CALLBACK WILL TRIGGER TWICE
        a[id-1].quantity -= 1;      
        return [...a];
      });
    }
  }

  return (
    <div>
      <h1 style={{marginLeft:"500px"}}>Grocery Offers</h1>
      <div className="product-container">
        {Array.isArray(products) ? currentRecords.map((product, key) => {
          return(
            <>
              <Card  className="product" key={key}>
                <Card.Img variant="top" className="product-image" src={product.image} />
                <Card.Body>
                  <Card.Text className="brand" style={{height:"19px" }}>Brand: <span style={{fontWeight:600}}>{product.brand}</span></Card.Text>
                  <Card.Text className="brand"style={{height:"38px" }}>{product.title}</Card.Text>
      
                  {/* <ListGroup className="list-group-flush">
                  <ListGroup.Item className="form-check" style={{height:"38px" }}>
                    <input style={{marginLeft:"13px" }} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                    <Card.Img variant="top" style={{width:"55px" ,height:"16.59px", marginLeft:"13px" }} src="images/image 97.png" />
                    <label className="form-check-label" htmlFor="defaultCheck2" >
                      <del style={{marginLeft:"13px",fontSize:"12px" }}>&#8377;{product.Vendor[0].actualPrice}</del><span style={{marginLeft:"13px",fontSize:"16px",fontWeight:700 }}>&#8377;{product.Vendor[0].offerPrice}</span> 
                    </label>
                  </ListGroup.Item>
                  <ListGroup.Item className="form-check" style={{height:"38px" }}>
                    <input style={{marginLeft:"13px" }}className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                    <Card.Img variant="top" style={{width:"55px" ,height:"16.59px", marginLeft:"13px" }} src="images/image 98.png" />
                    <label className="form-check-label" htmlFor="defaultCheck2">
                      <del style={{marginLeft:"13px",fontSize:"12px" }}>&#8377;{product.Vendor[1].actualPrice}</del><span style={{marginLeft:"13px",fontSize:"16px",fontWeight:700  }}>&#8377;{product.Vendor[1].offerPrice}</span> 
                    </label>
                  </ListGroup.Item>
                  <ListGroup.Item className="form-check" style={{height:"38px" }}>
                    <input style={{marginLeft:"13px" }}className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                    <Card.Img variant="top" style={{width:"55px" ,height:"16.59px", marginLeft:"13px" }} src="images/image 102.png" />
                    <label className="form-check-label" htmlFor="defaultCheck2">
                      <del style={{marginLeft:"13px",fontSize:"12px" }}>&#8377;{product.Vendor[2].actualPrice}</del><span style={{marginLeft:"13px",fontSize:"16px",fontWeight:700  }}>&#8377;{product.Vendor[2 ].offerPrice}</span> 
                    </label>
                  </ListGroup.Item>
                </ListGroup> */}
                  <div className="row mt-1">
                    <div className="row col-6">
                      <div className="input-group mb-3 col-12">
                        <button className="input-group-text col-4" name="decrQuantity" onClick={(e)=>{handleQuantity(e,product.id,"decrQuantity")}}>-</button>
                        <input type="text" className="form-control col-4" value={product.quantity} />
                        <button className="input-group-text col-4" name="incQuantity"onClick={(e)=>{handleQuantity(e,product.id,"incQuantity")}}>+</button>
                      </div>
                    </div>
                    <button type="button" className="btn btn-success col-6 cart-button">Add to cart</button>
                  </div>
                </Card.Body>
              </Card>
            </>
          )
        }): <></>}
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  )
}

export default ProductList;
