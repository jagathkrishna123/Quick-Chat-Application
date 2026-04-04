// import React, { useState } from 'react'
// import assets from '../assets/assets'
// import { useContext } from 'react'
// import { AuthContext } from '../../context/AuthContext'

// const LoginPage = () => {

//   const [currState, setCurrState] = useState("Sign up")
//   const [fullName, setFullName] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [bio, setBio] = useState("")
//   const [isDataSubmitted, setIsDataSubmitted] = useState(false)

//   const {login} = useContext(AuthContext)

//   const onSubmitHandler = (event) => {
//     event.preventDefault();
//     if(currState === 'Sign up' && !isDataSubmitted){
//       setIsDataSubmitted(true)
//       return;
//     }
//     login(currState === "Sign up" ? 'signup' : 'login', {fullName, email, password, bio})
//   }




//   return (
//     <div className='min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl'>
//       {/* ------left-------- */}
//       <img src={assets.logo_big} alt="" className='w-[min(15vw,200px)]'/>
//       {/* ---------right--------- */}
//       <form onSubmit={onSubmitHandler} className='border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg max-w-md w-full'>
//         <h2 className='font-medium text-2xl flex justify-between items-center'>
//           {currState}
//           {isDataSubmitted && <img onClick={()=> setIsDataSubmitted(false)} src={assets.arrow_icon} alt="" className='w-5 cursor-pointer' />}
//         </h2>

//         {currState === "Sign up" && !isDataSubmitted && (
//         <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className='p-2 border border-gray-500 rounded-md focus:outline-none' placeholder='Full Name' required />
//         )}

//         {!isDataSubmitted && (
//           <>
//             <input onChange={(e)=> setEmail(e.target.value)} type="email" value={email} placeholder='Email Adress' required
//             className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500' />

//             <input onChange={(e)=> setPassword(e.target.value)} type="password" value={password} placeholder='Password' required
//             className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500' />
//           </>
//         )}

//         {currState === "Sign up" && isDataSubmitted && (
//           <textarea onChange={(e) => setBio(e.target.value)} value={bio} rows={4} className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500' placeholder='Provide a short bio...' required></textarea>
//         )

//         }

//         <button className='py-3 bg-gradient-to-r from-purple-400 to-violet-400 text-white rounded-md cursor-pointer'>
//           {currState === "Sign up" ? "Create Account" : "Login Now"}
//         </button>

//         <div className='flex items-center gap-2 text-sm text-gray-500'>
//           <input type="checkbox" />
//           <p>Agree to the terms and condions</p>
//         </div>

//         <div className='flex flex-col gap-2'>
//           {currState === "Sign up" ? (
//             <p className='text-sm text-gray-600'>Already have an account? 
//             <span onClick={()=>{setCurrState("Login"); setIsDataSubmitted(false)}} className='font-medium text-violet-500 cursor-pointer'> Login here</span></p>
            
//           ) : (
//             <p className='ttext-sm text-gray-600'>Create an accountx
//             <span onClick={()=> setCurrState("Sign up")} className='font-medium text-violet-500 cursor-pointer'> click here</span></p>
//           )}
//         </div>

//       </form>
//     </div>
//   )
// }

// export default LoginPage


