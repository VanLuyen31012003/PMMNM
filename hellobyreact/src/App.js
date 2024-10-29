import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Nhập file CSS

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const imageUrl = 'https://i.scdn.co/image/ab67616d0000b273e623dffa87176f17458e71e5';

  // Hàm gọi API 
  const callAPI = async () => {
    try {
      const response = await axios.get('https://6707fad88e86a8d9e42dae05.mockapi.io/api/nhac/getAllsongs');
      setData(response.data);
      setError(null); // Reset lỗi khi thành công
    } catch (err) {
      setError('Có lỗi xảy ra khi gọi API: ' + err.message);
      setData([]); // Reset dữ liệu khi có lỗi
    }
  };

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <div>
      <h1>Demo web ReactJs</h1>
      {error && <div style={{ color: 'red', textAlign: 'center' }}><p>Error: {error}</p></div>}
      {data.length > 0 && (
        <div>
          <h2>Danh sách người dùng:</h2>
          <div className="grid-container">
            {data.map(song => (
              <div className="grid-item" key={song.id}>
                <img src={imageUrl} alt={song.Name} />
                <div className="song-title">{song.Name}</div>
                <div className="song-description">{song.Description}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
