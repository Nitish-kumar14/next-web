"use client"

import { useState } from "react"

import React from 'react'

const Img = () => {
    const [file,setFile] = useState()
    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(file)
        const data = new FormData();
        data.set('file', file)
        const result = await fetch("api/upload", {
            method:"POST",
            body:data
        })
        console.log(result)
    }
  return (
    <>
        <form onSubmit={onSubmit}>
            <input type="file" name="file" onChange={(e) => setFile(e.target.files[0])} />
            <button type="submit">Submit</button>
        </form>
    </>
  )
}

export default Img
