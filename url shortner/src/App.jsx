import {useState} from 'react';
function App(){
    const[url,setUrl]=useState(" ");
    const[shorturl,setShorturl]=useState(""):
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const res=await.axios.post({url});
        }
        catch(err){
           alert:("error shortning the url");
        }
    }
    return(
        <div className="d-flex flex-row justify-content-center">
             <div className="bg-white">
                <h1 >URL SHORTNER</h1>
                <input type="text">
                   placeholder="enter you input url {url}"
                   onChange(e)=>{url};
                </input>
                <button type="submit" className="bg-dark">
                    shorten
                </button>
                </form>
             </div>
        </div>
    )
}