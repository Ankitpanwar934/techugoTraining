// actions/exampleActions.js
export const fetchData = () => {
    return async (dispatch) => {
      dispatch({ type: 'FETCH_DATA_REQUEST' });
  
      try {
        // Replace with your actual data fetching logic
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
  
        dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_DATA_FAILURE', error: error.message });
      }
    };
  };
  