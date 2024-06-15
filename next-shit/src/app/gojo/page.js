import React from 'react'
import GojoForm from '../components/GojoForm'
import GojoList from '../components/GojoData'
import Img from '../components/Img'

const page = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={{ maxWidth: '600px', width: '100%' }}>
          <h1 style={{ textAlign: 'center' }}>Add to data on databas</h1>
          <GojoForm />
          <h1 style={{ textAlign: 'center' }}>Data  show</h1>
          <GojoList />
          
        </div>
      </div>
      <div>
        <h1>this is the img upload without external package </h1>
          <Img />
      </div>
    </>
  )
}

export default page