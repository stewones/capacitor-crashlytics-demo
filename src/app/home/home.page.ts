import { Component } from '@angular/core';
import { Crashlytics } from 'capacitor-crashlytics';

const crashlytics = new Crashlytics();
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  name = 'John Doe';
  email = 'john@doe.com';
  id = '1337';

  constructor() {}

  crash() {
    crashlytics.crash();
  }

  logUser() {
    crashlytics
      .logUser({
        name: this.name,
        email: this.email,
        id: this.id
      })
      .then(() => alert(`user logged`))
      .catch(err => alert(err.message));
  }
}
