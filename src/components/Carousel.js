import React from 'react'
import img from '../assets/burger.jpeg'
const Crausel = () => {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade">
                <div className="carousel-inner">
                    <div className='carousel-caption' style={{"zIndex":"10"}}>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="carousel-item active">
                        <img src={img} className="d-block w-100" alt="..." style={{ "height": "380px", objectFit: "contain !important" }} />
                    </div>
                    <div className="carousel-item">
                        <img src="" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="" className="d-block w-100" alt="..." />
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
    )
}

export default Crausel
