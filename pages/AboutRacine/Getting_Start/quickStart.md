# Quick Start

Welcome to **AlertX**! 🚀 This guide will help you quickly set up and launch the project to start using its messaging functionalities, including WhatsApp, SMS, Gmail, and Push Notifications.

## Installation

1. **Clone the AlertX repository from GitHub:**

   ```shell
   git clone https://github.com/MAG-ENCRYPTION/AlertX-docs.git
   ```

2. **Navigate to the project directory:**

   ```shell
   cd AlertX-docs
   ```

3. **Ensure Docker is installed and running:**
   - Install Docker if not already installed: [Docker Installation Guide](https://docs.docker.com/get-docker/)

4. **Start the ScyllaDB container:**

   ```shell
   docker-compose up -d
   ```

5. **Verify that ScyllaDB is running:**

   ```shell
   docker ps
   ```
   You should see the `scylla-container` running.

## Running the Project

### 1. Set Up Environment Variables

Before running the application, create a `.env` file at the root of the project with the necessary configurations:

```ini
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
META_ACCESS_TOKEN=your_meta_access_token
META_PHONE_NUMBER_ID=your_meta_phone_number_id
GMAIL_USERNAME=your_gmail_username
GMAIL_PASSWORD=your_gmail_password
SCYLLA_HOST=localhost
SCYLLA_PORT=9042
```

### 2. Build and Run the Spring Boot Application

1. **Ensure Java 21 and Maven are installed.**
   - Verify installation:
     ```shell
     java -version
     mvn -version
     ```

2. **Run the application:**
   ```shell
   mvn spring-boot:run
   ```

3. **Verify the API is running:**
   Open a browser or use Postman to check:
   ```shell
   curl http://localhost:8080/api/health
   ```

## Testing the Notification Services

1. **Send an Email Notification:**
   ```shell
   curl -X POST "http://localhost:8080/api/notifications/email" -H "Content-Type: application/json" -d '{"to": "user@example.com", "subject": "Test Email", "message": "Hello from AlertX!"}'
   ```

2. **Send an SMS Notification:**
   ```shell
   curl -X POST "http://localhost:8080/api/notifications/sms" -H "Content-Type: application/json" -d '{"to": "+1234567890", "message": "Test SMS from AlertX!"}'
   ```

3. **Send a WhatsApp Notification: using Twilio**
   ```shell
   curl -X POST "http://localhost:8080/api/notifications/whatsapp" -H "Content-Type: application/json" -d '{"to": "+1234567890", "message": "Test WhatsApp from AlertX!"}'
   ```

4. **Send a WhatsApp Notification: using Whatsapp Cloud API of Meta**
   ```shell
   curl -X POST "http://localhost:8080/api/whatsapp-meta/send-template" -H "Content-Type: application/json" -d '{"phoneNumber": "+1234567890", "message": "Test WhatsApp from AlertX!"}'
   ```

5. **Send a Push Notification:**
   ```shell
   curl -X POST "http://localhost:8080/api/notifications/push" -H "Content-Type: application/json" -d '{"title": "Test Push", "message": "This is a test push notification."}'
   ```

## Stopping the Application

To stop the running services:
```shell
docker-compose down
```

To stop the Spring Boot application, press `CTRL+C` in the terminal where it is running.

---
Now you're all set to integrate and use AlertX! 🚀

