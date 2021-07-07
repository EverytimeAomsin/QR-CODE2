import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useHistory, Link } from "react-router-dom";
import QRcode from 'qrcode.react'
import '../../css/add.css'


const AddMenu = () => {
  let history = useHistory();
  const [menu, setMenu] = useState({
    id: "",
    MenuName: "",
    img: "/image/",
    QR: "/QR/",
    Description: ""
  });
  useEffect(() => {
    document.title = "QR-ADD";
  }, []);
  const { id, MenuName, img, QR, Description } = menu;
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
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "myqr.svg";
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

        <div className="row">

          <div className="col-6 col-s-12 menu">
            <ul>
              <p>
              </p><h4>ใส่ชื่อร้าน</h4><input type="text" classname placeholder="ใส่ชื่อร้าน" name="id" value={id} onChange={e => onInputChange(e)} /><p />
              <p>
              <h4>ชื่อ</h4><input type="text" onChange={e => onInputChange(e)} placeholder="ใส่ชื่อร้าน" name="MenuName" value={MenuName} /><p />
              </p><h4>Description</h4><textarea id="w3review" placeholder="Enter Your Description"
                name="Description"
                value={Description}
                onChange={e => onInputChange(e)} rows={4} cols={50} /><p />
              <h4>GenQR</h4><input type="text" onChange={handleChange} placeholder="ใส่ชื่อร้าน" name="id" value={qr} /><p />
              <h4>ที่อยู่ไฟล์รูป</h4><input type="text" onChange={e => onInputChange(e)} placeholder="ที่อยู่ไฟล์รูป" name="img" value={img} /><p />
              <h4>ที่อยู่ไฟล์ QR</h4><input type="text" onChange={e => onInputChange(e)} placeholder="ที่อยู่ไฟล์ QR" name="QR" value={QR} /><p />

            </ul>
          </div>
          <div className="col-6 col-s-12">
            <div className="text-center">
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
             
                <div className="flex-parent  jc-center ">
                  <button className="button button1" type="button" onclick="{downloadQR}" onClick={downloadQR}> โหลด QR-CODE</button>
                  <button className=" button button1">บันทึกเมนู</button>
               
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>

  );
};

export default AddMenu;
