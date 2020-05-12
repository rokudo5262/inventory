import { Injectable } from '@angular/core';
import { GoodsGroup } from '@app/@core/data';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoodsGroupService {
  API_PATH = 'http://localhost:5000/api/goodsgroup';
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'mode': 'no-cors',
    }),
  };
  goodsgroupCookieString = 'GOODSGROUP_COOKIES';
  goodsgroup: GoodsGroup;
  goodsgroups: GoodsGroup[];

  constructor(private http: HttpClient) { }

  getGoodsGroups(): Observable<GoodsGroup[]> {
    return this.http.get<GoodsGroup[]>(this.API_PATH);
  }
  updateGoodsGroup(changes: Partial<GoodsGroup>) {
    return this.http.put<GoodsGroup>(this.API_PATH + '/' + changes.id, changes, this.options);
  }
  addGoodsGroup(goodsgroup: GoodsGroup) {
    return this.http.post<GoodsGroup>(this.API_PATH, goodsgroup, this.options);
  }
  // getGoodsGroup(id: number): Observable<GoodsGroup> {
  //   this.goodsgroup = GoodsGroupData.find(x => x.id === id);
  //   return observableOf(this.goodsgroup);
  // }

  // uploadGoodsGroup(item){
  //   let goodsgroupList = [];
  //   let goodsgroupListInCookies = this.cookieService.get(this.goodsgroupCookieString);
  //   if (goodsgroupListInCookies) {
  //     let goodsgroupJson = JSON.parse(goodsgroupListInCookies);
  //     if (goodsgroupJson.goodsgroupList && goodsgroupJson.goodsgroupList.length > 0){
  //       goodsgroupList = goodsgroupJson.goodsgroupList;
  //     }
  //   }

  //   this.goodsgroup = GoodsGroupData.find(x => x.id === item.id);
  //   if(this.goodsgroup){
  //     this.goodsgroup.code = item.code;
  //     this.goodsgroup.name = item.name;
  //   }
  //   else {
  //     this.goodsgroup = {
  //       id: item.id,
  //       code: item.code,
  //       name: item.name,
  //     }
  //     if(this.goodsgroup.id === 0){
  //       this.goodsgroup.id = GoodsGroupData[GoodsGroupData.length -1].id +1;
  //     }
  //     GoodsGroupData.push(this.goodsgroup);
  //   }
  //   let goodsgroupItem = goodsgroupList.find(x => x.id === this.goodsgroup.id);
  //   if (goodsgroupItem){
  //     goodsgroupItem.code = this.goodsgroup.code;
  //     goodsgroupItem.name = this.goodsgroup.name;
  //   }
  //   else {
  //     goodsgroupList.push(this.goodsgroup);
  //   }

  //   let goodsgroupString = JSON.stringify({goodsgroupList});
  //   this.cookieService.set(this.goodsgroupCookieString, goodsgroupString);

  //   return observableOf(this.goodsgroup);
  // }
  removeGoodsGroup(id: number) {
    // let goodsgroupItem = this.goodsgroups.find(x => x.id === id);
    // if(goodsgroupItem){
    //   // goodsgroupItem.status = 'off'
    //   return this.uploadGoodsGroup(goodsgroupItem);
    // }
    // return null;
    return this.http.delete<GoodsGroup>(this.API_PATH + '/' + id, this.options);
  }
}
