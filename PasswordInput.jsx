import React from 'react'
import { useState } from 'react'
import {FaRegEye,FaRegEyeSlash} from "react-icons/fa6";

const PasswordInput = ({value, onChange, placeholder}) => {
    const [isShowPassword, setIsShowPassword]=useState(false);
    const toggleShowpassword=()=>{
        setIsShowPassword(!isShowPassword);
    };
  return (
    <div className='flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3'>
        <input
        value={value}
        onChange={onChange}
        type={isShowPassword ? "text":"password"}
        placeholder={placeholder || "password"}
        className="w-full text-sm bg-transparent py-3 mr-3 rounded outline-none "
        />
        {isShowPassword ?(
        <FaRegEye
           size={22}
           className="text-primary cursor-primary"
           onClick={()=>toggleShowpassword()}
        />
        ):(
            <FaRegEyeSlash
           size={22}
           className="text-slate-400 cursor-primary"
           onClick={()=>toggleShowpassword()}
        />
        )}

      
    </div>
  )
}

export default PasswordInput
