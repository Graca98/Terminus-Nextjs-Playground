import Image from 'next/image'

const CardText = (props) => {
  return <>
    <h2 className="mb-4 font-semibold text-xl">{props.name}</h2>
    <p className='mb-12'>{props.description}</p>
    <div className='flex gap-6'>
      <p className='flex gap-x-1 '><Image src="/ig.svg" width={18} height={18} alt="instragam-logo"></Image>gracous1</p>
      <p className='flex gap-x-1 '><Image src="/discord.svg" width={18} height={18} alt="instragam-logo"></Image>Gracous</p>
    </div>
    
  </>
}

export default CardText
