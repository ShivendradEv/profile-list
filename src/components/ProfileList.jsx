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
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {!loading && <div className='profile-list'>
                {profiles && profiles.map(item => (
                    <div key={item.id} className='profile-card'>
                        <h2>{item.Name}</h2>
                        <p>{item.email}</p>
                        <p>{item.gender}</p>
                        <p>{item.age}</p>
                        <div>
                            <NavLink to={`/edit/${item.id}`}>Edit</NavLink>
                            <button type="button" onClick={() => handleDeleteProfile(item.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>}

        </>
    )
}

export default ProfileList