export const fetchPetsThunk = createAsyncThunk('graphql/fetchAois', async (operation: string, thunkApi) => {
    try {
    //   const data: any = await API.graphql(graphqlOperation(operation));
      return 
    //   data.data.listAois.items!;
    } catch (error) {
      console.log(error);
      throw error;
    }
  });

function createAsyncThunk(arg0: string, arg1: (operation: string, thunkApi: any) => Promise<any>) {
    throw new Error("Function not implemented.");
}
