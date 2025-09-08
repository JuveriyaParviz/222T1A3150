export async function Log(stack,level,pcg,message){
    const logEnt={
         stack,
         level,
         package:pcg,
         message,
         timestamp:new
         Date().toISOString()};
         try{
            await fetch("http://20.244.56.144/evaluation-service/logs"){
                method: "POST"
                Content-Type:headers:{
                    "applications.json";
                }
                ReportBody.JSON.stringify(logEnt);
            }
         }
         catch(err){
            console.log("failed sending log");
         }
        

    }
