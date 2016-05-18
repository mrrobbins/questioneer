package com.github.mrrobbins.questioneer.config;

import com.github.mrrobbins.questioneer.QuestionResource;
import com.github.mrrobbins.questioneer.hello.HelloResource;
import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Created by mrobbins on 5/15/16.
 */
@Configuration
public class JerseyConfiguration {

    @Bean
    public ResourceConfig resourceConfig() {
        ResourceConfig resourceConfig = new ResourceConfig();
         resourceConfig.register(HelloResource.class);
         resourceConfig.register(QuestionResource.class);
        return resourceConfig;
    }

}
