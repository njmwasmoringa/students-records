const apiHost = "http://localhost:3010";

export function getAllReults(){
    return fetch(`${apiHost}/results`).then(resp=>resp.json());
}

export function updateReult(result){
    return fetch(`${apiHost}/results/${result.id}`, {
        method: "PUT",
        body: JSON.stringify(result),
        headers:{
            "Content-Type": "application/json"
        }
    }).then(resp=>resp.json())
}

export function createResult(result){
    return fetch(`${apiHost}/results`, {
        method: "POST",
        body: JSON.stringify(result),
        headers:{
            "Content-Type": "application/json"
        }
    }).then(resp=>resp.json())
}

export function Delete(id){
    return fetch(`${apiHost}/results/${id}`, {
        method: "DELETE"
    }).then(resp=>resp.json())
}