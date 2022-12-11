import { getXataClient } from '@/src/xata.js'

export default defineEventHandler( async (e) => {

    const body = await readBody(e)
    const { id  } = body
    const xata = getXataClient()
    const record = await xata.db.Users.delete(id)
    return record
})
