# Configuring Endpoint and Sending a template message

This section describes the endpoints exposed by the `WhatsAppController` controller.

## Base URL

`/api/whatsapp-meta`

## Endpoints

### Sending a template message

- **URL** : `/api/whatsapp-meta/send-template`
- **Method** : `POST`
- **Description** : Sending a WhatsApp message based on a template.
- **Content-Type** : application/json
- **Body** : JSON

#### Auth credentials


| Auth Type | ```Meta API ▼``` |
|-----------|------------|

**Bearer token** :  `[ Enter the Bearer Token here (Your whatsapp.access.token) ]` 👁️


#### 📌 Exemple of body request :
```json
{
    "phoneNumber": "237658530298",
    "templateName": "nouvelle_enchere",
    "languageCode": "fr",
    "headerPlaceholders":{
        "1": "Moving Auction"
    },
    "bodyPlaceholders": {
        "1": "Nguiffo Varnel" ,
        "2": "Samsung Galaxy S21 Ultra 5G" ,
        "3": "250000 FCFA",
        "4": "2025-03-21",
        "5": "23:59",
        "6": "https://www.bestenchere.org/promo",
        "7": "Moving Auction" 
    },
    "footerPlaceholders": {},
    "buttonPlaceholders": {}
  
}

```

### 📌 Response :
No body response (204 No Content in case of success).

### 📌 Response codes :
- `200 OK` : Message send succesfully.
- `400` : Bad Request.
- `500` : Internal Server Error .


### Message received
-------------
```
**Moving Auction**  

Bonjour **Nguiffo Varnel**,  

L'équipe **Moving Auction** vous informe qu'une nouvelle enchère a été placée sur *Samsung Galaxy S21 Ultra 5G*!  
L'offre actuelle est maintenant de **250000 FCFA**.  

⚡ Réagissez vite pour ne pas manquer cette occasion !  

📅 **Fin de l'enchère** : 🟢 *2025-03-21*  
🕰️ **Heure** : **23:59**  

👍 **Enchérir maintenant** : [https://www.bestenchere.org/promo](https://www.bestenchere.org/promo)  

*Bonne chance !*
```






