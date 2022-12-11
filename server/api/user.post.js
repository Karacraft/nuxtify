import { getXataClient } from '@/src/xata.js'

export default defineEventHandler( async (e) => {

    const body = await readBody(e)
    const { name,email,bio } = body
    console.info(body)
    console.info(name,email)
    // // return 'Create Post is working'
    const xata = getXataClient()
    const record = await xata.db.Users.create({
        name:name,
        email:email,
        bio: bio
    })
    return record
})
