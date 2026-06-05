import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(isLogin){
        navigate('/dashboard');
    }else{
        navigate('/login');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#7A98A6] font-sans m-0 p-0 w-full">
      <div className="flex justify-center items-center min-h-screen w-full py-[30px]">
        <div className="bg-white p-[25px] rounded-[10px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] w-[1000px] max-w-[95%]">
          
          <div className="flex justify-between mb-5">
            <button 
              className={`w-1/2 p-[10px] border-none cursor-pointer text-[16px] rounded-t-[10px] ${isLogin ? 'bg-[#033452] text-white' : 'bg-[#f3f3f3] text-black'}`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button 
              className={`w-1/2 p-[10px] border-none cursor-pointer text-[16px] rounded-t-[10px] ${!isLogin ? 'bg-[#033452] text-white' : 'bg-[#f3f3f3] text-black'}`}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </div>

          {isLogin ? (
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <h2 className="text-2xl font-bold mb-5">Login</h2>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="p-[10px] mb-[10px] border border-[#ddd] rounded-[5px] focus:outline-none focus:border-[#033452] focus:shadow-[0_0_5px_rgba(3,52,82,0.3)] transition-all duration-200"
              />
              <input 
                type="password" 
                placeholder="Password" 
                className="p-[10px] mb-[10px] border border-[#ddd] rounded-[5px] focus:outline-none focus:border-[#033452] focus:shadow-[0_0_5px_rgba(3,52,82,0.3)] transition-all duration-200"
              />
              <a href="#" className="color-[#08172f] no-underline mb-10 text-right">Forgot Password?</a>
              <button type="submit" className="p-[10px] bg-[#033452] text-white border-none rounded-[5px] cursor-pointer hover:opacity-90">
                Login
              </button>
              <p className="text-center mt-[10px]">
                Don't have an account? <span className="cursor-pointer text-[#033452] font-semibold" onClick={() => setIsLogin(false)}>Sign Up</span>
              </p>
            </form>
          ) : (
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <h2 className="text-2xl font-bold mb-5">Sign Up</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[15px] mt-[15px]">
                <div className="flex flex-col">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="w-full p-[10px] border border-[#ddd] rounded-[5px] box-border transition-all duration-200 focus:outline-none focus:border-[#033452] focus:shadow-[0_0_5px_rgba(3,52,82,0.3)]"
                  />
                </div>

                <div className="flex flex-col">
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="w-full p-[10px] border border-[#ddd] rounded-[5px] box-border transition-all duration-200 focus:outline-none focus:border-[#033452] focus:shadow-[0_0_5px_rgba(3,52,82,0.3)]"
                  />
                </div>

                <div className="flex flex-col">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full p-[10px] border border-[#ddd] rounded-[5px] box-border transition-all duration-200 focus:outline-none focus:border-[#033452] focus:shadow-[0_0_5px_rgba(3,52,82,0.3)]"
                  />
                </div>

                <div className="flex flex-col">
                  <input 
                    type="password" 
                    placeholder="Password" 
                    className="w-full p-[10px] border border-[#ddd] rounded-[5px] box-border transition-all duration-200 focus:outline-none focus:border-[#033452] focus:shadow-[0_0_5px_rgba(3,52,82,0.3)]"
                  />
                </div>

                <div className="flex flex-col">
                  <input 
                    type="password" 
                    placeholder="Confirm Password" 
                    className="w-full p-[10px] border border-[#ddd] rounded-[5px] box-border transition-all duration-200 focus:outline-none focus:border-[#033452] focus:shadow-[0_0_5px_rgba(3,52,82,0.3)]"
                  />
                </div>

                <div className="flex flex-col">
                  <select className="w-full p-[10px] border border-[#ddd] rounded-[5px] box-border transition-all duration-200 bg-white focus:outline-none focus:border-[#033452] focus:shadow-[0_0_5px_rgba(3,52,82,0.3)]">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="mt-5 w-full p-[10px] bg-[#033452] text-white border-none rounded-[5px] cursor-pointer hover:opacity-90">
                Register
              </button>
              <p className="text-center mt-[10px]">
                Already have an account? <span className="cursor-pointer text-[#033452] font-semibold" onClick={() => setIsLogin(true)}>Login</span>
              </p>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}

export default Login;