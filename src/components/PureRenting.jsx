import { FaRightLong } from 'react-icons/fa6';
import { HiArrowSmRight } from 'react-icons/hi';

const pureNextData = {
 info: {
  title: "RENTING IS PURE CONVENIENCE",
  description: "Maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas.",
  button: {
   "text": "Check Your Car",
   "link": "/CheckYourCar"
  }
 },
 image: {
  src: "/audi.webp",
  alt: "Audi Car"
 },
 features: [
  {
   id: 1,
   text: "Service and full care included"
  },
  {
   id: 2,
   text: "Possibility of changing the car."
  },
  {
   id: 3,
   text: "Predictable costs of operating the car"
  }
 ]
};

function PureNext() {
 return (
  <div className="row align-items-center">
   <div className="col-lg-4 col-md-6">
    <div className="Next-Gen d-flex flexcolumn">
     <div className="SubHeading">
      <h2>{pureNextData.info.title}</h2>
     </div>
     <div className="Para">
      <p>{pureNextData.info.description}</p>
     </div>
     <div className="Secondry-Button">
      <a href={pureNextData.info.button.link} className="align-items-center">
       {pureNextData.info.button.text} <FaRightLong />
      </a>
     </div>
    </div>
   </div>
   <div className="col-lg-4 col-md-6">
    <div className="Mid-Image">
     <img
      src={pureNextData.image.src}
      className='img-cover'
      alt={pureNextData.image.alt}
     />
    </div>
   </div>
   <div className="col-lg-4 col-md-12">
    <div className="RenyList">
     <ul className="ListRental d-flex flexcolumn">

      {pureNextData.features.map((feature) => (
       <li key={feature.id} className="Rental d-flex align-items-center">
        <div className="ArrowRight d-flex align-items-center justify-content-center">
         <HiArrowSmRight />
        </div>
        <div className="Description">
         <p>{feature.text}</p>
        </div>
       </li>
      ))}
     </ul>
    </div>
   </div>

  </div>
 );
}

export default PureNext;