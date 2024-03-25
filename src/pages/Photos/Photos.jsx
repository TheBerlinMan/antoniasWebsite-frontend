import images from './data'

const Photos = () => {
  console.log(images);
  return (
    <>
      
      <img src={images.images[0]} alt="" />
      <img src={images.images[1]} alt="" />
      <img src={images.images[2]} alt="" />
      <img src={images.images[3]} alt="" />
      <img src={images.images[4]} alt="" />
      
    </>
  )
}
 
export default Photos;