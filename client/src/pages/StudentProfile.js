import React from "react"
import { useState } from "react"
import StudentView from "../components/student-view"

const StudentProfile = () => {
  const [isEdit, setIsEdit] = useState(false)

  return isEdit ? (
    <>
    <button onClick={()=>{setIsEdit(false)}} > Submit</button>
    <h1>Update</h1>
    </>
  ) : (
    <div>
      <StudentView setIsEdit={setIsEdit} />
    </div>
  )
}

export default StudentProfile
