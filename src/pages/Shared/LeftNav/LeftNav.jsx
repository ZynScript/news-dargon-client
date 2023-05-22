import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const LeftNav = () => {
  const [categoreis, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://news-dragon-server-zynscript.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h4>All Category</h4>
      <div className="ps-4">
        {categoreis.map((category) => (
          <p key={category.id}>
            <Link
              to={`/category/${category.id}`}
              className="text-decoration-none text-secondary">
              {category.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
