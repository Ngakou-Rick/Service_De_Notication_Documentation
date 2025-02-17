# Implementation and EndPoint configuration

## Model
```java
import java.util.Map;

import lombok.Data;

@Data

public class WhatsAppRequest {
    private String phoneNumber;
    private String templateName;
    private String languageCode;
    private Map<String, String> headerPlaceholders;
    private Map<String, String> bodyPlaceholders;
    private Map<String, String> buttonPlaceholders;
}
```


## Service
``` java
import org.springframework.stereotype.Service;

import com.google.api.client.util.Value;

import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

import java.io.IOException;
import java.util.Map;

@Service
public class WhatsAppService {
    @Value("${$whatsapp.access.token}")
    private String ACCESS_TOKEN;
    @Value("${$whatsapp.phone_number_id}")
    private String PHONE_NUMBER_ID;
    @Value("${$whatsapp.api.url}")
    private String meta_url;
    private String API_URL = meta_url + PHONE_NUMBER_ID + "/messages";

    private final OkHttpClient client = new OkHttpClient();

    /**
     * Envoie un message WhatsApp basé sur un template défini dans Meta Business
     * Manager.
     * 
     * @param phoneNumber  Numéro de téléphone du destinataire (au format
     *                     international, ex: "237658530298").
     * @param templateName Nom du template enregistré sur WhatsApp.
     * @param languageCode Code de la langue du template (ex: "fr", "en", "en_US").
     * @param parameters   Liste des valeurs à injecter dans les placeholders du
     *                     template.
     */

    public void sendTemplateMessage(String phoneNumber, String templateName, String languageCode,
            Map<String, String> headerPlaceholders, Map<String, String> bodyPlaceholders,
            Map<String, String> buttonPlaceholders) throws IOException {
        MediaType JSON = MediaType.get("application/json; charset=utf-8");

        String json = generateTemplateJson(phoneNumber, templateName, languageCode, headerPlaceholders,
                bodyPlaceholders, buttonPlaceholders);
        RequestBody body = RequestBody.create(json, JSON);

        Request request = new Request.Builder()
                .url(API_URL)
                .header("Authorization", "Bearer " + ACCESS_TOKEN)
                .post(body)
                .build();

        try (Response response = client.newCall(request).execute()) {
            if (!response.isSuccessful())
                throw new IOException("Unexpected code " + response);
            System.out.println(response.body().string());
        }
    }

    private String generateTemplateJson(String phoneNumber, String templateName, String languageCode,
            Map<String, String> headerPlaceholders, Map<String, String> bodyPlaceholders,
            Map<String, String> buttonPlaceholders) {
        // Créez le JSON selon le format requis par l'API WhatsApp
        StringBuilder json = new StringBuilder();
        json.append("{");
        json.append("\"messaging_product\":\"whatsapp\",");
        json.append("\"to\":\"").append(phoneNumber).append("\",");
        json.append("\"type\":\"template\",");
        json.append("\"template\":{");
        json.append("\"name\":\"").append(templateName).append("\",");
        json.append("\"language\":{\"code\":\"").append(languageCode).append("\"},");
        json.append("\"components\":[");

        if (!headerPlaceholders.isEmpty()) {
            json.append("{\"type\":\"header\",\"parameters\":[");
            headerPlaceholders.forEach(
                    (key, value) -> json.append("{\"type\":\"text\",\"text\":\"").append(value).append("\"},"));
            json.setLength(json.length() - 1); // Supprimer la dernière virgule
            json.append("]},");
        }

        if (!bodyPlaceholders.isEmpty()) {
            json.append("{\"type\":\"body\",\"parameters\":[");
            bodyPlaceholders.forEach(
                    (key, value) -> json.append("{\"type\":\"text\",\"text\":\"").append(value).append("\"},"));
            json.setLength(json.length() - 1); // Supprimer la dernière virgule
            json.append("]},");
        }

        if (!buttonPlaceholders.isEmpty()) {
            json.append("{\"type\":\"button\",\"parameters\":[");
            buttonPlaceholders.forEach(
                    (key, value) -> json.append("{\"type\":\"text\",\"text\":\"").append(value).append("\"},"));
            json.setLength(json.length() - 1); // Supprimer la dernière virgule
            json.append("]},");
        }

        if (json.charAt(json.length() - 1) == ',') {
            json.setLength(json.length() - 1); // Supprimer la dernière virgule si nécessaire
        }

        json.append("]");
        json.append("}");
        json.append("}");
        return json.toString();
    }
}
```

## Controller

``` java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import service.notification.notification.models.WhatsAppRequest;
import service.notification.notification.service.WhatsAppService;

import java.io.IOException;

@RestController
@RequestMapping("/api/whatsapp-meta")
public class WhatsAppController {
    @Autowired
    private WhatsAppService whatsAppService;

    @PostMapping("/send-template")
    public void sendTemplateMessage(@RequestBody WhatsAppRequest request) throws IOException {
        whatsAppService.sendTemplateMessage(
                request.getPhoneNumber(),
                request.getTemplateName(),
                request.getLanguageCode(),
                request.getHeaderPlaceholders(),
                request.getBodyPlaceholders(),
                request.getButtonPlaceholders());
    }
}
```

## API Endpoints

 - Base URL : ```/api/whatsapp-meta```
 - Endpoint URL : ```/api/whatsapp-meta/send-template```