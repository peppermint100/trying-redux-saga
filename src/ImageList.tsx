import React from 'react'
import CatImageType from './type/cat'

interface Props {
    data: CatImageType[]
}
const ImageList: React.FC<Props> = ({data}) => {
    return (
     <div className="cat-image">
        {
          data.length > 0 ? (
            <>
              <ul>
                {data.map(cat => 
                  <li key={cat.id}>
                    <img src={cat.url} alt="catimage" width="300px" height="300px" style={{ objectFit : "cover"}} /> 
                  </li>
                )}
              </ul>
            </>
          ) : <p>no image for now</p>
        } 
      </div>
    )
}

export default ImageList
