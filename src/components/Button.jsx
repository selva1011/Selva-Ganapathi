const Button = ({label}) => {
  return (
    <button className="flex font-Sen justify-center text-center items-center h-10 w-24 rounded-full bg-apple-blue text-white text-sm hover:bg-apple-blue2 py-2 px-4">
        {label}
    </button>
  )
}

export default Button