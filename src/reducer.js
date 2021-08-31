export const initialstate = {
  data: [],
  title: "My User Table"
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCHALL":
      return {
        ...state,
        data: action.payload
      };
    case "ADDDATA":
      const revData = [...state.data, action.payload];
      return {
        ...state,
        data: revData
      };
    case "ONDELETE":
      const filDel = state.data.filter((data) => data.id !== action.payload);
      return {
        ...state,
        data: filDel
      };
    case "UPDATE":
      const newData = state.data.map((data) => {
        if (data.id === action.payload.id) {
          return { ...data, username: action.payload.username };
        }
        return data;
      });
      return {
        ...state,
        data: newData
      };
    default:
      return state;
  }
};
