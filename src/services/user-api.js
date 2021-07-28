export async function  userLogin  (email, password)  {
    const method = "POST";
    const data = {email, password}
    const body = JSON.stringify(data);
    const headers =  {
        'Content-Type': 'application/json'
    }
    const response = await fetch("/api/auth/login",{method, body, headers})
        .then(res => res.json())
        .catch(error => error)
    if (response.errors) {
        throw new Error(response.message)
    }
    return await response;

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

export async function purchasedTickets (id, token) {
    try {
        const method = "POST";
        const data = {id, token};
        const body = JSON.stringify(data);
        const headers = {
            'Content-Type': 'application/json'
        }
        const response = await fetch("/api/byu-ticket/request-tickets", {method, body, headers})
        return await response.json()
    } catch (e) {
        console.log(e)
    }
}

export async function buyTicket (filmId ,selectedPlaceNumber, token) {
    try {
        const method = "POST";
        const data = {filmId ,selectedPlaceNumber, token};
        const body = JSON.stringify(data);
        const headers = {
            'Content-Type': 'application/json'
        }
        const response = await fetch("/api/byu-ticket/byu-ticket", {method, body, headers})
        return await response.json()
    } catch (e) {
        console.log(e)
    }
}
