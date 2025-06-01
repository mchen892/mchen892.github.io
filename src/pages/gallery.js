import React from "react";
import MobileNav from "../components/sideNavBar";

const Gallery = () => {
    const fashionItems = [
        { id: 1, src: "../../public/dresses/childDress.png", caption: "Elegant Evening Dress" },
        { id: 2, src: "/images/dress2.jpg", caption: "Casual Summer Outfit" },
        { id: 3, src: "/images/dress3.jpg", caption: "Chic Winter Coat" },
        { id: 4, src: "/images/dress4.jpg", caption: "Stylish Party Wear" },
    ];

    return (
        <>

            <MobileNav />
            <div style={{ padding: "20px" }}>
                <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Fashion Gallery</h1>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                        gap: "20px",
                    }}
                >
                    {fashionItems.map((item) => (
                        <div
                            key={item.id}
                            style={{
                                border: "1px solid #ddd",
                                borderRadius: "8px",
                                overflow: "hidden",
                                textAlign: "center",
                            }}
                        >
                            <img
                                src={item.src}
                                alt={item.caption}
                                style={{ width: "100%", height: "auto" }}
                            />
                            <p style={{ padding: "10px", fontSize: "16px", fontWeight: "bold" }}>
                                {item.caption}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Gallery;