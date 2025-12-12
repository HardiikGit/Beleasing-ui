import { FaRightLong } from 'react-icons/fa6';
import { IoStarSharp } from 'react-icons/io5';
const bannerData = {
 heading: "WE'LL FIND FOR YOU THE \n BEST CAR FOR LEASING",
 review: {
  rating: 5,
  label: "Sales-Quality"
 },
 ctaButton: {
  text: "Check Your Car",
  url: "#CheckYourCar"
 },
 steps: [
  {
   id: 1,
   text: "1. Choose From 1200 New Cars",
   className: "O1"
  },
  {
   id: 2,
   text: "2. Choose Equipment",
   className: "O2"
  },
  {
   id: 3,
   text: "3. Contact Us",
   className: "O3"
  }
 ]
};

function BannerSection() {
 return (
  <div className="BannerSection d-flex align-items-center justify-content-center">
   <div className="container">
    <div className="row">
     <div className="col-lg-12">
      <div className="Banner-Contant d-flex justify-space-between">

       <div className="Banner-Heading">
        <h1 style={{ whiteSpace: 'pre-line' }}>
         {bannerData.heading}
        </h1>
       </div>

       <div className="Banner-Review">
        <div className="Review-Content d-flex align-items-center flexcolumn">
         <div className="Banner-Stars">
          <ul className="d-flex align-items-center">
           {[...Array(bannerData.review.rating)].map((_, index) => (
            <li key={index} className="Stars">
             <IoStarSharp />
            </li>
           ))}
          </ul>
         </div>
         <div className="Mid-Line"></div>
         <div className="Sales-Quality">
          <p>{bannerData.review.label}</p>
         </div>
        </div>
       </div>
      </div>
      <div className="Main-Button">
       <a href={bannerData.ctaButton.url} className="align-items-center">
        {bannerData.ctaButton.text} <FaRightLong />
       </a>
      </div>
      <div className="Purchase-Steps d-flex flexwrap">
       {bannerData.steps.map((step) => (
        <div key={step.id} className={step.className}>
         <p>{step.text}</p>
        </div>
       ))}
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}

export default BannerSection;