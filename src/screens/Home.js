import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Carousel from '../components/Carousel';
import img from '../assets/burger.jpeg';
import { useloading } from '../ContextReducer';

const Home = () => {
  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const { loaded, setLoaded } = useloading();

  const loadData = async () => {
    setLoaded(false);
    try {
      let response = await fetch("https://foodhub-m453.onrender.com/api/auth/foodData", {
        method: "POST",
        headers: {
          'Content-Type': "application/json",
        }
      });
      const responseData = await response.json();
      setFoodItem(responseData[0]);
      setFoodCat(responseData[1]);
    } catch (error) {
      console.error("Failed to load data:", error);
    }
    setLoaded(true);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className='carousel-caption' style={{ zIndex: "10" }}>
              <div className="d-flex justify-content-center" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            <div className="carousel-item active">
              <img src="https://t4.ftcdn.net/jpg/02/59/77/71/240_F_259777118_87AFYXDLfrdDzMSwWUI7oEExUjnMFxyE.jpg" className="d-block w-100" alt="..." style={{ height: "380px", objectFit: "contain !important" }} />
            </div>
            <div className="carousel-item">
              <img src="https://t4.ftcdn.net/jpg/02/09/64/33/240_F_209643310_7tdlZx6oMF9iPqnt2PzbXdfYTNKGohdm.jpg" className="d-block w-100" alt="..." style={{ height: "380px", objectFit: "contain !important" }} />
            </div>
            <div className="carousel-item">
              <img src="https://t4.ftcdn.net/jpg/03/07/10/91/240_F_307109106_HP89tumY3j7hntTCB3o8aFCShR5L4neC.jpg" className="d-block w-100" alt="..." style={{ height: "380px", objectFit: "contain !important" }} />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className='container text-center'>
        {loaded ? (
          <>
            {foodCat.length > 0 ? (
              foodCat.map((data) => (
                <div className='row mb-3 justify-content-around' key={data.id}>
                  <div className='fs-3 m-3'>{data.CategoryName}</div>
                  <hr />
                  {foodItem.length > 0 ? (
                    foodItem.filter(
                      (item) => item.CategoryName === data.CategoryName && item.name.toLowerCase().includes(search.toLowerCase())
                    ).map((filteredData) => (
                      <div className='col-12 col-md-6 col-lg-3 m-2' key={filteredData.id}>
                        <Card foodItems={filteredData} options={filteredData.options[0]} />
                      </div>
                    ))
                  ) : (
                    <div className='container'>No items in this category</div>
                  )}
                </div>
              ))
            ) : (
              <div>No items available</div>
            )}
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
