import fastify from 'fastify'
import { knex } from './database'
import { env } from './env'

const app = fastify()

app.get('/hello', async () => {
  // const transactions = await knex('transactions').insert({
  //   id: crypto.randomUUID(),
  //   title: 'Transação de teste',
  //   amount: 1000,
  // }).returning('*')

  // const transactions = await knex('transactions').select('*')

  const transactions = await knex('transactions')
    .where('amount', 1000)
    .select('*')

  return transactions
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
