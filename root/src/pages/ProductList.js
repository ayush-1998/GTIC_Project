import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../styles/productList.css";
import {products} from "../db.js"

function ProductList() {
  
  return (
    <div className="product-container">
      {Array.isArray(products) ? products.map((product, key) => {
        return(
          <>
            <Card  className="product" key={key}>
              <Card.Img variant="top" className="product-image" src={product.image} />
              <Card.Body>
                <Card.Text className="brand" style={{height:"19px" }}>Brand: <span style={{fontWeight:600}}>{product.brand}</span></Card.Text>
                <Card.Text className="brand"style={{height:"38px" }}>{product.title}</Card.Text>
      
                <ListGroup className="list-group-flush">
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
                </ListGroup>
                <div className="row mt-1">
                  <div className="row col-6">
                    <p className="col-12" style={{fontSize:"14px", height:"19px", marginBottom:"2px"}}>Quantity</p>
                    <select name="quantity" id="quantity" className="col-12 select-quantity" >
                      <option value="volvo">1</option>
                      <option value="saab">2</option>
                      <option value="mercedes">3</option>
                      <option value="audi">4</option>
                    </select>
                  </div>
                  <button type="button" className="btn btn-success col-6 cart-button">Add to cart</button>
                </div>
              </Card.Body>
            </Card>
          </>
        )
      }): <></>}
      
    </div>
  )
}

export default ProductList;
