import React from 'react'
import PropTypes from 'prop-types'

const GlobalContext = props => {
  const [showCustomToast, setShowCustomToast] = React.useState(props.showCustomToast)
  const [hideToast, setHideToast] = React.useState(props.hideToast)
  const [updateCustomToast, setUpdateCustomToast] = React.useState(props.updateCustomToast)
  const [showToast, setShowToast] = React.useState(false)
  return (
    <div>
        <div className="flex flex-row h-full bg-purple-600">
          <span>{props.toastType}</span>
            <div className="flex my-[2%] mx-[10%] w-full bg-white rounded-3xl">
            {props.toastText}
            </div>
        </div>
    </div>
  )
}


GlobalContext.propTypes = {
  updateCustomToast: PropTypes.func.isRequired,
  showCustomToast: PropTypes.bool.isRequired,
  toastType: PropTypes.oneOf(['success', 'error', 'info']).isRequired,
  toastText: PropTypes.string.isRequired,
  hideToast: PropTypes.func.isRequired,
}

export default GlobalContext