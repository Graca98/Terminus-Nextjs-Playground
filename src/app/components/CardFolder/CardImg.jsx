

const CardImg = (props) => {
  return <>
    <img src={props.imgSrc} className="h-72 max-h-64 w-28 max-w-xs" alt={props.alt}></img>
  </>
}

export default CardImg