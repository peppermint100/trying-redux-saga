import axios from "axios";
import CatImageType from "./../type/cat";

function formatData(data: any): CatImageType {
  return {
        breed: data.breed,
        id: data.id,
        url: data.url,
        width: data.width,
        height: data.height
 };
}

type getCatImageType = () => Promise<CatImageType>

export const fetchCatImage: getCatImageType= async () => {
       const res = await axios.get("https://api.thecatapi.com/v1/images/search")
       const formatted = formatData(res.data[0]);
       return formatted;
}