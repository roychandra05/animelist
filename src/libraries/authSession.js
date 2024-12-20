import { getServerSession } from "next-auth"
import {authOption} from '@/app/api/auth/[...nextauth]/route'

export const authSession = async() => {
    const user = await getServerSession(authOption)
    return user?.user
}
export default authSession