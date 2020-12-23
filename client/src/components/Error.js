import React from 'react'

const Error = ({msgError, typeMsg}) => {
    return (
        <div className="row py-1 mx-auto alert alert-danger">
          {msgError}
        </div>
    )
}

export default Error
