/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import "../styles/Filter.css";
import { productsData } from "../db";
import { RiArrowDropUpLine } from "react-icons/ri";

const Filter = () => {
  const [filterProducts, setFilterProducts] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    //console.log(value, checked);
    if (checked) {
      setFilterProducts([...filterProducts, value]);
      //console.log(filterProducts);
    } else {
      setFilterProducts(filterProducts.filter((e) => e !== value));
      // console.log(filterProducts);
    }
  };

  // const price = products.sort((a, b) => (a.Vendor.offerPrice > b.Vendor.offerPrice ? 1 : -1));
  // console.log(price);

  const filterData = productsData.filter(
    (product) =>
      filterProducts.includes(product.brand) ||
      filterProducts.includes(product.category),
  );
  console.log(filterData);

  return (
    <>
      <div className="filter-container">
        <p className="filter-title">Filter By</p>
        <hr />
        <p className="filter-heading">Grocery Offers</p>
        <hr />
        <div className="text-container">
          <div className="text-icon">
            <RiArrowDropUpLine />
          </div>
          <div className="filter-text">PRICE</div>
        </div>
        <div className="filter-range">Enter a price range</div>
        <div className="input-container">
          <input
            className="price-input"
            type="text"
            name="text"
            id="text"
            defaultValue="10"
          ></input>

          <input
            className="price-input"
            type="text"
            name="text"
            id="text"
            defaultValue="3000"
          ></input>
          <button className="price-submit" name="go" id="go" value="price btn">
            GO
          </button>
        </div>
        <hr />
        <div className="text-container">
          <div className="text-icon">
            <RiArrowDropUpLine />
          </div>
          <div className="filter-text">PRICE</div>
        </div>
        <input
          className="searchbrand"
          type="text"
          name="text"
          id="text"
          placeholder="Search Type"
        ></input>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
          />
          <label className="form-check-label">High to Low</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
          />
          <label className="form-check-label">Low to High</label>
        </div>
        <hr />
        <div className="text-container">
          <div className="text-icon">
            <RiArrowDropUpLine />
          </div>
          <div className="filter-text">DELIVERY</div>
        </div>
        <input
          className="searchbrand"
          type="text"
          name="text"
          id="text"
          placeholder="Search Type"
        ></input>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
          />
          <label className="form-check-label">1 hr</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
          />
          <label className="form-check-label">1 hr - 2 hr</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
          />
          <label className="form-check-label">Next day</label>
        </div>
        <hr />
        <div className="text-container">
          <div className="text-icon">
            <RiArrowDropUpLine />
          </div>
          <div className="filter-text">POPULARITY</div>
        </div>
        <input
          className="searchbrand"
          type="text"
          name="text"
          id="text"
          placeholder="Search Type"
        ></input>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
          />
          <label className="form-check-label">1 star</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
          />
          <label className="form-check-label">2 star</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
          />
          <label className="form-check-label">3 star</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
          />
          <label className="form-check-label">4 star</label>
        </div>
        <hr />
        <div className="text-container">
          <div className="text-icon">
            <RiArrowDropUpLine />
          </div>
          <div className="filter-text">BRAND</div>
        </div>
        <input
          className="searchbrand"
          type="text"
          name="text"
          id="text"
          placeholder="Search Brand"
        ></input>
        <div className="checkbox-container">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue="Lipton"
              id="flexCheckDefault"
              onChange={handleChange}
            />
            <label className="form-check-label">Lipton (29)</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue="Tata"
              id="flexCheckDefault"
              onChange={handleChange}
            />
            <label className="form-check-label">Tata (23)</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue="Aashirvaad"
              id="flexCheckDefault"
              onChange={handleChange}
            />
            <label className="form-check-label">Aashirvaad (21)</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue="India Gate"
              id="flexCheckDefault"
              onChange={handleChange}
            />
            <label className="form-check-label">India Gate (17)</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue="Saffola"
              id="flexCheckChecked"
              onChange={handleChange}
            />
            <label className="form-check-label">Saffola (15)</label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue="Brooke Bond"
              id="flexCheckDefault"
              onChange={handleChange}
            />
            <label className="form-check-label">Brooke Bond (23)</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue="Madhur"
              id="flexCheckDefault"
              onChange={handleChange}
            />
            <label className="form-check-label">Madhur (23)</label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue="Cadbury"
              id="flexCheckDefault"
              onChange={handleChange}
            />
            <label className="form-check-label">Cadbury (23)</label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue="Nescafe"
              id="flexCheckDefault"
              onChange={handleChange}
            />
            <label className="form-check-label">Nescafe (23)</label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue="Goodlife"
              id="flexCheckDefault"
              onChange={handleChange}
            />
            <label className="form-check-label">Goodlife (23)</label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue="Organic Taffva"
              id="flexCheckDefault"
              onChange={handleChange}
            />
            <label className="form-check-label">Organic Tattva (23)</label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue="Safal"
              id="flexCheckDefault"
              onChange={handleChange}
            />
            <label className="form-check-label">Safal (23)</label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue="Gowardhan"
              id="flexCheckDefault"
              onChange={handleChange}
            />
            <label className="form-check-label">Gowardhan (23)</label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue="Patanjali"
              id="flexCheckDefault"
              onChange={handleChange}
            />
            <label className="form-check-label">Patanjali (23)</label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue="Maggi"
              id="flexCheckDefault"
              onChange={handleChange}
            />
            <label className="form-check-label">Maggi (23)</label>
          </div>
          <hr />
          <div className="text-container">
            <div className="text-icon">
              <RiArrowDropUpLine />
            </div>
            <div className="filter-text">VARIANT</div>
          </div>
          <input
            className="searchbrand"
            type="text"
            name="text"
            id="text"
            placeholder="Search Variant"
          ></input>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
            />
            <label className="form-check-label">Pack of 2 (12)</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
            />
            <label className="form-check-label">Pack of 5 (7)</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
            />
            <label className="form-check-label">Pack of 4 (3)</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
            />
            <label className="form-check-label">Jar (2)</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckChecked"
            />
            <label className="form-check-label">Pack of 12 (12)</label>
          </div>
          <hr />
          <div className="text-container">
            <div className="text-icon">
              <RiArrowDropUpLine />
            </div>
            <div className="filter-text">TYPE</div>
          </div>
          <input
            className="searchbrand"
            type="text"
            name="text"
            id="text"
            placeholder="Search Type"
          ></input>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              defaultValue="Tea/Coffee"
              onChange={handleChange}
            />
            <label className="form-check-label">Tea and Coffee (62)</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              defaultValue="Oil/Ghee"
              onChange={handleChange}
            />
            <label className="form-check-label">Oils & Ghee (37)</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              defaultValue="Rice"
              onChange={handleChange}
            />
            <label className="form-check-label">Rice (38)</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              defaultValue="Flours"
              onChange={handleChange}
            />
            <label className="form-check-label">Flour (32)</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckChecked"
              defaultValue="Dry Fruits"
              onChange={handleChange}
            />
            <label className="form-check-label">Dry Fruits (32)</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckChecked"
              defaultValue="Dal/Pulses"
              onChange={handleChange}
            />
            <label className="form-check-label">Dals & Pulses (32)</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckChecked"
              defaultValue="Sugar"
              onChange={handleChange}
            />
            <label className="form-check-label">Sugar (32)</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckChecked"
              defaultValue="Health Drink"
              onChange={handleChange}
            />
            <label className="form-check-label">Health Drink (32)</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckChecked"
              defaultValue="Honey"
              onChange={handleChange}
            />
            <label className="form-check-label">Honey (32)</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckChecked"
              defaultValue="Instant Food"
              onChange={handleChange}
            />
            <label className="form-check-label">Instant Food (32)</label>
          </div>
          <hr />
          <div className="text-container">
            <div className="text-icon">
              <RiArrowDropUpLine />
            </div>
            <div className="filter-text">SIZE</div>
          </div>
          <input
            className="searchbrand"
            type="text"
            name="text"
            id="text"
            placeholder="Search Size"
          ></input>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
            />
            <label className="form-check-label">1 Kg (62)</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
            />
            <label className="form-check-label">500 gm (37)</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
            />
            <label className="form-check-label">200 gm (38)</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
            />
            <label className="form-check-label">100 gm (32)</label>
          </div>

          {/* <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label">High to Low</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label className="form-check-label">Low to High</label>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Filter;
