import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const override = {
    display: "block",
    margin: "100px auto"
}

function Spinners({loading}) {
  return (
    <ClipLoader 
    color = '#438ca'
    loading = {loading}
    cssOverride = {override}
    size={150}
    />
  )
}

export default Spinners