export const useCards = () => {
  const getNIC = () => {
    return {
      name: "Tharindu Sathsara Ranasinghe perera don silva",
      sex: "male",
      no: "200043923488",
      dob: "1995-02-02",
      address: "No 23, 1st Lane, Colombo 03",
      doi: "2021-02-02",
      id: "2332543563",
      pob: "Sri Jayawardenapura",
      type: "NIC",
    };
  };
  const getPassport = () => {
    return {
      name: "Tharindu Ranasinghe",
      sex: "male",
      no: "N7754121",
      nationality: "SRILANKAN",
      dob: "1995-02-02",
      proffession: "Softeware Engineer",
      doi: "2021-02-02",
      doe: "2031-02-02",
      type: "PASSPORT",
    };
  };
  const getDrivingLicence = () => {
    return {
      name: "Tharindu Ranasinghe",
      sex: "male",
      no: "B1234567",
      nationality: "SRILANKAN",
      dob: "1995-02-02",
      bloodGroup: "AB+",
      doi: "2021-02-02",
      doe: "2037-02-02",
      restrictions: true,
      type: "DRIVING-LICENSE",
      categories: ["A", "A1", "B", "B1", "G1"],
    };
  };

  return {
    getNIC,
    getPassport,
    getDrivingLicence,
  };
};
