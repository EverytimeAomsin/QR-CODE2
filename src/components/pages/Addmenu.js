import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useHistory, Link } from "react-router-dom";
import QRcode from 'qrcode.react'
import '../../css/add.css'
import '../../css/Edit.css'


const AddMenu = () => {
  let history = useHistory();
  const [menu, setMenu] = useState({
   id:"",
    MenuName: "",
    img: "/image/",
    Qr: "/qr/",
    Description: ""
  });
  useEffect(() => {
    document.title = "QR-ADD";
  }, []);
  const { id, MenuName, img, Qr, Description } = menu;
  const onInputChange = e => {
    setMenu({ ...menu, [e.target.name]: e.target.value });
  };
  

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/Menus", menu);
    history.push("/Admin");
  };


  const [qr, setQr] = useState('http://localhost:3000/');
  const handleChange = (event) => {
    setQr(event.target.value);
  };
  const downloadQR = () => {
    const canvas = document.getElementById("qr");
    const pngUrl = canvas
      .toDataURL("image/svg")
      .replace("image/svg", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = {id}+".svg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };


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
            <ul>
              <p>
                <h4 style={{ textAlign:"left", marginLeft:'30px'}}>ชื่อ : </h4><input style={{width: '90%'}} type="text" onChange={e => onInputChange(e)} placeholder="ใส่ชื่อร้าน" name="MenuName" value={MenuName} />
              </p>
              <h4 style={{ textAlign:"left", marginLeft:'30px',marginTop:'8px'}}>Description : </h4> <textarea style={{width: '90%'}} id="Description" placeholder="Enter Your Description"
                name="Description"
                value={Description}
                onChange={e => onInputChange(e)} rows={15} cols={60} />
              <h4 style={{ textAlign:"left", marginLeft:'30px',marginTop:'8px'}}>GenQR : </h4><input style={{width: '90%'}} type="text" onChange={handleChange} placeholder="ใส่ชื่อร้าน" name="qr" value={qr} />
              <h4 style={{ textAlign:"left", marginLeft:'30px',marginTop:'8px'}}>ที่อยู่ไฟล์รูป : </h4><input style={{width: '90%'}} type="text" onChange={e => onInputChange(e)} placeholder="ที่อยู่ไฟล์รูป" name="img" value={img} /><p />
              <h4 style={{ textAlign:"left", marginLeft:'30px',marginTop:'8px'}}>ที่อยู่ไฟล์ QR :</h4> <input style={{width: '90%'}} type="text" onChange={e => onInputChange(e)} id="id" placeholder="ที่อยู่ไฟล์ QR" name="QR" value={Qr} /><p />

            </ul>
          </div>
          <div className="col-6 col-s-12">

            <div className="flex-parent  jc-center">
              {
                qr ?
                  <QRcode
                    id="qr"
                    value={qr}
                    size={400}
                    includeMargin={true}
                  /> :
                  <p style={{ marginTop: '20px', textAlign: 'center' }}>No QR code preview</p>
              }
            </div>

            <div className="flex-parentbt  jc-center " style={{marginTop:'15px'}}>
              <button className="button button1" type="button" onclick="{downloadQR}" onClick={downloadQR}> โหลด QR-CODE</button>
              <button className=" button button1">บันทึกเมนู</button>

            </div>
          </div>

        </div>
      </form>
    </div>

  );
};

export default AddMenu;
