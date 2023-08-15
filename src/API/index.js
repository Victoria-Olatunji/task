export const getAllBanks = () => {
  return fetch("https://fitted-portal-api.herokuapp.com/api/v1/bank/banks ").then((res) => res.json());
};

export const getResolveAccountNumber = () => {
  return fetch("https://fitted-portal-api.herokuapp.com/api/v1/bank/resolveAccount-").then((res) => res.json());
};

