import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { HiOutlineBars3, HiXMark } from 'react-icons/hi2';

const headerData = {
  logo: {
    src: "/beleasing2.png",
    alt: "Be Leasing Logo",
    text: "Luxury Cars For You",
    link: "/"
  },
  menuItems: [
    { id: 1, label: "Home", link: "#", hasDropdown: false },
    { id: 2, label: "Offer", link: "#", hasDropdown: true },
    { id: 3, label: "About", link: "#", hasDropdown: false },
    { id: 4, label: "Contact", link: "#", hasDropdown: false }
  ]
};

function HeaderSection() {
  const [isToggled, setIsToggled] = useState(false);
  const [ishovered, setIsHovered] = useState(false);

  return (
    <header className="MainHeader">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-3 col-sm-12">
            <div className="Head-Logo d-flex align-items-center">
              <div className="Logo-Image">
                <a href={headerData.logo.link}>
                  <img src={headerData.logo.src} className="img-cover d-flex" alt={headerData.logo.alt} />
                </a>
              </div>
              <div className="Logo-Name">
                <h4>{headerData.logo.text}</h4>
              </div>
              <div className="HamBurg d-none">
                <button className='Toggle-Button d-flex' onClick={() => setIsToggled(!isToggled)}>
                  <HiOutlineBars3 />
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-9 col-sm-12">
            <div className={`NavBar d-flex justify-content-end ${isToggled ? 'isOpen' : ''}`}>
              <ul className="Nav-fl d-flex align-items-center relative">
                <li className='X-Cross d-none absolute'>
                  <button className='Close-Nav'>
                    <HiXMark onClick={() => setIsToggled(!isToggled)} />
                  </button>
                </li>
                {headerData.menuItems.map((item) => (
                  <li key={item.id} className="Nav-Items">
                    <a
                      href={item.link}
                      className={item.hasDropdown ? 'd-flex align-items-center' : ''}
                      onMouseEnter={item.hasDropdown ? () => setIsHovered(true) : undefined}
                      onMouseLeave={item.hasDropdown ? () => setIsHovered(false) : undefined}
                    >
                      {item.label}
                      {item.hasDropdown && <FaAngleDown className='Down-Pin' />}
                    </a>
                  </li>
                ))}

              </ul>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

export default HeaderSection;