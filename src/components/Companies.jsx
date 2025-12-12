const companiesData = {
 featureCards: [
  {
   id: 1,
   image: "/khu.webp",
   title: "Audi Litora Nec Amet",
   description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, repudiandae quae ex ipsum id possimus ullam quia ab atque!",
   link: "#"
  },
  {
   id: 2,
   image: "/dash.webp",
   title: "Mercedes Mattis Arcu Maximus",
   description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, repudiandae quae ex ipsum id possimus ullam quia ab atque!",
   link: "#"
  }
 ],
 brandLogos: [
  { id: 1, image: "/AUDI.png", name: "Audi" },
  { id: 2, image: "/BMW.png", name: "BMW" },
  { id: 3, image: "/ford.png", name: "Ford" },
  { id: 4, image: "/LEXUS.png", name: "Lexus" },
  { id: 5, image: "/hyundai.png", name: "Hyundai" },
  { id: 6, image: "/citron.png", name: "Citron" }
 ]
};

function Companies() {
 return (
  <div className="MainCompaniesSection">
   <div className="container">
    <div className="row">
     {companiesData.featureCards.map((card) => (
      <div key={card.id} className="col-lg-6 col-md-6 col-sm-12">
       <div className="Images-View relative">
        <img src={card.image} className="img-cover" alt={card.title} />
       </div>
       <div className="ImageText absolute">
        <div className="ImageHeading">
         <a href={card.link}>{card.title}</a>
        </div>
        <div className="para">
         <p>{card.description}</p>
        </div>
       </div>
      </div>
     ))}
    </div>
    <div className="row">
     <div className="col-lg-12">
      <div className="Compaines-Images d-flex align-items-center justify-space-between flexwrap">
       {companiesData.brandLogos.map((logo) => (
        <div key={logo.id} className="Images-Comp">
         <img src={logo.image} className="img-cover" alt={logo.name} />
        </div>
       ))}
      </div>
     </div>
    </div>

   </div>
  </div>
 );
}

export default Companies;