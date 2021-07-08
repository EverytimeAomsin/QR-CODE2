import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams, Link } from "react-router-dom";
import '../../css/add.css'
import '../../css/Edit.css'

const Editmenu = () => {
  let history = useHistory();
  const { Id } = useParams();
  const [menu, setMenu] = useState({
    MenuName: "",
    Description: "",
    img: ""
  });

  const { MenuName, Description, img } = menu;
  const onInputChange = e => {
    setMenu({ ...menu, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadMenu();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/Menus/${Id}`, menu);
    history.push("/Admin");
  };

  const loadMenu = async () => {
    const result = await axios.get(`http://localhost:3003/Menus/${Id}`);
    setMenu(result.data);
  };

  const deleteMenu = async id => {
    await axios.delete(`http://localhost:3003/Menus/${id}`);
    loadMenu();}
  return (
    <div >
      <Link style={{ marginBottom: '3px', textDecoration: "none" }}
        to={`/Admin`}
      ><button className="button button1" style={{ marginTop: '15px' }}>ย้อนกลับ</button></Link>
      <div className="add" style={{ width: '100vw' ,backgroundColor: '#EEEEEE'  }}>
      <img style={{maxWidth: '40%'}} src={menu.img} />
        <h1>Add menu</h1>
        <form onSubmit={e => onSubmit(e)}>
        <h4 style={{ textAlign:"left", marginLeft:'10px'}}>ชื่อ : </h4><input style={{ width: '95vw' }}
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your Name"
            name="MenuName"
            value={MenuName}
            onChange={e => onInputChange(e)}
          />
         <h4 style={{ textAlign:"left", marginLeft:'10px'}}>Description : </h4> <textarea style={{ width: '95vw' }}
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your Name"
            name="Description"
            value={Description}
            onChange={e => onInputChange(e)}
          />
          <h4 style={{ textAlign:"left", marginLeft:'10px'}}>ที่อยู่รูป : </h4>
            <input style={{ width: '95vw' }}
              type="text"
              placeholder="ที่อยู่รูป"
              name="img"
              value={img}
              onChange={e => onInputChange(e)}
            />
          <button className="button button1" style={{ marginTop: '30px' }}>ทำการแก้ไข</button>
          <p><Link
  
                onClick={() => deleteMenu(menu.id)}
              >
                <button class="button button3">Delete</button>
              </Link></p>
        </form>
      </div>

    </div>
  );
};

export default Editmenu;
