import commonAPI from "./commonApi"

export const addEachStudent=(responceData)=>{
   return commonAPI("post","/students",responceData)
}

export const getAllStudents=()=>{
    return commonAPI("get","/students","")
}