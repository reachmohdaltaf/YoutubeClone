/* eslint-disable react/prop-types */

const Button = ({name}) => {
  return (
    <div className='h-5 rounded-lg  p-4 justify-center bg-gray-100 cursor-pointer hover:bg-gray-200  flex items-center'>{name}</div>
  )
}

export default Button