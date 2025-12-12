const categoriesData = [
 {
  id: 1,
  title: "Sedan",
  image: "/Sedan.png",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quibusdam!",
  link: "#"
 },
 {
  id: 2,
  title: "Hetchback",
  image: "/HetchBack.png",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quibusdam!",
  link: "#"
 },
 {
  id: 3,
  title: "Combi",
  image: "/Combi.png",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quibusdam!",
  link: "#"
 },
 {
  id: 4,
  title: "Suv",
  image: "/SUV.png",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quibusdam!",
  link: "#"
 }
];

function CarsCategory() {
 return (
  <div className="CarsCategorySection">
   <div className="container">
    <div className="row">
     <div className="col-lg-12 col-md-12">

      <div className="Cat-Boxes d-flex justify-space-between align-items-center flexwrap">

       {categoriesData.map((category) => (
        <a href={category.link} key={category.id}>
         <div className="Category-Childs d-flex align-items-center">

          <div className="Car-Image">
           <img
            src={category.image}
            className="img-cover"
            alt={category.title}
           />
          </div>

          <div className="Car-Content">
           <div className="Heading-Title">
            <h3>{category.title}</h3>
           </div>
           <div className="Para">
            <p>{category.description}</p>
           </div>
          </div>

         </div>
        </a>
       ))}

      </div>

     </div>
    </div>
   </div>
  </div>
 );
}

export default CarsCategory;