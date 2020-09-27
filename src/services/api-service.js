import config from '../config'

export const GeneralApiServices = {
    getAllItems(dbName){
        return fetch(`${config.API_ENDPOINT}/${dbName}`, {
            headers: {
                'Authorization': `Basic ${config.API_TOKEN}`,
            },
        })
        .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
        )
    },
    sortItems(dbName,sortQuery){
        return fetch(`${config.API_ENDPOINT}/${dbName}?${sortQuery}`, {
            headers: {
                'Authorization': `Basic ${config.API_TOKEN}`,
            },
        })
        .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
        )
    },
    postItem(dbName,item){
        //const proxy='https://cors-anywhere.herokuapp.com'
        return fetch(`${config.API_ENDPOINT}/${dbName}`,{
            method: `POST`,
            headers:{
                'Authorization': `Basic ${config.API_TOKEN}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        .then(res=>(!res.ok)
        ? res.json().then(e=>Promise.reject(e))
        : res.json())
    },
    getItemById(dbName,id){
        return fetch(`${config.API_ENDPOINT}/${dbName}/${id}`, {
            headers: {
                'Authorization': `Basic ${config.API_TOKEN}`,
            },
        })
        .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
        )
    },
    patchItemById(dbName,id,fieldsToUpdate){
        return fetch(`${config.API_ENDPOINT}/${dbName}/${id}`,{
            method: `PATCH`,
            headers:{
                'Authorization': `Basic ${config.API_TOKEN}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(fieldsToUpdate)
        })
        .then(res=>(!res.ok)
        ? res.json().then(e=>Promise.reject(e))
        : res.json())
    },
    DeleteItemById(dbName,id){
        return fetch(`${config.API_ENDPOINT}/${dbName}/${id}`,{
            method: `DELETE`,
            headers:{
                'Authorization': `Basic ${config.API_TOKEN}`,
            },
        })
        .then(res=>(!res.ok)
        ? res.json().then(e=>Promise.reject(e))
        : res.json())
    },
}
export const MealApiServices={
    getMealsByUser(id){
        return fetch(`${config.API_ENDPOINT}/meals?userId=${id}`, {
            headers: {
                'Authorization': `Basic ${config.API_TOKEN}`,
            },
        })
        .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
        )
    }
}