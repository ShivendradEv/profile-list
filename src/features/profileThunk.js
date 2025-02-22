import { createAsyncThunk } from "@reduxjs/toolkit";

// read profiles action
export const viewProfiles = createAsyncThunk("viewProducts", async (_, { rejectWithValue }) => {

    try {
        const response = await fetch("https://6765bab9410f8499965601cd.mockapi.io/profiles");
        const json = await response.json();
        return json;
    } catch (error) {
        return rejectWithValue(error.message);
    }

})

// create profile action
export const createProfile = createAsyncThunk("createProfile", async (data, { rejectWithValue }) => {
    try {
        const response = await fetch("https://6765bab9410f8499965601cd.mockapi.io/profiles", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const json = response.json();
        return json;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

// update profile action
export const editProfile = createAsyncThunk("editProfile", async (data, { rejectWithValue }) => {
    try {
        const response = await fetch(`https://6765bab9410f8499965601cd.mockapi.io/profiles/${data.id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const json = await response.json();
        return json;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

// delete profile action
export const deleteProfile = createAsyncThunk("deleteProfile", async (id, { rejectWithValue }) => {
    try {
        const response = await fetch(`https://6765bab9410f8499965601cd.mockapi.io/profiles/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        })
        const json = await response.json();
        return json;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})
