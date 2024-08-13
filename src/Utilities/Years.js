const currentYear = new Date().getFullYear();

export const Years = (selectedYear) => {
  //* Generate a list of years for the past 5 years
  const pastYears = Array.from(
    { length: 5 },
    (_, index) =>
      Number(selectedYear ? selectedYear : currentYear) - (index + 1)
  );
  //* Generate a list of years for the next 5 years
  const futureYears = Array.from(
    { length: 5 },
    (_, index) =>
      Number(selectedYear ? selectedYear : currentYear) + (index + 1)
  );
  //* Combine the past and future years, and include the current year
  return [
    ...pastYears.reverse(),
    selectedYear ? selectedYear : currentYear,
    ...futureYears,
  ];
};
