# Environment Setup for Twilio WhatsApp Integration

## Introduction
This guide will walk you through the process of setting up a Twilio developer account for integrating WhatsApp messaging into **AlertX**. It includes creating a Twilio account, setting up the WhatsApp sandbox, and obtaining API credentials for sending messages.

---

## 1. Create a Twilio Developer Account

1. Go to [Twilio's official website](https://www.twilio.com/)
2. Click on **Sign Up** and fill in the required details (name, email, company name, etc.).
3. Verify your email and phone number.
4. Once logged in, navigate to the **Twilio Console**.

---

## 2. Setup WhatsApp Sandbox for Development

Twilio provides a **WhatsApp Sandbox** that allows you to test sending and receiving messages.

1. In the **Twilio Console**, go to **Messaging** > **Try it out** > **Send a WhatsApp message**.
2. You will see a unique **Sandbox number** and an instruction to join it.
3. From your WhatsApp application, send the following message to the given sandbox number:
   ```
   join <your_unique_code>
   ```
4. You should receive a confirmation message stating that your WhatsApp number is now linked to the sandbox.

---

## 3. Get Twilio API Credentials

To integrate Twilio’s API with your project, you need to retrieve your **Account SID**, **Auth Token**, and **WhatsApp Sandbox Number**.

1. In the **Twilio Console**, go to **Account** > **API Keys & Tokens**.
2. Note down the following values:
   - **Account SID**
   - **Auth Token**
   - **Sandbox Phone Number**

You will use these credentials in your application to authenticate API requests.

---

## 4. Install Twilio SDK in Spring Boot

To interact with Twilio’s API, you need to install the Twilio SDK in your Spring Boot application.

### Add Twilio Dependency (Maven)
```xml
<dependency>
    <groupId>com.twilio.sdk</groupId>
    <artifactId>twilio</artifactId>
    <version>7.1.0</version>
</dependency>
```

---

## 5. Configure Environment Variables

It’s best practice to store your Twilio credentials in environment variables or an `.env` file to keep them secure.

### Using `.env` file
Create a file named `.env` at the root of your project and add the following variables:
```env
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_WHATSAPP_NUMBER=whatsapp:+your_twilio_sandbox_number
```

### Load Environment Variables in Spring Boot
If you are using **spring-dotenv**, it will automatically load variables from the `.env` file.

Alternatively, you can set them in `application.yml`:
```yaml
spring:
  twilio:
    account-sid: ${TWILIO_ACCOUNT_SID}
    auth-token: ${TWILIO_AUTH_TOKEN}
    whatsapp-number: ${TWILIO_WHATSAPP_NUMBER}
```

---

## 6. Sending a Test WhatsApp Message

### Create a Twilio Service in Spring Boot
Create a `TwilioWhatsAppService` class to send messages:

```java
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class TwilioWhatsAppService {

    @Value("${spring.twilio.account-sid}")
    private String accountSid;

    @Value("${spring.twilio.auth-token}")
    private String authToken;

    @Value("${spring.twilio.whatsapp-number}")
    private String whatsappNumber;

    public void sendWhatsAppMessage(String to, String message) {
        Twilio.init(accountSid, authToken);
        Message.creator(
                new PhoneNumber("whatsapp:" + to),
                new PhoneNumber(whatsappNumber),
                message
        ).create();
    }
}
```

### Testing the Service
Call the service to send a test message:
```java
@Service
public class TestService {

    private final TwilioWhatsAppService twilioWhatsAppService;

    public TestService(TwilioWhatsAppService twilioWhatsAppService) {
        this.twilioWhatsAppService = twilioWhatsAppService;
    }

    @PostConstruct
    public void sendTestMessage() {
        twilioWhatsAppService.sendWhatsAppMessage("+1234567890", "Hello from AlertX!");
    }
}
```

---

## 7. Going Live with WhatsApp API (Optional)

For production, you need to request access to the **Official WhatsApp Business API**:
1. Go to **Twilio Console** > **Messaging** > **WhatsApp Senders**.
2. Apply for a WhatsApp Business account and verify your number.
3. Once approved, use the assigned **phone number** instead of the sandbox number in your API requests.

---

## Conclusion
You have successfully set up a Twilio developer account, configured WhatsApp integration, and tested sending messages using Spring Boot. Your application can now send automated WhatsApp notifications! 🚀

