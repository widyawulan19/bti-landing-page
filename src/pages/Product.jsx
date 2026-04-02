import React, { useEffect, useState } from "react";
import '../styles/pages/Product.css'
import logo from '../assets/logoBTI2.png';
import { useNavigate } from "react-router-dom";
import AOS from 'aos'

// catalogData.js
export const brandMap = {
  "Power Transmission": [1,2,3,4,5,6,7,8,9,10,11, 12],
  "Material Handling": [13,14,15,16],
  "Automation":[17,18,19,20,21,22,23,24],
  "Warehouse System":[25],
  "Pumps Valves":[26,27],
  "Electric":[28],
  "Machines Element":[29],
  "Pneumatics":[30],
  "Plastics Machines & Accessories":[31],
  "Machinery, Tool, Welding & Cutting": [32,33],
  "Food and beverages machinery":[34,35],
  "EPC, Service and Maintenance, Civil Construction":[36,37,38],
  "Manufacturing":[39,40]
};

function Product() {
  const [selected, setSelected] = useState(null);
  const [activeBrand, setActiveBrand] = useState("All");
  const [search, setSearch] = useState(""); // 🔥 tambah search
  const navigate = useNavigate();

  const totalPages = 40;

  // 🔥 generate semua halaman
  const allPages = Array.from({ length: totalPages }, (_, i) => ({
    id: i + 1,
    image: `/catalog/cb-${i + 1}.jpg`,
  }));

  // 🔥 gabungkan brand ke tiap halaman
  const catalog = allPages.map((item) => {
    let brand = "Other";

    for (const key in brandMap) {
      if (brandMap[key].includes(item.id)) {
        brand = key;
        break;
      }
    }

    return { ...item, brand };
  });

  // 🔥 list brand
  const brands = ["All", ...Object.keys(brandMap)];

  // 🔥 FILTER + SEARCH (digabung)
  const filtered = catalog.filter((item) => {
    const matchBrand =
      activeBrand === "All" || item.brand === activeBrand;

    const matchSearch =
      item.brand.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toString().includes(search); // bisa search nomor halaman juga

    return matchBrand && matchSearch;
  });

  const goToLanding = () =>{
    navigate("/")
  }

  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:false,
      mirror:true
    })
  })

  return (
    <div className="catalog-container">
      <div className="catalog-navbar">
        <h4 onClick={goToLanding}>Landing Page</h4>
        <img src={logo} alt="Logo pic" />
      </div>

      <h1 className="catalog-title">Product Catalog</h1>

      {/* 🔍 SEARCH */}
      <input
        type="text"
        placeholder="Search category here ..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* FILTER */}
      <div className="filter-wrapper">
        <div className="filter-bar">
          {brands.map((b) => (
            <button
              key={b}
              className={activeBrand === b ? "active" : ""}
              onClick={() => setActiveBrand(b)}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      {/* GRID */}
      <div className="catalog-grid">
        {filtered.map((item,index) => (
          <div
            key={item.id}
            className="catalog-card"
            onClick={() => setSelected(item.image)}
            data-aos='fade-up'
          >
            <img src={item.image} alt={`Page ${item.id}`} loading="lazy" />
            <div className="overlay">
              <span>View</span>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <img src={selected} alt="preview" />
        </div>
      )}
    </div>
  );
}

export default Product;