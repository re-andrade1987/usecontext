import { users, departaments } from '../mock'

export const getUsers = async () => {
    return new Promise(resolve => setTimeout(() => {
        resolve(users)
    }, 2000))
}
