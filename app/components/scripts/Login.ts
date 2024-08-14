"use server"
import { cookies } from "next/headers";

export async function handleLogin(username: string, password: string) {
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const data = await response.json(); 
      console.log('Response:', data);
      if(data){
          const cookieStore = cookies();
          cookieStore.set("token",data?.token)
      }else{
        console.error("Login failed:", data);
      }
 

    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  }
  