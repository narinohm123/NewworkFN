export default function ({$axios, store, redirect}){
    $axios.onRequest(request =>{
        let token = localStorage.getItem('jwt')
        if(token){
            request.headers.common['Cookie'] = `jwt ${token}`
        }
        return request
    })
}