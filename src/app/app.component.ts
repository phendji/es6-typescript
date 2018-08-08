import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    /********************************************
       COURSES PROMISES : https://codecraft.tv/courses/angular/es6-typescript/promises/
    **/
    /**
     * On réutilise notre fonction hello que l’on passe en paramètre de setTimeout.
     * A la fin du temps, hello est executée en callback.
     * On peut noter l’absence de parentheses lors du passage de la fonction en paramètre.
     * Ceci est du au fait que l’on passe un pointeur vers la fonction hello qui sera exécutée à la fin du temps demandé.
     * Si on avait mis des parenthèses, on aurait eu exécution de la fonction lors de l’interprétation
     * setTimeout(this.doAsynTaskBis(), 5000);
     * setTimeout(this.doAsynTaskBis, 5000);
     */

    //  this.doAsynTask().then(
    //    (success) => console.log(success),
    //    (error) => console.log(error)
    //  );

    // Promise.resolve('done !')

    //   .then(
    //     (val) => {
    //       console.log('sucess 1 : ', val);
    //       return 'done2';
    //     },

    //     (err) => console.log('error 1 :', err)
    //   )
    //   .then(
    //     (val) => console.log('sucess 2 : ', val),
    //     (err) => console.log('error 2 :', err)
    //   );

    // Promise.reject('fail ! ')
    //   .then(
    //     (sucess) => console.log('succes 1 : ', sucess)
    //   )
    //   .then(
    //     (sucess) => console.log('sucess 2 : ', sucess),
    //     (err) => console.log('error 2 : ', err)
    //   );

    Promise.resolve('done')
      .then(
        (sucess) => {
          throw new Error('failed');
        }
      )
      .then(
        (sucess) => console.log('sucess : ', sucess),
        (error) => console.log('error', error)
      )
      .catch((err) => console.error(err));
  }

  private doAsynTask1(cb) {
    setTimeout(() => {
      console.log('Asyn Task Calling Callback');
      cb();
    }, 6000);

    console.log('foobar');
  }

  private doAsynTask() {
    console.log('Begin');
    const error = true;
    return new Promise((resolve, rejet) => {
      setTimeout(() => {
        if (error) {
          rejet('fail ! ');
        } else {
          resolve('done');
        }
      }, 4000);
    });
  }


}
