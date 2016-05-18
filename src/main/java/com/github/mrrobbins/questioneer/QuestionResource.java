package com.github.mrrobbins.questioneer;

import com.github.mrrobbins.questioneer.model.Questions;
import org.springframework.beans.factory.annotation.Autowired;

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

@Path("questions")
@Singleton
public class QuestionResource {

    @Autowired
    private QuestionParser questionParser;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Questions getQuestions() {
        return questionParser.getQuestions();
    }
}
