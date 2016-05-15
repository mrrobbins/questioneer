package com.github.mrrobbins.foundation.config;

import com.github.mrrobbins.foundation.hello.HelloResource;
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
        return new ResourceConfig().packages(HelloResource.class.getPackage().getName());
    }

}
