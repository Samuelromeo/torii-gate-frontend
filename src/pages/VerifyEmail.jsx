import { useParams, useNavigate } from "react-router-dom"
import { axiosInstance } from "../utils/axiosInstance"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom" 

const VerifyEmail = () => {
  const {token} = useParams()
  const [errorMessage, setErrorMessage] = useState("")
  const [status, setStatus] = useState("verifying")
  const checkToken = async ()=> {
    try {
      const response = await axiosInstance.post(`/auth/verify-email/${token}`, {token})
      if(response.status === 200){
       setStatus("success")
      }
    } catch (error) {
      setErrorMessage("Email Verification Failed")
      setStatus("error")
    }
  }

  useEffect(() => {
    checkToken()
  }, [])

  if (status === "verifying"){
    return <div>verifying....</div>
  }

  if (status === "success"){
    return <div>
      <h1>Email Verified Successfully</h1>
      <Link to="/login">
      <button>Proceed to Login</button>
      </Link>
      </div>
  }

  return <div>
    <h1>Verification failed</h1>
    <p>{errorMessage} </p>
    <button>Resend Verification Email</button>
  </div>
  }

export default VerifyEmail