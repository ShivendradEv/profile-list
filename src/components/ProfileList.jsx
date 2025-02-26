import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { viewProfiles, deleteProfile } from '../features/profileThunk';
import { NavLink } from 'react-router-dom';

const ProfileList = () => {

    const dispatch = useDispatch();
    const { profiles, loading, error } = useSelector((state) => state.profiles);

    useEffect(() => {
        dispatch(viewProfiles());
    }, [dispatch]);

    const handleDeleteProfile = (id) => {
        dispatch(deleteProfile(id));
    }

    return (
        <>
            <div className='container'>
                {loading && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {!loading && <div className='profile-list'>
                    {profiles && profiles.map(item => (
                        <div key={item.id} className='profile-card'>
                            <h2 className='name'>{item.Name}</h2>
                            <p className='email'><b>Email: </b>{item.email}</p>
                            <div className='group'>
                                <p className='gender'><b>Gender: </b>{item.gender}</p>
                                <p className='age end'><b>Age: </b>{item.age}</p>
                            </div>
                            <div className='btn-group group'>
                                <NavLink to={`/edit/${item.id}`}>Edit</NavLink>
                                <button type="button" className='end' onClick={() => handleDeleteProfile(item.id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>}
            </div>

        </>
    )
}

export default ProfileList