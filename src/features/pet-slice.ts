import { createSlice, current } from '@reduxjs/toolkit';
// import { addPetsToDB, fetchPetssThunk, sendAnalysisRequest, updatePetsFireSubscription } from '../Api-thunk/api.service';
// import { checkAlertOrAnalysis, formatPetss } from './petsFunctions';

const initialState = {
  status: '',
  pets: null,
  createPetsState: null as any,
  analysisStatus: false, //true - new layers from analysis
  fireAlarm: false,
};

export const petSlice = createSlice({
  name: 'petSlice',
  initialState,
  reducers: {
    createPetsStarted: (state, { payload }) => {
      if (payload.polygon) {
        state.createPetsState = payload.polygon;
      } else {
        state.createPetsState = [];
      }
    },
    createPetsExit: (state) => {
      state.createPetsState = null;
    },
    resetPetsStatus: (state) => {
      state.status = '';
    },
  },
  extraReducers: (builder) => {
    // builder
      // .addCase(fetchPetssThunk.rejected, (state, action) => {
      //   state.status = 'rejected';
      //   console.log('rejected');
      // })
      // .addCase(fetchPetssThunk.pending, (state, action) => {
      //   state.status = 'pending';
      //   console.log('loading');
      // })
      // .addCase(fetchPetssThunk.fulfilled, (state, action) => {
        // const newPetssState = formatPetss(action.payload);
        // console.log(checkAlertOrAnalysis(state.pets, newPetssState));
        // console.log(current(state));
        // switch (checkAlertOrAnalysis(state.pets, newPetssState)) {
        //   case 'FIRE_ALERT':
        //     state.fireAlarm = true;
        //     break;
        //   case 'ANALYSIS':
        //     state.analysisStatus = true;
        //     break;
        //   default:
        // }
        // state.status = 'fulfilled';
        // state.pets = newPetssState;
        // console.log(current(state));
      // })
  }
});

export const getPetsData= ()=>{
  return async (dispatch:any)=>{
    // dispatch();
    const response=await fetch('https://api.petfinder.com/v2/animals?type=dog&page=2'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${process.env.ACCESS_KEY}`
       }
    }
    )
      .then(function(response){
        console.log("test ",response);
        return response.json();
      })
      .then(function(myJson) {
        console.log("test 2 ",myJson);
        // setPets(myJson);
      });
  }
}

export const { createPetsStarted, createPetsExit, resetPetsStatus } = petSlice.actions;

export default petSlice.reducer;


