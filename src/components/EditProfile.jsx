import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editProfile, viewProfiles } from '../features/profileThunk';

const EditProfile = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    const { profiles, loading, error } = useSelector((state) => state.profiles);
    const [formData, setFormData] = useState({
        Name: '',
        email: '',
        age: '',
        gender: ''
    });

    useEffect(() => {
        dispatch(viewProfiles())
    }, [dispatch])

    useEffect(() => {
        if (id && profiles.length > 0) {
            const singleProfile = profiles.filter((item) => item.id === id);
            if (singleProfile) {
                setFormData(singleProfile[0]);
            }
        }
    }, [id, profiles])

    const newData = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        console.log(formData);
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(editProfile(formData))
    }

    return (
        <div className='container'>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {!loading &&
                <form onSubmit={handleUpdate}>
                    <div className='form-group'>
                        <label>Enter Name</label>
                        <input type='text' className='form-control' placeholder='Enter Name' name='Name' value={formData && formData.Name} onChange={newData} />
                    </div>
                    <div className='form-group'>
                        <label>Enter Email</label>
                        <input type='email' className='form-control' placeholder='Enter Email' name='email' value={formData && formData.email} onChange={newData} />
                    </div>
                    <div className='form-group'>
                        <label>Enter Age</label>
                        <input type='text' className='form-control' placeholder='Enter Age' name='age' value={formData && formData.age} onChange={newData} />
                    </div>
                    <div className='form-group'>
                        <label>Select Gender</label>
                        <label>
                            <input type='radio' className='form-control' name='gender' value="male" checked={formData && formData.gender === "male"} onChange={newData} /> Male
                        </label>
                        <label>
                            <input type='radio' className='form-control' name='gender' value="female" checked={formData && formData.gender === "female"} onChange={newData} /> Female
                        </label>
                    </div>
                    <input type='submit' value="Create Profile" />
                </form>
            }
        </div>

    )
}

export default EditProfile