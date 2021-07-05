ข้อมูล json อยู่ในไฟล์ ./db.json
ไฟล์ Routing จะอยู่ใน ./src/Route.js

ในโปรเจ็คนี้เมื่อเปิดมาจะอยู่ในหน้า Home (src/components/pages/Home.js 
เมื่อกดรูปจะอยู่ในส่วนแสดงรายละเอียดข้อมูลในหน้า Monitor ซึ่งจะอ้างอิงข้อมูลตาม id (root/:id) ตามในไฟล์ db.json

ไฟลรูปและ qr จะอยู่ใน ./public/qr && img

ข้อมูลในไฟล์ json จะถูกเรียกผ่าน  JSON Server + axios ผ่าน port 3003



