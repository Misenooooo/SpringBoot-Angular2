package sk.ikariera.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import sk.ikariera.project.components.Messages;


/**
 * Created by Michal Dolnak on 16.3.2017.
 * email: dolnakmichal@gmail.com
 */
@RestController
@RequestMapping("/message")
public class MessageController {

    @Autowired
    private Messages messages;

    @RequestMapping(value = "/load", method = RequestMethod.POST)
    public String getMessages(@RequestBody String message){

        System.out.println(messages.get("app.title"));

        System.out.println(message);

        System.out.println("app.title");

        System.out.println(messages.get(message));

        return messages.get(message);
    }
}
