import Carousel from "react-bootstrap/Carousel";
import "./Home.css" 

export default function Carousell() {
  let data = [
    "https://img-prd-pim.poorvika.com/cdn-cgi/image/quality=75/pageimg/Apple-Iphone-14.jpg",
    "https://img-prd-pim.poorvika.com/cdn-cgi/image/quality=75/pageimg/galaxy-Z-fold5-Z-flip5-web.jpg",
    "https://img-prd-pim.poorvika.com/cdn-cgi/image/quality=75/pageimg/oneplus-plus-3-5g-at-poorvika-01.jpg",
    "https://img-prd-pim.poorvika.com/cdn-cgi/image/quality=75/pageimg/Redmi-12-smartphone-2.jpg",
    "https://img-prd-pim.poorvika.com/cdn-cgi/image/quality=75/pageimg/OPPO-A78.jpg",
    "https://img-prd-pim.poorvika.com/cdn-cgi/image/quality=75/pageimg/Realme-11-and-11X-New.jpg",
    "https://img-prd-pim.poorvika.com/cdn-cgi/image/quality=75/pageimg/Vivo-V29e-smartphone.jpg",
    "https://img-prd-pim.poorvika.com/cdn-cgi/image/quality=75/pageimg/Vivo-Y27.jpg",
  ];
  return (
    <div className="Carousell">
      <Carousel >
        {data.map((data, idx) => {
          return (
            <Carousel.Item key={idx} interval={1500}>
              <img className="Carousell" src={data} alt={data} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
