import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Admin = () => {
  const [menus, setMenu] = useState([]);

  useEffect(() => {
    document.title = "QR-Admin";
    loadMenus();
  }, []);

  const loadMenus = async () => {
    const result = await axios.get("http://localhost:3003/Menus");
    setMenu(result.data.reverse());
  };

  const deleteMenu = async id => {
    await axios.delete(`http://localhost:3003/Menus/${id}`);
    loadMenus();
  };

  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <div>
      test
    </div>
                 
  );
};

export default Admin;
