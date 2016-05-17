package com.github.mrrobbins.questioneer.hello;

import javax.inject.Singleton;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.Arrays;
import java.util.List;

/**
 * Created by mrobbins on 5/15/16.
 */

@Path("hello")
@Singleton
public class HelloResource {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<String> sayHello() {
        return Arrays.asList("Hello world", "Goodbye world");
    }
}
