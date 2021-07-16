

export const signin = (user) =>{
    const API = 'https://lit-eyrie-58493.herokuapp.com'
    return fetch(`${API}/api/auth/login`,{
        method:"POST",
        headers:{
           "Content-Type" :"application/json",
        },
        body:JSON.stringify(user)
       
    })
    .then(response=>{
        console.log(response);
        return response.json()
    })
    .catch(err => console.log(err));
}
