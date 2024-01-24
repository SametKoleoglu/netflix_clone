import axios from "axios";

const Config={
    baseUrl:"",
    token:"",
};

export const getUpComingMovies=async()=>{
    try
    {
        const response = await axios.get(`${Config.baseUrl}/upcoming`,{
            headers:{
                Authorization:`Bearer ${Config.token}`
            }
        });
        const data = response.data
        const status = response.status
        return{success:true,data:data,status:status}
    }
    catch(error)
    {
        console.log(error);
        return{success:false,data:error}
    }
}


export const getNowPlayingMovies=async()=>{
    try
    {
        const response = await axios.get(`${Config.baseUrl}/now_playing`,{
            headers:{
                Authorization:`Bearer ${Config.token}`
            }
        });
        const data = response.data
        const status = response.status
        return{success:true,data:data,status:status}
    }
    catch(error)
    {
        console.log(error);
        return{success:false,data:error}
    }
}


export const getPopularMovies=async()=>{
    try
    {
        const response = await axios.get(`${Config.baseUrl}/popular`,{
            headers:{
                Authorization:`Bearer ${Config.token}`
            }
        });
        const data = response.data
        const status = response.status
        return{success:true,data:data,status:status}
    }
    catch(error)
    {
        console.log(error);
        return{success:false,data:error}
    }
}


export const getTopRatedMovies=async()=>{
    try
    {
        const response = await axios.get(`${Config.baseUrl}/top_rated`,{
            headers:{
                Authorization:`Bearer ${Config.token}`
            }
        });
        const data = response.data
        const status = response.status
        return{success:true,data:data,status:status}
    }
    catch(error)
    {
        console.log(error);
        return{success:false,data:error}
    }
}