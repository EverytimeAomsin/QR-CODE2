import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams, Link } from "react-router-dom";
import '../../css/add.css'

const Editmenu = () => {
  let history = useHistory();
  const { Id } = useParams();
  const [menu, setUser] = useState({
    MenuName: "",
    Description: "",
    img: ""
  });

  const { MenuName, Description, img } = menu;
  const onInputChange = e => {
    setUser({ ...menu, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/Menus/${Id}`, menu);
    history.push("/Admin");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/Menus/${Id}`);
    setUser(result.data);
  };
  return (
    <div style={{ backgroundColor: '#A2DBFA' }}>
      <Link style={{ marginBottom: '3px', textDecoration: "none" }}
        class="btn btn-outline-primary mr-1"
        to={`/Admin`}
      ><button className="button button1" style={{ marginTop: '15px', marginLeft: '20px' }}>ย้อนกลับ</button></Link>
      <div className="add" style={{ width: '100vw' }}>
        <h1>Add menu</h1>
        <form onSubmit={e => onSubmit(e)}>
          <p>MenuName : <input style={{ width: '90vw' }}
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your Name"
            name="MenuName"
            value={MenuName}
            onChange={e => onInputChange(e)}
          /></p>
          <p> Description : <textarea style={{ width: '90vw' }}
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your Name"
            name="Description"
            value={Description}
            onChange={e => onInputChange(e)}
          /></p>
          <p> ที่อยู่รูป :
            <input style={{ width: '90vw' }}
              type="text"
              className="form-control form-control-lg"
              placeholder="ที่อยู่รูป"
              name="img"
              value={img}
              onChange={e => onInputChange(e)}
            /></p>
          <div style={{ flexgrow: '4' }}>

          </div>
          <button className="button button1" style={{ marginTop: '15px' }}>ทำการแก้ไข</button>

        </form>
      </div>

    </div>
  );
};

export default Editmenu;
