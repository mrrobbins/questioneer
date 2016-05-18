package com.github.mrrobbins.questioneer;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.yaml.YAMLFactory;
import com.github.mrrobbins.questioneer.model.Questions;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.io.File;
import java.io.IOException;

/**
 * Created by mrobbins on 5/17/16.
 */

@Component
public class QuestionParser {

    private String questionYamlPath;

    private Questions questions;

    public QuestionParser() {

    }

    @PostConstruct
    public void init() throws IOException {
        final ObjectMapper mapper = new ObjectMapper(new YAMLFactory());

        final Resource ymlResource = new ClassPathResource("who-we-are.yml");
        questions = mapper.readValue(ymlResource.getInputStream(), Questions.class);
    }

    public Questions getQuestions() {
        return questions;
    }

}
