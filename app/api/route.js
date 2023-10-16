import NextAuth from "next-auth"
import {authOptions} from "@/app/utils/auth";

export default NextAuth(authOptions)