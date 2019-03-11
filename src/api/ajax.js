// 封装发送Ajax的函数对象，自定义promise对象。 
import axios from 'axios'


export default function ajax(url,data = {},method ="GET"){
   
  return new Promise ((resolve,reject)=>{
    let Promise;
    if(method === 'GET'){
        Promise = axios.get(url,
            {
                params:data
            })
    }else if(method === "POST"){
    Promise = axios.post(url,data)
    }
     Promise
      .then(response =>{
          resolve(response.data)
      })
      .catch(error => {
          reject(error)
      })
  })

}