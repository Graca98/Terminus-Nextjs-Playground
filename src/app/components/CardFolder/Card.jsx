import CardText from "./CardText"
import CardImg from "./CardImg"

const Card = (props) => {
  

  return (
    <div className="mx-auto max-w-md bg-zinc-900 hover:bg-sky-500 px-4 py-4 my-6 rounded-lg shadow-md shadow-cyan-500/50">
      <div className="flex flex-row gap-x-12">
        <div className="basis-2/6 flex justify-center">
          <CardImg imgSrc={props.imgSrc} alt={props.name}></CardImg>
        </div>

        <div className="basis-4/6 flex flex-col justify-center">
          <CardText
            name={props.name}
            description={props.description}
          ></CardText>
        </div>
      </div>
    </div>
  );
}

export default Card