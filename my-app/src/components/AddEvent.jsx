import React, { useState } from 'react'
import { apiClient } from '../Api/ApiClient'
import { createEventApi } from '../Api/EventApi'
import { toast } from 'react-toastify'

export default function AddEvent() {
  const [eventData,setEventData]=useState()

  const onHandleChange=(e)=>{
    setEventData(pre=>({...pre,[e.target.name]:e.target.value}))
  }
  const onSave=async(e)=>{
    e.preventDefault()
    console.log(eventData)
    const res=await createEventApi(eventData).then(()=>{
      toast("Event added successfully")
    })
  }

  return (
    <>
      <div className='main'>
        <div className='form'>
        <form>
          <div className='form-control'>
            <label>Name</label>
            <input type="text" name="name" onChange={onHandleChange}></input>
          </div>
          <div className='form-control'>
            <label>Start Date</label>
            <input type="date" name="startDate" onChange={onHandleChange}></input>
          </div>
          <div className='form-control'>
            <label>End date</label>
            <input type="date" name="endDate" onChange={onHandleChange}></input>
          </div>
          <div className='form-control'>
            <label>Entry fee</label>
            <input type="text" name="fee" onChange={onHandleChange}></input>
          </div>
          <div className='button'><button  onClick={onSave}>Add</button></div>
         
        </form>
        </div>
      </div>
    </>
  )
}
