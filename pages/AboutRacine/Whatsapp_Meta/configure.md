# DEPENDENCIES CONFIGURATION

This guide provides instructions for installing all the necessary dependencies to enable WhatsApp notifications using Whatsapp cloud API of Meta in the project.

## Prerequisites

Before proceeding, ensure that your system meets the following requirements:

[![Java](https://img.shields.io/badge/Java-11%20or%20higher-blue.svg?logo=java)](https://www.oracle.com/java/technologies/javase/jdk11-archive-downloads.html) <br>
[![Maven](https://img.shields.io/badge/Apache%20Maven-3.6%20or%20higher-blue.svg?logo=apache)](https://maven.apache.org/download.cgi) <br>
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-2.5%20or%20higher-green.svg?logo=spring)](https://spring.io/projects/spring-boot) <br>
[![Facebook](https://img.shields.io/badge/Facebook-%231877F2.svg?logo=facebook&logoColor=white)](https://www.facebook.com)  <br>
[![Meta](https://img.shields.io/badge/Meta-%230073E0.svg?logo=meta&logoColor=white)](https://about.meta.com/)  <br>
[![WhatsApp Business](https://img.shields.io/badge/WhatsApp%20Business-%2325D366.svg?logo=whatsapp&logoColor=white)](https://business.whatsapp.com/)  



## Installing Dependencies

Follow the steps below to install the necessary dependencies for integrating WhatsApp Cloud API of Meta with your Spring Boot application.
Integrating Meta's WhatsApp Cloud API into a Spring Boot application can be done in a number of ways. There is no official Spring Boot dependency provided by Meta for this integration. However, you can use third-party libraries or manual approaches to achieve this goal. Manual approches include either the use the RestTamplate, OkHttp or WebClient for HTTP/HTTPS request. For more information, see the documentation : 
  - [RESTTamplate](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/client/RestTemplate.html)
  - [OkHttp](https://square.github.io/okhttp/)
  - [WebClient](https://docs.spring.io/spring-framework/docs/current/reference/html/web-reactive.html#webflux-client).

### 1. Add OkHTTP Dependency

Whatsapp Cloud Api allows you to choose the way how you build your whatspp request. You can either the use the RestTamplate, OkHttp or WebClient for HTTP/HTTPS request.

#### Using Maven

Add the following dependency to your `pom.xml` file:

```xml
<dependency>
    <groupId>com.squareup.okhttp3</groupId>
    <artifactId>okhttp</artifactId>
    <version>4.9.3</version>
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
whatsapp_meta:
  whatsapp.api.url: https://graph.facebook.com/v21.0
  whatsapp.access.token: YOUR_ACCESS_TOKEN
  whatsapp.phone.id: YOUR_PHONE_NUMBER_ID
```

Alternatively, if using `application.properties`:

```properties
whatsapp.api.url=https://graph.facebook.com/v21.0
whatsapp.phone.id=YOUR_PHONE_NUMBER_ID
whatsapp.access.token=YOUR_ACCESS_TOKEN
```

### 3. Verifying Installation

Once dependencies are installed, verify by checking the Maven dependencies tree:

```sh
mvn dependency:tree
```

If whatsapp_meta appears in the dependency tree, the setup is successful.

After completing these steps, the necessary dependencies for Meta's WhatsApp Cloud API integration should be properly installed.