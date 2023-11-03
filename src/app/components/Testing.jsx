

const Testing = (props) => {

  
  return (
    <div className="flex flex-row p-8 mb-8 text-3xl bg-red-700 border border-lime-500">
      <div className="basis-3/4 flex flex-col ps-8">
        <h2 className="text-4xl">{props.headingText}</h2>
        <p className="pt-2 text-xl text-cyan-400">{props.desText}</p>
      </div>
      <div className="basis-1/4 flex justify-center items-center">
      <h2 className={`py-5 px-10 rounded-full ${props.settings ? 'bg-lime-700' : 'bg-blue-700'}`}>{props.button}</h2>
      </div>
    </div>
  );
}

Testing.defaultProps = {
  button: 'Logo', // Set the default value for myProp
};

export default Testing