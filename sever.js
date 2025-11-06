const express = require('express');
const app = express();
const PORT = 3000;

// Middleware để parse JSON (tuỳ chọn)
app.use(express.json());

// Route đơn giản
app.get('/', (req, res) => {
  res.send('Server đang chạy trên cổng 3000 🚀');
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`✅ Server đã khởi động tại http://localhost:${PORT}`);
});