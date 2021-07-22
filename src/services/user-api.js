export async function  userLogin  (email, password)  {
    const method = "POST";
    const data = {email, password}
    const body = JSON.stringify(data);
    const headers =  {
        'Content-Type': 'application/json'
    }
    const response = await fetch("/api/auth/login",{method, body, headers})
    return await response.json();
}

export async function userRegistration (firstName, lastName, email, password) {
    try {
        const method = "POST";
        const data = {firstName, lastName, email, password}
        const body = JSON.stringify(data);
        const headers =  {
            'Content-Type': 'application/json'
        }
        const response = await fetch("/api/auth/register",{method, body, headers})
        return await response.json();
    } catch(e) {
        console.log(e)
    }

}
