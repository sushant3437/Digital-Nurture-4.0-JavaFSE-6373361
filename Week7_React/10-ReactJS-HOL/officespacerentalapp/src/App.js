import './App.css';
import office1 from './assets/office1.png';
import office2 from './assets/office2.png';
import office3 from './assets/office3.png';
import office4 from './assets/office4.png';
import office5 from './assets/office5.png';

function App() {
  const office = {
    name: "Tech Park A",
    rent: 55000,
    address: "MG Road, Bengaluru",
    image: office1
  };

  const offices = [
  {
    name: "Tech Park A",
    rent: 55000,
    address: "MG Road, Bengaluru",
    image: office1
  },
  {
    name: "Corporate Heights",
    rent: 62000,
    address: "HSR Layout, Bengaluru",
    image: office2
  },
  {
    name: "Innovation Hub",
    rent: 48000,
    address: "Indiranagar, Bengaluru",
    image: office3
  },
  {
    name: "WeSpace Offices",
    rent: 67000,
    address: "Whitefield, Bengaluru",
    image: office4
  },
  {
    name: "GrowthHub Towers",
    rent: 51000,
    address: "Electronic City, Bengaluru",
    image: office5
  }
];


  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Office Space Rental Dashboard</h1>

      <div className="office-list">
        {offices.map((item, index) => (
          <div key={index} className="office-card">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p><strong>Address:</strong> {item.address}</p>
            <p>
              <strong>Rent:</strong>
              <span
                style={{
                  color: item.rent > 60000 ? 'green' : 'red',
                  marginLeft: '10px'
                }}
              >
                ₹{item.rent}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
