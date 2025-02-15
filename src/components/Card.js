import React, { useEffect, useRef, useState } from 'react'
// import img from '../assets/images.jpeg'
import { useCart, useDispatchCart, useloading } from '../ContextReducer';

const Cart = (props) => {
  let foodItem = props.foodItems;
  let dispatch = useDispatchCart();
 let data = useCart();
  let options = props.options;
  // it is an inbuilt function
  let priceOptions = Object.keys(options);
//   const [qty, setQty] = useState(1)
//   const [size, setSize] = useState("")
//   const handleQty = (e) => {
//     setQty(e.target.value);
//   }
//   const handleOptions = (e) => {
//     setSize(e.target.value);
//   }
//   const handleAddtoCart = async () => {
    
//     let food = []
//     for (const item of data) {
//       if (item.id === foodItem._id) {
//         food = item;

//         break;
//       }
//     }
//     console.log(food)
//     console.log(new Date())
//     if (food != []) {
//       if (food.size === size) {
//         await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty: qty })
//         return
//       }
//       else if (food.size !== size) {
//         await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
//         console.log("Size different so simply ADD one more to the list")
//         return
//       }
//       return
//     }

//  await dispatch({type:"Add" , id:foodItem._id,img:foodItem.img , name:foodItem.name , price :finalPrice , qty:qty ,size :size})

//     // setBtnEnable(true)

//   }

  const [qty ,setQty] = useState(1);
  const [size , setSize]=useState('');
  
  const handleAddtoCart = async()=>{
    await dispatch({type:"Add" , id:foodItem._id,img:foodItem.img , name:foodItem.name , price :finalPrice , qty:qty ,size :size})
    console.log(data);
  }
  
  const priceRef =useRef();//for refrence
  let finalPrice =qty*parseInt(options[size]);
  useEffect(()=>{
    setSize(priceRef.current.value);
  },[])
  return (
    <div>
      <div>
        <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
        <div>  <img src={foodItem.img} className="card-img-top" alt="..." style={{contain :"contain !important", height:"200px", width:""}} /></div>
          <div className="card-body">
            <h5 className="card-title">{foodItem.foodName}</h5>
            {/* <p className="card-text">This is some Important text.</p> */}
            <div className='container w-100'></div>
            <select className='m-2 h-100  bg-success rounded' onChange={(e)=>setQty(e.target.value)} >
              {
                Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  )
                })
              }
            </select>
            <select className='m-2 h-100  bg-success rounded'  ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
              {priceOptions.map((data) => {
                return (
                  <option key={data} value={data}>{data}</option>
                )
              })}
            </select>
            <div className='d-inline h-100 fs-5'>${finalPrice}-/</div>
            <hr></hr>
            <div className='btn bg-success justify-center ms-2' onClick={handleAddtoCart}>Add to Cart</div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Cart
