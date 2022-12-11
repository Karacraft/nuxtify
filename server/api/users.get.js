import { getXataClient } from '@/src/xata.js'

export default defineEventHandler( async (event) => {
    // console.info(event)
    const xata = getXataClient()
    const users  = await xata.db.Users.getMany()
    return users 
})
