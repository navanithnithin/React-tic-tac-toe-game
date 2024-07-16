import React, { useState } from 'react'

export default function GameBoard({ value, onSquareClick }) {
  return (
    <button className="square col-4 bg-white border-1 fs-1" style={{ height: "125px" }} onClick={onSquareClick}>{value}</button>
  )
}
