import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";  



export default function CompanyCarousel() {
  let data = [
    "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/Apple-logo.png" ,
    "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/Logo-0-0032-samsung.png",
    "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/one-plus-logo.png",
    "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/mi.png",
    "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/Logo-0-0031-oppo.png",
    "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/tecno-brand-logo.png",
    "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/realme-logo-1.png",
    "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/moto-logo.png",
    "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/Logo-0-0027-Nokia.png",
    "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/Logo-0-0026-Vivo.png",
    "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/Logo-0-0011-Group-15.png",
    "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/Apple-logo.png" ,
    "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/Logo-0-0032-samsung.png",
    "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/one-plus-logo.png",
    "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/mi.png",
    "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=70,height=70,quality=75/brand/Logo-0-0031-oppo.png",

  ];


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 9,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="CompanyCarousel">
      <Carousel responsive={responsive} className="logos-div"> 
          {data.map((data, idx) => {
            return (
              <div key={idx} style={{ textAlign: "center" }}>
                <img
                  style={{ width: "60px", height: "60px" }}
                  variant="top"
                  src={data}
                />
              </div>
            );
          })} 
      </Carousel>
    </div>
  );
}
