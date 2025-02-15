import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import img from '../assets/burger.jpeg'
// import { Card } from 'react-bootstrap'
const Home = () => {
  const [search , setSearch] = useState('');
  const [foodCat, setfoodCat] = useState([]);
  const [foodItem, setfoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("https://foodhub-m453.onrender.com/api/auth/foodData", {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
      }
    })
    const responsedata = await response.json();
    setfoodItem(responsedata[0]);
    setfoodCat(responsedata[1]);
    // console.log(responsedata[0], responsedata[1]);
  }
  useEffect(() => {
    loadData();
  }, [])
  return (
    <div>
      <div><Navbar /></div>

      <div>

        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className='carousel-caption' style={{ "zIndex": "10" }}>
              <div className="d-flex justify-content-center" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search}  onChange={(e)=>{setSearch(e.target.value)}}/>
                {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
              </div>
            </div>
            <div className="carousel-item active">
              <img src="https://t4.ftcdn.net/jpg/02/59/77/71/240_F_259777118_87AFYXDLfrdDzMSwWUI7oEExUjnMFxyE.jpg" className="d-block w-100" alt="..." style={{ "height": "380px", objectFit: "contain !important" }} />
            </div>
            <div className="carousel-item">
              <img src="https://t4.ftcdn.net/jpg/02/09/64/33/240_F_209643310_7tdlZx6oMF9iPqnt2PzbXdfYTNKGohdm.jpg" className="d-block w-100" alt="..." style={{ "height": "380px", objectFit: "contain !important" }} />
            </div>
            <div className="carousel-item">
              <img src="https://t4.ftcdn.net/jpg/03/07/10/91/240_F_307109106_HP89tumY3j7hntTCB3o8aFCShR5L4neC.jpg" className="d-block w-100" alt="..." style={{ "height": "380px", objectFit: "contain !important" }}/>
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
        {foodCat.length > 0 ? foodCat.map((data) => {
          return (
            <div className='row mb-3 justify-content-arround' key={data.id}>
              <div className='fs-3 m-3'>{data.CategoryName} </div>
              <hr />
              {foodItem.length > 0 ?
                foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
                  .map((filterdata) => {
                    {/* console.log(filterdata) */}
                    return (
                      <div className='col-12 col-md-6 col-lg-3 m-2' key={filterdata.id}>
                        {/* <Card foodName={filterdata.name}
                          options={filterdata.options[0]}
                          imgsrc={filterdata.img}
                        ></Card> */}
                        <Card foodItems={filterdata}
                          options={filterdata.options[0]}
                     
                        ></Card>

                      </div>

                    );
                  }) : <div className='container'>not any category</div>}
            </div>
          );
        }) : <div>"not any item"</div>}
      </div>

      <div> <Footer /> </div>

    </div>
  )
}

export default Home
