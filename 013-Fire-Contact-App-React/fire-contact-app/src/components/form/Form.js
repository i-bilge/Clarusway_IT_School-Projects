import React from 'react'
import { addInfo } from '../../utils/functions';
import { useState } from 'react'

const Form = () => {
    const [name, setName] = useState("");
    const [tel, setTel] = useState("");
    const [gender, setGender] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addInfo({
            name, tel, gender
        })
        setName("")
        setTel("")
        setGender(undefined)
    };

  return (
    <form className='form' onSubmit={handleSubmit}>
        <h1>CONTACT FORM</h1>
        <h2>ADD CONTACT</h2>
        <div className='formArea'>
                <label>👤</label>
                <input placeholder='Fullname' 
                required
                value={name} 
                onChange={(e) => setName(e.target.value)}
                />

                <label>📞</label>
                <input placeholder='Phone Number' 
                required
                value={tel} 
                onChange={(e) => setTel(e.target.value)}
                />

                <label htmlFor='genders'>🧬</label>
                <select name='genders' id='genders'
                required
                value={gender} 
                onChange={(e) => setGender(e.target.value)}
                >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                </select>
        </div>

        <button className='submitBtn' type='submit'>ADD</button>
    </form>

  )
}

export default Form