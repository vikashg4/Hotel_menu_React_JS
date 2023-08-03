import React from "react";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import MenuContentCard from "../MenuContentCard";
import menuContentData from "../MenuContent.json";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

function Home() {
  return (
    <div className="container p-5">
      <div className="container-fluid">
        <div className="row ">
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex align-items-stretch" style={{marginTop:'5px'}}>
            <div
              className="shadow rounded  w-100 position-relative  fluid leftimage"
              style={{
                backgroundImage: `url(${"images/food.jpg"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                padding: "5px",
                borderRadius: "5px",
              }}
            >
              {/* <img
              src="images/food.jpg"
              className="img-fluid"
              alt="Restaurant"
            /> */}
              <div className=" p-3 d-flex justify-content-end bottom-0 mb-5 end-0 position-absolute">
                <h4>
                  <a
                    style={{
                      color: "#964B00",
                      textDecoration: "none",
                      fontSize: "18px",
                    }}
                    href="https://www.revinfotech.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.revinfotech.com
                  </a>
                </h4>
              </div>
              <div className="p-3 d-flex justify-content-end position-absolute bottom-0 end-0 mb-3">
                <a
                  href="https://www.facebook.com/your-facebook-profile"
                  className="mx-2"
                  color="black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={30} color="#3b5998" />
                </a>
                <a
                  href="https://www.instagram.com/your-instagram-profile"
                  className="mx-2"
                  color="black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={30} color="#962fbf" />
                </a>
                <a
                  href="https://twitter.com/your-twitter-profile"
                  className="mx-2"
                  color="black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter size={30} color="#00acee" />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=your-whatsapp-number"
                  className="mx-2"
                  color="black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={30} color="#075e54" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex align-items-stretch" style={{marginTop:'5px'}}>
            <div
              className="shadow rounded p-3 w-100"
              style={{
                backgroundImage: `url(${"images/Coffee.png"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                padding: "5px",
                borderRadius: "5px",
              }}
            >
              <div>
                {menuContentData.menuItems.map((menuItem) => (
                  <MenuContentCard key={menuItem.id} menuItem={menuItem} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
