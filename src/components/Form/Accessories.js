import React, {useState} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import  Carousel  from 'react-simply-carousel'
import Accessory from './Accessory';

const accessories = [
  {
      id : 1,
      name : "Detergent holder and bin holder",
      image : "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1659109204/Detergent_holder_and_bin_holder_srvdhk.jpg",
      width : 2,
      price : 200
  },
  {
    id : 2,
    name : "Detergent holder (350mm) designs",
    image : "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1659109204/Detergent_holder_designs_uadwlo.jpg",
    width : 3,
    price : 200
  },
  {
    id : 3,
    name : "Cutlery cup & saucer thali tray designs",
    image : "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1659109204/Cutlery_tray_designs_hx0315.jpg",
    width : 4,
    price : 150
  },
  {
    id : 4,
    name : "Verticle Bottle pull-out designs",
    image : "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1659109204/Bottle_pullout_designs_ra3xsz.jpg",
    width : 3,
    price : 150
  },
  {
    id : 5,
    name : "Tandem drawer designs",
    image : "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1659353217/Tandem_Drawer_designs_npp4vd.jpg",
    width : 4,
    price : 170
  },
  {
    id : 6,
    name : "Microwave and otg provision",
    image : "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1659109204/Microwave_and_otg_prg9ug.jpg",
    width : 3,
    price : 250
  }

]

export const grossAccWidth = (selectedAccessories) => {
  let acc = 0 
  selectedAccessories.forEach((selectedAccessorie)=> 
   { 
    
    const selectedAccessorie2 = accessories.filter((accessorie)=>accessorie.width === selectedAccessorie );
    acc += selectedAccessorie2.width;
  }
  )
  return acc;
}

const arrowStyles = {
  width: 50,
  height: 50,
  minWidth: 30,
  borderRadius: 25,
  alignSelf: "center",
  color: "#ffffff",
  backgroundColor : "#540000cc"
}

function Accessories() {

  
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
    <div className='accessories'>
        <h3>
        Accessories
        </h3>
        <Carousel
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between",
            userSelect: "text"
          }
        }}
        activeSlideIndex={activeSlide}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: ">",
          style: arrowStyles
        }}
        backwardBtnProps={{
          children: "<",
          style: arrowStyles
        }}
        itemsToShow={5}
        speed={400}
      >
        {accessories.map(( accessorie,index) => (
          
            <Accessory accessory = { accessorie} id = {accessorie.id} image = {accessorie.image} name={accessorie.name} key={index} />
          
          
        ))}
      </Carousel>

       </div> 
    </>
  )
}

export default Accessories