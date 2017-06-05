import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class User {
  nama : string;
  id : string;
  username : string;
  constructor(public http: Http) {
    console.log('Hello User Provider');
  }

  TbhUser(nama,username,password)
  {
    var url = 'http://uangku.uphero.com/uang/user.php?method=daftar&nama=' + nama + '&user=' + username + '&password=' + password;
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  ambilUser(user,password){
    var url = 'http://uangku.uphero.com/uang/user.php?method=login&user=' + user + '&password=' + password;
    var response = this.http.get(url).map(res => res.json());
    return response;

  }

  setSession(nama, id, user ){
    this.username = user;
    this.id = id;
    this.nama= nama;
  }
}