import React, { useState } from 'react'
import assets from '../assets/assets'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const LoginPage = () => {

  const [currState, setCurrState] = useState("Sign up")
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [bio, setBio] = useState("")
  const [isDataSubmitted, setIsDataSubmitted] = useState(false)

  const {login} = useContext(AuthContext)

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if(currState === 'Sign up' && !isDataSubmitted){
      setIsDataSubmitted(true)
      return;
    }
    login(currState === "Sign up" ? 'signup' : 'login', {fullName, email, password, bio})
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-black via-violet-950 to-black flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col px-4 py-8 relative overflow-hidden'>
      {/* Animated background elements */}
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000'></div>
      </div>

      {/* ------left-------- */}
      <div className='relative z-10 flex flex-col items-center gap-4'>
        <img src={assets.logo_big} alt="" className='w-[min(20vw,240px)] max-sm:w-32 drop-shadow-2xl'/>
        <div className='hidden sm:block text-center'>
          <h1 className='text-4xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent'>Welcome Back</h1>
          <p className='text-gray-400 mt-2'>Continue your journey with us</p>
        </div>
      </div>

      {/* ---------right--------- */}
      <form onSubmit={onSubmitHandler} className='relative z-10 backdrop-blur-xl bg-black/40 border border-violet-500/30 p-8 flex flex-col gap-6 rounded-2xl shadow-2xl shadow-violet-900/50 max-w-md w-full transition-all duration-300 hover:border-violet-500/50'>
        <div className='absolute inset-0 bg-gradient-to-br from-violet-600/5 to-purple-600/5 rounded-2xl pointer-events-none'></div>
        
        <h2 className='font-semibold text-3xl flex justify-between items-center text-white relative z-10'>
          {currState}
          {isDataSubmitted && (
            <img 
              onClick={()=> setIsDataSubmitted(false)} 
              src={assets.arrow_icon} 
              alt="" 
              className='w-6 h-6 cursor-pointer hover:scale-110 transition-transform bg-violet-500/20 p-1 rounded-full' 
            />
          )}
        </h2>

        <div className='relative z-10 flex flex-col gap-4'>
          {currState === "Sign up" && !isDataSubmitted && (
            <div className='relative group'>
              <input 
                type="text" 
                value={fullName} 
                onChange={(e) => setFullName(e.target.value)} 
                className='w-full p-3 bg-black/50 border border-violet-500/30 rounded-lg focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/50 text-white placeholder-gray-500 transition-all duration-300' 
                placeholder='Full Name' 
                required 
              />
              <div className='absolute inset-0 bg-gradient-to-r from-violet-500/0 via-violet-500/5 to-violet-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none'></div>
            </div>
          )}

          {!isDataSubmitted && (
            <>
              <div className='relative group'>
                <input 
                  onChange={(e)=> setEmail(e.target.value)} 
                  type="email" 
                  value={email} 
                  placeholder='Email Address' 
                  required
                  className='w-full p-3 bg-black/50 border border-violet-500/30 rounded-lg focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/50 text-white placeholder-gray-500 transition-all duration-300' 
                />
                <div className='absolute inset-0 bg-gradient-to-r from-violet-500/0 via-violet-500/5 to-violet-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none'></div>
              </div>

              <div className='relative group'>
                <input 
                  onChange={(e)=> setPassword(e.target.value)} 
                  type="password" 
                  value={password} 
                  placeholder='Password' 
                  required
                  className='w-full p-3 bg-black/50 border border-violet-500/30 rounded-lg focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/50 text-white placeholder-gray-500 transition-all duration-300' 
                />
                <div className='absolute inset-0 bg-gradient-to-r from-violet-500/0 via-violet-500/5 to-violet-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none'></div>
              </div>
            </>
          )}

          {currState === "Sign up" && isDataSubmitted && (
            <div className='relative group'>
              <textarea 
                onChange={(e) => setBio(e.target.value)} 
                value={bio} 
                rows={4} 
                className='w-full p-3 bg-black/50 border border-violet-500/30 rounded-lg focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/50 text-white placeholder-gray-500 resize-none transition-all duration-300' 
                placeholder='Provide a short bio...' 
                required
              ></textarea>
              <div className='absolute inset-0 bg-gradient-to-r from-violet-500/0 via-violet-500/5 to-violet-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none'></div>
            </div>
          )}

          <button className='py-3.5 px-6 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-semibold rounded-lg cursor-pointer transform hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-violet-900/50 hover:shadow-violet-800/60'>
            {currState === "Sign up" ? "Create Account" : "Login Now"}
          </button>

          <div className='flex items-center gap-2 text-sm text-gray-400'>
            <input 
              type="checkbox" 
              className='w-4 h-4 accent-violet-600 cursor-pointer'
            />
            <p>Agree to the terms and conditions</p>
          </div>

          <div className='flex flex-col gap-2 pt-2 border-t border-violet-500/20'>
            {currState === "Sign up" ? (
              <p className='text-sm text-gray-400'>Already have an account? 
                <span 
                  onClick={()=>{setCurrState("Login"); setIsDataSubmitted(false)}} 
                  className='font-semibold text-violet-400 cursor-pointer ml-1 hover:text-violet-300 transition-colors'
                > Login here</span>
              </p>
            ) : (
              <p className='text-sm text-gray-400'>Create an account
                <span 
                  onClick={()=> setCurrState("Sign up")} 
                  className='font-semibold text-violet-400 cursor-pointer ml-1 hover:text-violet-300 transition-colors'
                > click here</span>
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginPage