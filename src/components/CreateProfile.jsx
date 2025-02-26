import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProfile } from '../features/profileThunk';

const CreateProfile = () => {

    const [formData, setFormData] = useState();

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData, "data");
        dispatch(createProfile(formData));
    }


    return (
        <div className='container'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className='form-group'>
                    <label>Enter Name</label>
                    <input type='text' className='form-control' placeholder='Enter Name' name='Name' onChange={(e) => handleChange(e)} />
                </div>
                <div className='form-group'>
                    <label>Enter Email</label>
                    <input type='email' className='form-control' placeholder='Enter Email' name='email' onChange={(e) => handleChange(e)} />
                </div>
                <div className='form-group'>
                    <label>Enter Age</label>
                    <input type='number' className='form-control' placeholder='Enter Age' name='age' onChange={(e) => handleChange(e)} />
                </div>
                <div className='form-group'>
                    <label>Select Gender</label>
                    <label>
                        <input type='radio' className='form-control' name='gender' value="male" onChange={(e) => handleChange(e)} /> Male
                    </label>
                    <label>
                        <input type='radio' className='form-control' name='gender' value="female" onChange={(e) => handleChange(e)} /> Female
                    </label>
                </div>
                <input type='submit' value="Create Profile" />
            </form>
        </div>
    )
}

export default CreateProfile