import React from "react";

const MenuContentCard = ({ menuItem }) => {
  return (
    <div style={{ fontFamily: "Damion, cursive", marginLeft: "18px" }}>
      {menuItem.sections.map((section, index) => (
        <div
          style={{
            border: section.title === "Green Salads" && "2px solid white",
            borderRadius: "20px",
            width: section.title === "Green Salads" && "50%",
            marginLeft: "10px",
          }}
          className="my-2 p-3 "
        >
          <div key={section.title} style={{ color: "white" }}>
            <h3 className="mt-3">{section.title}</h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "10px",
                color: "#FAD5A5		",
              }}
            >
              {section.items.map((item) => (
                <div
                  key={item.title}
                  style={{
                    display: "flex",
                  }}
                >
                  <div className="my-2">
                    <strong style={{ fontSize: "20px" }}>{item.title}</strong>
                    <p style={{ fontSize: "17px" }}>{item.body}</p>
                  </div>
                  <div
                    style={{
                      backgroundColor: "#FFBF00	",
                      borderRadius: "50%",
                      width: "35px",
                      height: "35px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "20px",
                      color: "#000",
                    }}
                  >
                    ${item.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuContentCard;
