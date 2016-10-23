import { Component } from "@angular/core";

@Component({
    selector: "my-test",
    template: "<h1>{{welcomeMessage}}</h1>"
})

export class AppComponent2 {
    welcomeMessage: string = "hello world";
}