# Environment Setup for Whatsapp Cloud API Integration

## Introduction
Creating a Facebook Developer Account and Validating the WhatsApp Cloud API in oder to integrate Whatsapp messaging into **AlertX** !!!
To use the WhatsApp Cloud API, you need to create a Facebook Developer account, a Meta app, and obtain validation. Here's a detailed guide.

---

## 1. 📝 Creating the Facebook Developer Account

1. Access the platform, Go to [Meta for Developers](https://developers.facebook.com/)
2. Log in with Facebook : Click on **Get Started** and Log in with your personal Facebook account.
3. Accept the developer terms of service.
4. Once logged in, Create a developer account.
    - Fill in the requested information (Name, Email, Role, etc.).
    - Verify your account with a phone number or email.
---

## 2. ⚙ Creating a Meta App

1. Create a new app
    - Go to [My Apps](https://developers.facebook.com/apps/).
    - Click on **Create App**.
    - Choose **Business** as the app type.
2. Configure the app
    - Fill in the App Name.
    - Select your Business Manager account (or create one).
    - Click on **Create App** and complete the captcha.

---

## 3. 📲 Adding WhatsApp to the App

1. Access Meta Products
    - Go to the Products tab → Click on **Add Product**.
    - Select **WhatsApp** → Click on **Set Up**.
2. Generate a temporary access token
    - Click on **Configuration** → Choose a Business account.
    - A temporary access token will be displayed.
    - Note it down as it expires after a certain time.
3. Get your phone number ID
    - Meta provides a free test number to send messages.
    - You can add your own number and verify it via SMS.

---

## 4. ✅ Validation and Going Live

1. Verify the business
    - Go to **Business Manager**.
    - Select your business and go to **Settings > Security Center**.
    - Click on **Start Verification** and provide the required documents (Business registration, website, etc.).
    - Meta may request verification by phone or email.
2. Go live
   - In Facebook Developer, go to **Settings > Advanced**.
   - Change the app mode to **Live**.
   - Add the necessary permissions (whatsapp_business_messaging, whatsapp_business_management).

---


## 5. Creating a template validate by Meta

There are 03 main categories of meta's whatsapp templates :
- Marketing
- Utility
- Authorisation

### Creating a whatsapp template with placeholders

To create a WhatsApp Cloud API message template to confirm a travel reservation (for example), here are the essential parameters:

---

### 🏷️ Model parameters

| Parameters         | Values |
|------------------|------------------------------|
| **Model's name**  | `travel_booking_confirmation` |
| **Category**     | `Utilitaire` |
| **Language**        | `fr` (or `en` depending on the target language community) |
| **Message's type** | `TEMPLATE` |
| **Component**    | `HEADER` , `BODY` , `FOOTER` , `BUTTONS` |

---

### Model Structure

- Header : ```Confirmation de réservation de voyage -- Moving.com```

- Body (with placeholders)
```
Bonjour *{{1}}*,

Votre réservation pour le voyage *{{2}}* est confirmée ! 🏝️✈️  
📆 Date de départ : *{{3}}*  
🕐 Heure : *{{4}}*  
📍 Lieu d’embarquement : *{{5}}*  
💳 Référence de réservation : *{{6}}*  

Merci d’avoir choisi *{{7}}* pour votre voyage ! 😊
```

- Footer : ```Besoin d’aide ? Contactez-nous 📞.```

### Explanation of variables

| Placeholder | Signification |
|------------|--------------|
| `{{1}}`    | Nom du client |
| `{{2}}`    | Destination |
| `{{3}}`    | Date de départ |
| `{{4}}`    | Heure de départ |
| `{{5}}`    | Lieu d’embarquement |
| `{{6}}`    | Numéro de réservation |
| `{{7}}`    | Nom de l’agence ou de la compagnie |


### Control and Validation

To validate templates on Meta's WhatsApp Cloud API, here are the general steps to follow:

1. **Submission for approval**: Once templates have been created, they must be submitted to Meta for approval. Meta checks that templates comply with their guidelines and can be used to initiate conversations with customers
2. **Receive approval**: If your template is approved, you can start using it to send messages to customers via the WhatsApp Cloud API.
3. **Using approved templates**: Once approved, you can use these templates to initiate new conversations or use them in ongoing conversations.


For more details on how to create these templates, see the official Meta guide: https://www.facebook.com/business/help/2055875911147364.


## Conclusion
You have successfully set up a Meta developer account, configured WhatsApp Cloud api integration for Spring Boot. Your application can now send automated WhatsApp notifications! 🚀

