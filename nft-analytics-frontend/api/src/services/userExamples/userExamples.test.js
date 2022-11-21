import {
  userExamples,
  userExample,
  createUserExample,
  updateUserExample,
  deleteUserExample,
} from './userExamples'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('userExamples', () => {
  scenario('returns all userExamples', async (scenario) => {
    const result = await userExamples()

    expect(result.length).toEqual(Object.keys(scenario.userExample).length)
  })

  scenario('returns a single userExample', async (scenario) => {
    const result = await userExample({ id: scenario.userExample.one.id })

    expect(result).toEqual(scenario.userExample.one)
  })

  scenario('creates a userExample', async () => {
    const result = await createUserExample({
      input: { email: 'String8831715' },
    })

    expect(result.email).toEqual('String8831715')
  })

  scenario('updates a userExample', async (scenario) => {
    const original = await userExample({
      id: scenario.userExample.one.id,
    })
    const result = await updateUserExample({
      id: original.id,
      input: { email: 'String23798932' },
    })

    expect(result.email).toEqual('String23798932')
  })

  scenario('deletes a userExample', async (scenario) => {
    const original = await deleteUserExample({
      id: scenario.userExample.one.id,
    })
    const result = await userExample({ id: original.id })

    expect(result).toEqual(null)
  })
})
