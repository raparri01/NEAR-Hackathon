import {
  transactions,
  transaction,
  createTransaction,
  updateTransaction,
  deleteTransaction,
} from './transactions'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('transactions', () => {
  scenario('returns all transactions', async (scenario) => {
    const result = await transactions()

    expect(result.length).toEqual(Object.keys(scenario.transaction).length)
  })

  scenario('returns a single transaction', async (scenario) => {
    const result = await transaction({ id: scenario.transaction.one.id })

    expect(result).toEqual(scenario.transaction.one)
  })

  scenario('creates a transaction', async () => {
    const result = await createTransaction({
      input: {
        appName: 'String',
        hash: 'String',
        signerId: 'String',
        receiverId: 'String',
        blockHash: 'String',
        blockTimestamp: 4594234n,
        kind: 'String',
        deposit: 'String',
        status: 'String',
      },
    })

    expect(result.appName).toEqual('String')
    expect(result.hash).toEqual('String')
    expect(result.signerId).toEqual('String')
    expect(result.receiverId).toEqual('String')
    expect(result.blockHash).toEqual('String')
    expect(result.blockTimestamp).toEqual(4594234n)
    expect(result.kind).toEqual('String')
    expect(result.deposit).toEqual('String')
    expect(result.status).toEqual('String')
  })

  scenario('updates a transaction', async (scenario) => {
    const original = await transaction({
      id: scenario.transaction.one.id,
    })
    const result = await updateTransaction({
      id: original.id,
      input: { appName: 'String2' },
    })

    expect(result.appName).toEqual('String2')
  })

  scenario('deletes a transaction', async (scenario) => {
    const original = await deleteTransaction({
      id: scenario.transaction.one.id,
    })
    const result = await transaction({ id: original.id })

    expect(result).toEqual(null)
  })
})
