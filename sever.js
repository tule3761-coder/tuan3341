const express = require('express');
const app = express();

// Dùng PORT từ Render hoặc 3000 khi chạy local
const PORT = process.env.PORT || 3000;

// Middleware để parse JSON
app.use(express.json());

// Route đơn giản
app.get('/', (req, res) => {
  res.send(`🚀 Server đang chạy trên cổng ${PORT}`);
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`✅ Server đã khởi động tại http://localhost:${PORT}`);
});
