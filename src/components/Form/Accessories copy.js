import React, {useState} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import  Carousel  from 'react-simply-carousel'
const accessories = [
  {
      id : 1,
      name : "detergent holder and bin holder",
      image : "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1659109204/Detergent_holder_and_bin_holder_srvdhk.jpg",
      width : 2,
      price : 400
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
    price : 300
  },
  {
    id : 4,
    name : "Bottle pull-out (300mm soft-close channels) designs",
    image : "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1659109204/Bottle_pullout_designs_ra3xsz.jpg",
    width : 3,
    price : 150
  },
  {
    id : 5,
    name : "Tandem drawer (soft-close channels without gallery ) designs",
    image : "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1659109204/Tandem_Drawer_designs_wbzgpz.jpg",
    width : 1,
    price : 230
  },
  {
    id : 6,
    name : "Microwave and otg provision with one shelf and one drawer designs",
    image : "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1659109204/Microwave_and_otg_prg9ug.jpg",
    width : 3,
    price : 250
  }

]

const arrowStyles = {
  width: 30,
  height: 30,
  minWidth: 30,
  alignSelf: "center"
}

function Accessories() {

  
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
        <label>
        Accessories
        </label>
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
        itemsToShow={2}
        speed={400}
      >
        {accessories.map(( accessorie) => (
          <>
          <div
            key={accessorie.id}
          >
            <img style={{width:"150px", margin: "5px"}} src={accessorie.image}/>
            <input value="Add" type="button"/>
          </div>
          
          </>
        ))}
      </Carousel>
        
    </>
  )
}

export default Accessories