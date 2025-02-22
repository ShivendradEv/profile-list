import { createSlice } from "@reduxjs/toolkit";
import { createProfile, deleteProfile, editProfile, viewProfiles } from "./profileThunk";


export const ProfileSlice = createSlice({
    name: "Profiles",
    initialState: {
        profiles: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(viewProfiles.pending, (state) => {
                state.loading = true;
            })
            .addCase(viewProfiles.fulfilled, (state, action) => {
                state.loading = false;
                state.profiles = action.payload;
            })
            .addCase(viewProfiles.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
            .addCase(createProfile.pending, (state) => {
                state.loading = true
            })
            .addCase(createProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.profiles.push(action.payload);
            })
            .addCase(createProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(editProfile.pending, (state) => {
                state.loading = true
            })
            .addCase(editProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.profiles = state.profiles.map((item) => item.id === action.payload.id ? action.payload : item)
            })
            .addCase(editProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deleteProfile.pending, (state) => {
                state.loading = true
            })
            .addCase(deleteProfile.fulfilled, (state, action) => {
                state.loading = false;
                const { id } = action.payload;
                if (id) {
                    state.profiles = state.profiles.filter((item) => item.id !== id);
                }
            })
            .addCase(deleteProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export default ProfileSlice.reducer;