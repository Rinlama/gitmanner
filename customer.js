const customer = {
  firstName: "Sam",
  lastName: "Lama",
  credit: 100.0,
  shipTo: [1, 2, 3],
  active: false,
  address: [
    {
      id: 1,
      type: "homeAddress",
      address: "123 transport street",
    },
    {
      id: 1,
      type: "officeAddress",
    },
  ],
};
console.info(customer.address);
