# DEPENDENCIES CONFIGURATION

This guide provides instructions for installing all the necessary dependencies to enable WhatsApp notifications using Twilio in the project.

## Prerequisites

Before proceeding, ensure that your system meets the following requirements:

[![Java](https://img.shields.io/badge/Java-11%20or%20higher-blue.svg?logo=java)](https://www.oracle.com/java/technologies/javase/jdk11-archive-downloads.html) <br>
[![Maven](https://img.shields.io/badge/Apache%20Maven-3.6%20or%20higher-blue.svg?logo=apache)](https://maven.apache.org/download.cgi) <br>
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-2.5%20or%20higher-green.svg?logo=spring)](https://spring.io/projects/spring-boot)

## Installing Dependencies

Follow the steps below to install the necessary dependencies for integrating Twilio's WhatsApp API with your Spring Boot application.

### 1. Add Twilio Dependency

Twilio provides an official Java SDK that simplifies the integration process.

#### Using Maven

Add the following dependency to your `pom.xml` file:

```xml
<dependency>
    <groupId>com.twilio.sdk</groupId>
    <artifactId>twilio</artifactId>
    <version>8.31.1</version>
</dependency>
```

Save the file and run the following command to update your Maven project:

```sh
mvn clean install
```

### 2. Configure Application Properties

To use Twilio services, you need to store your credentials securely in `application.yml` or `application.properties`.

#### Example Configuration (application.yml)

```yaml
twilio:
  account-sid: YOUR_TWILIO_ACCOUNT_SID
  auth-token: YOUR_TWILIO_AUTH_TOKEN
  whatsapp-number: YOUR_TWILIO_WHATSAPP_NUMBER
```

Alternatively, if using `application.properties`:

```properties
twilio.account-sid=YOUR_TWILIO_ACCOUNT_SID
twilio.auth-token=YOUR_TWILIO_AUTH_TOKEN
twilio.whatsapp-number=YOUR_TWILIO_WHATSAPP_NUMBER
```

### 3. Verifying Installation

Once dependencies are installed, verify by checking the Maven dependencies tree:

```sh
mvn dependency:tree
```

If Twilio appears in the dependency tree, the setup is successful.

After completing these steps, the necessary dependencies for Twilio WhatsApp integration should be properly installed.

