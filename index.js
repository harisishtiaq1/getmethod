const http=require("http")
const url=require("url")
http.createServer((req,res)=>{
    if(req.url==="/"){
        res.write("Welcome Haris Ishtiaq")
    }
    if(req.method==="GET"){  
    const result=url.parse(req.url,true).query
    const output= new URLSearchParams(result)
    for(let [key,value] of output)
    console.log(key,value);
    }
    else if(req.method==="POST"){
        let data=[];
        req.on("data",(chunk)=>{
            data.push(chunk)
        })
        req.on("end",()=>{
            const result=Buffer.concat(data).toString();
            const output=new URLSearchParams(result);
            let dataValue={}
            for(let [key,value] of output){
            dataValue[key] = value;
            }
            console.log(dataValue);
            console.log("So the name is  " +dataValue.Name);
            console.log("So the age is " +dataValue.Age);
            console.log("So CNIC number is " +dataValue.Cnic);
        })
    
    }
    res.end("")
}).listen(8081)
