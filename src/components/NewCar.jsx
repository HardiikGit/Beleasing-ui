import { FaRightLong, FaArrowRightLong } from 'react-icons/fa6';
import PureNext from './PureRenting';

const newCarsData = {
 header: {
  title: "Choose From 1,200 New Cars",
  ctaText: "See All",
  ctaLink: "#"
 },
 cars: [
  {
   id: 1,
   name: "Bmw Commando Ipsum",
   image: "/bmv.webp",
   detailsLink: "#"
  },
  {
   id: 2,
   name: "Ford Enim Nibh Litora",
   image: "/ford.webp",
   detailsLink: "#"
  },
  {
   id: 3,
   name: "Lamborghini Rutrum Libero",
   image: "/lamb.webp",
   detailsLink: "#"
  }
 ]
};

function NewCar() {
 return (
  <div className='NewCarsSection'>
   <div className="container">
    <div className="row">
     <div className="col-lg-12">
      <div className="Second-Heading d-flex align-items-center justify-space-between">
       <div className="SubHeading">
        <h2>{newCarsData.header.title}</h2>
       </div>
       <div className="Secondry-Button">
        <a href={newCarsData.header.ctaLink} className='d-flex align-items-center'>
         {newCarsData.header.ctaText} <FaRightLong />
        </a>
       </div>
      </div>
      <div className="NewCarsCollection d-flex align-items-center justify-space-between flexwrap">
       {newCarsData.cars.map((car) => (
        <div key={car.id} className="NewCar-Wrapper">
         <div className="NewCar-Image">
          <img src={car.image} className='img-cover' alt={car.name} />
         </div>
         <div className="Box-fl">
          <div className="CarImage-Name">
           <h3>{car.name}</h3>
          </div>
          <div className="Check-Details">
           <a href={car.detailsLink} className='d-flex align-items-center justify-space-between'>
            Check Details <FaArrowRightLong />
           </a>
          </div>
         </div>
        </div>
       ))}

      </div>

     </div>
    </div>
    <PureNext />

   </div>
  </div>
 );
}

export default NewCar;