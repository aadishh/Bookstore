import React from 'react'
import PropTypes from 'prop-types'

const CustomButton = ({ title, backgroundColor, textColor, hoverclass, PaddingX = " px-8 ", PaddingY ="py-2", borderColor="indigo", borderClass, myOnClick }) => {
  return (
    <button className={`${textColor} ${backgroundColor} ${hoverclass} rounded border-[borderColor] ${PaddingX} ${PaddingY}
     flex flex-row gap-3 text-center items-center cursor-pointer border ${borderClass}`} onClick={myOnClick}>
      {title}
    </button>
  )
}

CustomButton.propTypes = {
  title: PropTypes.string,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  PaddingX: PropTypes.string,
  PaddingY: PropTypes.string,
  hoverclass: PropTypes.string,
  borderClass: PropTypes.string,
  myOnClick:PropTypes.func,
}

export default CustomButton
