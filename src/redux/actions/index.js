export const addPlayer = player => ({ type: "ADD_PLAYER", payload: player });
export const updateResources = resource => ({
  type: "UPDATE_RESOURCES",
  payload: resource
});
export const changeCity = cityName => ({
  type: "CHANGE_CITY",
  payload: cityName
});
