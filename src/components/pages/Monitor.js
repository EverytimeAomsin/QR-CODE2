import React, { useState, useEffect } from "react";
import {  useParams } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components';

import '../../css/showimg.css'


const Monitor = () => {
  const [Menu, setMenu] = useState({
    id: "",
    MenuName: "",
    Description: "",
    img: ""
  });
  const { id } = useParams();
  useEffect(() => {
    document.title = {};
    loadMenu();
  }, []);
  const loadMenu = async () => {
    const res = await axios.get(`http://localhost:3003/Menus/${id}`);
    setMenu(res.data);
  };
  return (
    <div class="responsive">
        <h1>{Menu.MenuName}</h1>
        <p style={{backgroundColor:'white'}}>{Menu.Description} </p>
        <img className="img-fluid shadow-4"  src={Menu.img} />
    </div>
  );
};

export default Monitor;
