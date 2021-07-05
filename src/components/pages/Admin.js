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
      <h1>test</h1>
    </div>
    
  );
};

export default Admin;
