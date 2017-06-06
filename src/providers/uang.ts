import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class Uang {

  constructor(public http: Http) {
    console.log('Hello Uang Provider');
  }

  TbhUang(id: string, tabel: string, nominal: number, keterangan: string, kategori: string,tanggal: any,jam : any)
  {

    var url = 'http://uangku.96.lt/uang/uang.php?method=tambah&tabel='+tabel+'&id='+id+'&nominal='+nominal+'&kategori='+kategori+'&catatan='+keterangan+'&tanggal='+tanggal.year+'-'+tanggal.month+'-'+tanggal.day+'&jam='+jam.hour+':'+jam.minute+':'+jam.second;
    console.log(url);
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  AmbilUang(tabel: string, id: string){
    var url = 'http://uangku.96.lt/uang/uang.php?method=ambil&tabel='+tabel+'&id='+id;
    console.log(url);
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  AmbilTotal(tabel: string, id: string){
    var url = 'http://uangku.96.lt/uang/uang.php?method=ambiltotal&tabel='+tabel+'&id='+id;
    console.log(url);
    var response = this.http.get(url).map(res => res.json());
    return response;
  }
  Hapus(tabel: string, id: string){
    var url = 'http://uangku.96.lt/uang/uang.php?method=hapus&tabel='+tabel+'&id='+id;
    console.log(url);
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  EditUang(id: string, tabel: string, nominal: number, keterangan: string, kategori: string,tanggal: any,jam : any)
  {

    var url = 'http://uangku.96.lt/uang/uang.php?method=edit&tabel='+tabel+'&id='+id+'&nominal='+nominal+'&kategori='+kategori+'&catatan='+keterangan+'&tanggal='+tanggal.year+'-'+tanggal.month+'-'+tanggal.day+'&jam='+jam.hour+':'+jam.minute+':'+jam.second;
    console.log(url);
    var response = this.http.get(url).map(res => res.json());
    return response;
  }
  
  AmbilSatu(tabel: string, id: string){
    var url = 'http://uangku.96.lt/uang/uang.php?method=ambiluang&tabel='+tabel+'&id='+id;
    console.log(url);
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  selisih(id: string){
     var url = 'http://uangku.96.lt/uang/uang.php?method=selisih&id='+id;
    console.log(url);
    var response = this.http.get(url).map(res => res.json());
    return response;
  }
}
