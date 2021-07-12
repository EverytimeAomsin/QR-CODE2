import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useHistory, Link , useParams } from "react-router-dom";
import QRcode from 'qrcode.react'
import '../../css/add.css'
import '../../css/Edit.css'



const Editmenu = () => {
  let history = useHistory();
  const { Id } = useParams();
  const [menu, setMenu] = useState({
    MenuName: "",
    Description: "",
    img: "",
    Qr:""
  });

  const { MenuName, Description, img , Qr } = menu;
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

    <div>
      <form onSubmit={e => onSubmit(e)}>
        <div className="header">
          <h1>เพิ่มเมนู</h1>
        </div>
        <Link style={{ marginBottom: '3px', textDecoration: "none" }}

          to={`/admin`}
        ><button className="button button1" style={{ marginTop: '15px' }}>กลับหน้าผู้ดูแล</button></Link>
        <div className="row">

          <div className="col-6 col-s-12 menu">
            <ul style={{marginTop:'40px'}}>
              <p>
                <h4 style={{ textAlign:"left", marginLeft:'30px'}}>ชื่อ : </h4><input style={{width: '90%'}} type="text" onChange={e => onInputChange(e)} placeholder="ใส่ชื่อร้าน" name="MenuName" value={MenuName} />
              </p>
              <h4 style={{ textAlign:"left", marginLeft:'30px',marginTop:'8px'}}>Description : </h4> <textarea style={{width: '90%'}} id="Description" placeholder="Enter Your Description"
                name="Description"
                value={Description}
                onChange={e => onInputChange(e)} rows={15} cols={60} />

              <h4 style={{ textAlign:"left", marginLeft:'30px',marginTop:'8px'}}>ที่อยู่ไฟล์รูป : </h4><input style={{width: '90%'}} type="text" onChange={e => onInputChange(e)} placeholder="ที่อยู่ไฟล์รูป" name="img" value={img} /><p />
              <h4 style={{ textAlign:"left", marginLeft:'30px',marginTop:'8px'}}>ที่อยู่ไฟล์ QR :</h4> <input style={{width: '90%'}} type="text" onChange={e => onInputChange(e)} id="id" placeholder="ที่อยู่ไฟล์ QR" name="QR" value={Qr} /><p />

            </ul>
          </div>
          <div className="col-6 col-s-12">

            <div className="flex-parent  jc-center">
            <img style={{width:'40%'}}  src={menu.img} />
            </div>

            <div className="flex-parentbt  jc-center " style={{marginTop:'15px'}}>
            <button className="button button1" type="button" > โหลด QR-CODE</button>
              <button className=" button button1">บันทึกเมนู</button>

            </div>
          </div>

        </div>
      </form>
    </div>

  );
};

export default Editmenu;
