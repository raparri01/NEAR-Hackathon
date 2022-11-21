const tempUsers = [
  { id: 1, name: 'priyank', email: 'pulumati.priyank@gmail.com' },
  { id: 2, name: 'developer', email: 'developer.priyank@gmail.com' },
]

export const userExamples = () => {
  return tempUsers
}

export const userExample = ({ id }) => {
  return tempUsers.find((user) => user.id === id) || null
}
