const employers = [
  {
    id: 1,
    name: 'Aneurin Parkinson',
    age: 25,
    gender: 'MALE',
    companyId: 1,
  },
]

const employees = [
  {
    id: 1,
    name: 'Domagoj Zivanovic',
    age: 24,
    gender: 'MALE',
    companyId: 1,
    position: 'Developer',
  },
]

const companies = [
  {
    id: 1,
    name: 'Coreline',
    city: 'Zagreb',
    yearFounded: 2018,
    founder: employers[0],
    employees: employees.filter(e => e.id === 1),
    logo: null,
  },
]

export default {
  employers,
  employees,
  companies,
}
