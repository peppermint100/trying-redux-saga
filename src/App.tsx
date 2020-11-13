import React, { useState } from 'react';
import CatImageType from './type/cat';
import { fetchCatImage } from "./api/cat";
import ImageList from './ImageList';
import { useSelector, useDispatch } from "react-redux";
import { RootReducerType } from "./_reducer/rootReducer";
import { requestData } from './_action/cat/catAction';

function App() {
  // const [data, setData] = useState<Array<CatImageType>>([]);
  
  // const getCatImageData = async () => {
  //     const newCat:CatImageType = await fetchCatImage();
  //     setData(data => [...data, newCat]);
  // }

  const dispatch = useDispatch();

  const catDataState = useSelector((state: RootReducerType) => state.catReducer); 
  const getCatImageDataWithReduxSaga = () => {
    dispatch(requestData());
  }

  return (
    // <div className="App">
    //   <button onClick={getCatImageData}>Get Cat Image</button>
    //   <ImageList data={data} />
    // </div>
  <div className="App">
      <button onClick={getCatImageDataWithReduxSaga}>Get Cat Image</button>
      <ImageList data={catDataState} />
    </div>
  );
}

export default App;
