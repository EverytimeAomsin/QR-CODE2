import React, { useState } from "react";
import axios from 'axios'
import { useHistory,Link } from "react-router-dom";
import QRcode from 'qrcode.react'
import '../../css/add.css'
import '../../css/admin.css'

const AddMenu = () => {
  let history = useHistory();
  const [menu, setMenu] = useState({
    id: "",
    MenuName: "",
    img: "/image/",
    QR: "/QR/",
    Description: ""
  });

  const { id , MenuName,img,QR ,Description} = menu;
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
    const canvas = document.getElementById("myqr");
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
    
<div style={{backgroundColor:'#A2DBFA'}}>
<Link style={{ marginBottom: '3px', textDecoration: "none" }}
                class="btn btn-outline-primary mr-1"
                to={`/Admin`}
              ><button className="button button1"  style={{ marginTop: '15px',marginLeft:'20px' }}>ย้อนกลับ</button></Link> 
  <div className="add">
    <h1>Add menu</h1>
 
    <form onSubmit={e => onSubmit(e)}>
     
      <p> <h4>ใส่ชื่อร้าน</h4><input  type="text"
              className="form-control form-control-lg"
              placeholder="ใส่ชื่อร้าน"
              name="id"
              value={id}
            onChange={e => onInputChange(e)}  /></p>
            
            <p><h4>ใส่ชื่อร้านอีกครั้ง</h4><input  type="text"
              className="form-control form-control-lg"
              placeholder="ใส่ชื่อร้าน(ภาษาอังกฤษ)"
              name="MenuName"
              value={MenuName}
            onChange={e => onInputChange(e)}  /></p>
      <p><h4>ใส่ชื่อร้านเพื่อ genqr</h4><input onChange={handleChange} type="text"
              value={qr} label="ใส่ชื่อร้าน(แนะนำเป็นภาษาอังกฤษ)" size="large" color="primary"   /></p>
              <p> <h4>ใส่รายละเอียด</h4><textarea style={{width:'290px'}}
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Name"
                name="Description"
                value={Description}
                onChange={e => onInputChange(e)}
              /></p>
       <p> </p>
       {
              qr ?
                <QRcode
                  id="myqr"
                  value={qr}
                  size={320}
                  includeMargin={true}
                /> :
                <p style={{ marginTop: '20px', textAlign: 'center' }}>No QR code preview</p>
            }
            <div style={{flexgrow: '4'}}>
           
               <p><h4>ที่อยู่รูป QR-CODE</h4><input  type="text"
              className="form-control form-control-lg"
              placeholder="ที่อยู่รูป QR-CODE"
              name="QR"
              value={QR}
            onChange={e => onInputChange(e)}  /></p>
             <p><h4>ที่อยู่รูปภาพ</h4><input  type="text"
              className="form-control form-control-lg"
              placeholder="ที่อยู่รูปภาพ"
              name="img"
              value={img}
            onChange={e => onInputChange(e)}  /></p>
            <button class="button button1" type="button" onClick={downloadQR} style={{ marginLeft: 10 }}><i class="fas fa-download"></i> โหลด QR-CODE</button>
            </div>
            <button className="button button1">บันทึกเมนู(อย่าลืมเชพ qr ก่อนบันทึก)</button>
            
    </form>
  </div>
 



      {/* <div className="container">
      <div className="w-75 mx-auto shadow p-5">
      <MDBBtn href="/Admin/dashboard"><i class="fas fa-angle-double-left"></i> Dashboard Page</MDBBtn>
        <h2 className="text-center mb-4">Add A Menu</h2>

       ทำการกรอกข้อมูลและบันทึก 
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <MDBInput
              type="text"
              className="form-control form-control-lg"
              placeholder="ใส่ชื่อร้าน(ภาษาอังกฤษ)"
              name="MenuName"
              value={MenuName}
            onChange={e => onInputChange(e)} 
            />
            <MDBInput onChange={handleChange}
              value={qr} label="ใส่ชื่อร้าน(แนะนำเป็นภาษาอังกฤษ)" size="large" color="primary" id='textAreae' rows={4} />
              <h4 style={{ marginTop: '20px' }}>ใส่ชื่อร้านอีกครั้งเช่น ร้าน yummy ก็เป็น /Monitor/image/yummy </h4>
               <MDBInput
              type="text"
              className="form-control form-control-lg"
              placeholder="ใส่ชื่อที่อยู่ของไฟล์"
              name="MenuName"
              value={MenuName}
              onChange={e => onInputChange(e)}
            />
            <h4 style={{ marginTop: '20px' }} class="form-label text-start" for="customFile" >ใส่ภาพเมนูของคุณ</h4>
            <input type="file" class="form-control" id="customFile" />
          </div>
          <div className="form-group" style={{ marginTop: '20px' }}>
            <h4>ใส่ที่อยู่ของไฟล์ เช่น ไฟล์ menu1 ก็เป็น /image/menu1</h4>
            <MDBInput
              type="text"
              className="form-control form-control-lg"
              placeholder="ใส่ชื่อที่อยู่ของไฟล์"
              name="img"
              value={img}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="text-center">
            {
              qr ?
                <QRcode
                  id="myqr"
                  value={qr}
                  size={320}
                  includeMargin={true}
                /> :
                <p style={{ marginTop: '20px', textAlign: 'center' }}>No QR code preview</p>
            }
          </div>

          <div class="d-grid gap-2 col-3 mx-auto">
            <button class="btn btn-primary btn-lg" type="button" onClick={downloadQR} style={{ marginLeft: 10 }}><i class="fas fa-download"></i></button>
          </div>
          <div className="d-flex justify-content-center">
            <MDBBtn outline className='mx-2 text-center' style={{ marginTop: '20px' }} color=''>ถ้าเชฟรูปแล้ว กดเพิ่มเพิ่มข้อมูลได้เลย</MDBBtn>
          </div>
        </form>
      </div>
          </div> */}
    </div>
  );
};

export default AddMenu;
