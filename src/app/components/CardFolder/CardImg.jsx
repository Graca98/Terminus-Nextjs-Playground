

const CardImg = ({imgSrc, alt}) => {
  return <>
    <img src={imgSrc} className="h-72 max-h-64 w-28 max-w-xs" alt={alt}></img>
  </>
}

export default CardImg