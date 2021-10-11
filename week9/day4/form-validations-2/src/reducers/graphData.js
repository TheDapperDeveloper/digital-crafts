const initialState = {
  exoticCars: {
    x: ["Lamborghini", "Rolls Royce", "Aston Martin"],
    y: [20, 14, 23],
    name: "Exotic Cars",
    type: "bar",
    marker: {
      color: "rgb(255,95,120)",
    },
},
luxuryWatches: {
  x: ["Audemars Piquet", "Patek Phillipe", "Hublot"],
  y: [12, 18, 29],
  name: "Luxury Watches",
  type: "bar",
  marker: {
    color: "rgb(59,24,140)",
  },
},
};

const GraphData = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CHARTDATA":
      return { ...state};

    default:
      return state;
  }
};

export default GraphData;
