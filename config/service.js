import { end_point , api } from "./config";


 

export const ip = end_point + api
export const post = (object,path,token) => new Promise((resolve, reject)=> { 
    fetch(ip + path, { 
        method: 'POST', 
        headers: { 
            'Authorization': token, 
            'Accept': 'application/json', 
            'Content-Type': 'application/json' 
        }, body: JSON.stringify(object) 
    }).then(res => { 
        setTimeout(() => null, 0); 
        return res.json() 
    }).then(json => {
        resolve(json); 
    }).catch((err) => reject(err)) 
 
}) 
 
 
export const get = (path,token) =>  new Promise((resolve, reject) =>{ 
    fetch(ip + path, { 
        method: 'GET', 
        headers: { 
            'Authorization': token, 
            'Accept': 'application/json', 
            'Content-Type': 'application/json' 
        } 
    }).then(res => { 
        setTimeout(() => null, 0); 
        return res.json() 
    }).then(json => { 
        resolve(json); 
    }).catch((err) => reject(err)) 
    
}) 








export const get_other = (path,token) =>  new Promise((resolve, reject) =>{ 
    fetch(path, { 
        method: 'GET', 
        mode: 'no-cors'
    }).then(res => { 
        setTimeout(() => null, 0); 
        return res.blob() 
    }).then(blob => { 
        console.log(blob)
        resolve(blob); 
    }).catch((err) => reject(err)) 
 
}) 
