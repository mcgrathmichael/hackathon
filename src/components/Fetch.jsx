import { useState } from "react";
import Search from "./Search";

const App = () => {
  const [locationId, setLocationId] = useState(null);

  const apiKey = "90F2468B53904D0C8230D3A886D5BCC4";

  const handleSearch = (query) => {
    fetch(
      `https://api.tripadvisor.com/api/partner/2.0/locations/search?query=${query}&key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setLocationId(data.data[0].result_object.location_id);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      {locationId && <p>Location ID: {locationId}</p>}
    </div>
  );
};

export default App;
