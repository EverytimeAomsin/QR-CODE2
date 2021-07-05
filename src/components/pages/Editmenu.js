import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";


const Editmenu = () => {
  let history = useHistory();
  const { Id } = useParams();
  const [menu, setUser] = useState({
    MenuName: "",
    Description: "",
    img: ""
  });

  const { MenuName,Description, img } = menu;
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
    {/*
    <MDBContainer>
      <MDBContainer >
        <MDBCard style={{ marginTop: '10px' }}>
          <MDBCardHeader>
            <h3>ก่อนแก้ไข</h3>

          </MDBCardHeader></MDBCard></MDBContainer>

      <MDBCard className="text-center">

        <div className="container py-4">
          {/* <h1 className="display-4">User Id: {id}</h1> 

          <div ><h2>{menu.MenuName}</h2></div>
          <div > <img className="img-fluid " style={{ height: '150px' }} src={menu.img} /></div>

        </div>

      </MDBCard>

      <div className="container" style={{ marginTop: '20px' }}>
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Edit</h2>
          <form onSubmit={e => onSubmit(e)}>
            <div className="form-group">
              ชื่อร้าน
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Name"
                name="MenuName"
                value={MenuName}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              รายละเอียด
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Name"
                name="Description"
                value={Description}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              ที่อยู่ไฟล์รูป
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Username"
                name="img"
                value={img}
                onChange={e => onInputChange(e)}
              />
            </div>

            <button className="btn btn-warning btn-block" style={{ marginTop: '15px' }}>ทำการแก้ไข</button>
          </form>
        </div>
      </div>
    </MDBContainer> */}
  );
};

export default Editmenu;
