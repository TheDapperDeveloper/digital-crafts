import React, {useState} from 'react'

export default function Form() {
    const [formData, setFormData] = useState({})
    return (
        <div>
            <h1>Form</h1>
            <form action="">
                <input onChange={(e)=>setFormData({...formData, [e.target.name]:e.target.value})} type="text" placeholder="username"  name="username" value={formData?.username}/>
                <input onChange={(e)=>setFormData({...formData, [e.target.name]:e.target.value})} type="text" placeholder="email" name="email" value={formData?.email}/>
                <input onChange={(e)=>setFormData({...formData, [e.target.name]:e.target.value})}t ype="password" placeholder="password" name="password" value={formData?.password}/>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}
