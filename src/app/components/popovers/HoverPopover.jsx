

const HoverPopover = ({ btnText, pText, p2Text = "" }) => {
  return <>
    <div className="relative group inline-block">
      <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition duration-300 ease-in-out transform hover:scale-105">{btnText}</button>
      <div
        className="opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute right-0 w-48 mt-2 bg-white text-gray-800 border border-gray-300 rounded-lg shadow-lg py-2 z-10">
        <p className="px-4 py-2">{pText}</p>
        <p className={p2Text === "" ? "" : "px-4 py-2"}>{p2Text}</p>
      </div>
    </div>
  </>
}

export default HoverPopover