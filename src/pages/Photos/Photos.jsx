import images from './data'
import './styles.css'

const Photos = () => {
  console.log(images);
  return (
    <>
      <div className="content"></div>
      <div className="photos"></div>
      <div className="photo-options">


      </div>
      <div className="item">
      {
        images.images.map((image, index) => (
         <img key={index} src={image} alt="photo" /> 
        )
        )
      }
      

      </div>
    </>
  )
}

export default Photos;