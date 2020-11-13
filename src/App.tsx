import React, { useState } from 'react';
import CatImageType from './type/cat';
import { fetchCatImage } from "./api/cat";
import ImageList from './ImageList';

function App() {
  const [data, setData] = useState<Array<CatImageType>>([]);
  
  const getCatImageData = async () => {
      const newCat:CatImageType = await fetchCatImage();
      setData(data => [...data, newCat]);
  }

  return (
    <div className="App">
      <button onClick={getCatImageData}>Get Cat Image</button>
      <ImageList data={data} />
    </div>
  );
}

export default App;
