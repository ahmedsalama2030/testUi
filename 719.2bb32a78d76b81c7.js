"use strict";(self.webpackChunkvelzon=self.webpackChunkvelzon||[]).push([[719],{75922:(L,C,s)=>{s.d(C,{X:()=>m});var t=s(67569),u=s(45312),d=s(54438),r=s(21626);let m=(()=>{class g extends t.d{constructor(p){super(p,u.c.apiUrl+"Agent/")}GetAgentLookUps(){return this.http.get(this.baseUrl+"AgentLookUps")}getOrders(p){return this.http.post(this.baseUrl+"ClientOrders",p)}getInvoices(p){return this.http.post(this.baseUrl+"ClientInvoices",p)}static{this.\u0275fac=function(f){return new(f||g)(d.KVO(r.Qq))}}static{this.\u0275prov=d.jDH({token:g,factory:g.\u0275fac,providedIn:"root"})}}return g})()},57719:(L,C,s)=>{s.d(C,{t:()=>V});var t=s(54438),u=s(75922),d=s(51188),r=s(22960),m=s(8147);let g=(()=>{class n{constructor(){}ngOnInit(){}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["personal-info"]],inputs:{ClientInfo:"ClientInfo"},decls:31,vars:4,consts:[["translate","client.clientProfile.profile"],[1,"row"],[1,"col-lg-6"],[1,"mb-3"],[1,"form-label"],[1,"form-control"]],template:function(a,i){1&a&&(t.j41(0,"h5"),t.nrm(1,"span",0),t.k0s(),t.j41(2,"div",1)(3,"div",2)(4,"div",3)(5,"label",4),t.EFF(6,"Name"),t.k0s(),t.j41(7,"div",5)(8,"span"),t.EFF(9),t.k0s()()()(),t.j41(10,"div",2)(11,"div",3)(12,"label",4),t.EFF(13,"Mobil"),t.k0s(),t.j41(14,"div",5)(15,"span"),t.EFF(16),t.k0s()()()(),t.j41(17,"div",2)(18,"div",3)(19,"label",4),t.EFF(20,"City"),t.k0s(),t.j41(21,"div",5)(22,"span"),t.EFF(23),t.k0s()()()(),t.j41(24,"div",2)(25,"div",3)(26,"label",4),t.EFF(27,"Channel"),t.k0s(),t.j41(28,"div",5)(29,"span"),t.EFF(30),t.k0s()()()()()),2&a&&(t.R7$(9),t.JRh(i.ClientInfo.agentName?i.ClientInfo.agentName:"--"),t.R7$(7),t.JRh(i.ClientInfo.mobile?i.ClientInfo.mobile:"--"),t.R7$(7),t.JRh(i.ClientInfo.mobile?i.ClientInfo.cityName:"--"),t.R7$(7),t.JRh(i.ClientInfo.mobile?i.ClientInfo.channelName:"--"))},dependencies:[m.Mm],encapsulation:2})}}return n})();var j=s(75622),p=s(56977),f=s(3888),v=s(60177),F=s(1530),R=s(5779),I=s(56803),k=s(91580),E=s(88148);function x(n,l){1&n&&(t.j41(0,"tr",10)(1,"th",11),t.EFF(2,"#"),t.k0s(),t.j41(3,"th",12),t.nrm(4,"i",13),t.EFF(5," Discount "),t.k0s(),t.j41(6,"th",14),t.nrm(7,"i",13),t.EFF(8," InvoiceCode "),t.k0s(),t.j41(9,"th",15),t.nrm(10,"i",13),t.EFF(11," Net "),t.k0s(),t.j41(12,"th",16),t.nrm(13,"i",13),t.EFF(14," Notes "),t.k0s(),t.j41(15,"th",17),t.nrm(16,"i",13),t.EFF(17," Tax "),t.k0s(),t.j41(18,"th",18),t.nrm(19,"i",13),t.EFF(20," Total "),t.k0s(),t.j41(21,"th",19),t.nrm(22,"i",13),t.EFF(23," Service Name "),t.k0s()())}function N(n,l){if(1&n&&(t.j41(0,"tr",20)(1,"td"),t.EFF(2),t.k0s(),t.j41(3,"td"),t.EFF(4),t.k0s(),t.j41(5,"td"),t.EFF(6),t.k0s(),t.j41(7,"td"),t.EFF(8),t.k0s(),t.j41(9,"td"),t.EFF(10),t.k0s(),t.j41(11,"td"),t.EFF(12),t.k0s(),t.j41(13,"td"),t.EFF(14),t.k0s(),t.j41(15,"td"),t.EFF(16),t.k0s()()),2&n){const e=l.$implicit,a=l.rowIndex;t.R7$(2),t.JRh(a+1),t.R7$(2),t.JRh(e.discount),t.R7$(2),t.JRh(e.invoiceCode),t.R7$(2),t.JRh(e.net),t.R7$(2),t.JRh(e.notes),t.R7$(2),t.JRh(e.tax),t.R7$(2),t.JRh(e.total),t.R7$(2),t.JRh(e.services)}}function y(n,l){1&n&&(t.j41(0,"div",21),t.EFF(1," general.table.noData"),t.k0s())}function T(n,l){if(1&n){const e=t.RV6();t.j41(0,"div",22)(1,"div",23),t.nrm(2,"ngb-pagination-info",24),t.j41(3,"table-length",25),t.bIt("lengthChange",function(i){t.eBV(e);const o=t.XpG();return t.Njj(o.ListItemChange(i))}),t.k0s()(),t.j41(4,"div",26)(5,"ngb-pagination",27),t.bIt("pageChange",function(i){t.eBV(e);const o=t.XpG();return t.Njj(o.pageChanged(i))}),t.mxI("pageChange",function(i){t.eBV(e);const o=t.XpG();return t.DH7(o.pagination.pageNumber,i)||(o.pagination.pageNumber=i),t.Njj(i)}),t.k0s()()()}if(2&n){const e=t.XpG();t.R7$(2),t.Y8G("pagination",e.pagination),t.R7$(),t.Y8G("lengthTable",e.tableLengthSelect),t.R7$(2),t.Y8G("pageSize",e.pagination.pageSize)("collectionSize",e.pagination.totalItems),t.R50("page",e.pagination.pageNumber),t.Y8G("maxSize",5)("rotate",!0)("boundaryLinks",!0)}}let S=(()=>{class n extends j.w{constructor(e,a,i,o,h,c,_,b){super(a,i,b,o,h,c,_),this.router=e,this.baseService=o,this.countLoad=2}loadentities(){this.pagination.agentCode=+this.clientIdInput,this.countLoad=this.countLoad+1,(!this.isResolveList||1!==this.countLoad)&&(this.ngxLoader.startLoader(this.searchLoader),this.baseService.getInvoices(this.pagination).pipe((0,p.Q)(this.notifier)).subscribe(e=>{this.ngxLoader.stopLoader(this.searchLoader),this.entities=e.data,this.pagination.totalItems=e.totalItems,this.LoadSuccess()},e=>{this.ngxLoader.stopLoader(this.searchLoader),this.alertService.error(e)}),this.checkMore=this.checkOne=this.checkAll=!1,this.lengthSelect=0,this.selectedRow=[])}static{this.\u0275fac=function(a){return new(a||n)(t.rXU(d.Ix),t.rXU(d.nX),t.rXU(m.c$),t.rXU(u.X),t.rXU(f.u),t.rXU(v.vh),t.rXU(F.eD),t.rXU(r.Bq))}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["agent-invoices"]],inputs:{clientIdInput:"clientIdInput"},features:[t.Vt3],decls:11,vars:6,consts:[["tableMaster",""],["translate","client.clientProfile.invoices"],[1,"row"],[1,"col-12"],[1,"table-responsive"],["dataKey","id",3,"onLazyLoad","selectionChange","value","rows","lazy","totalRecords"],["pTemplate","header"],["pTemplate","body"],["class","text-center text-danger text-bold fs-6 p-3","translate","",4,"ngIf"],["class","row px-1 py-1 overflow-hidden",4,"ngIf"],[1,""],["translate","",2,"width",".5%"],["pSortableColumn","discount","translate","",2,"width","10%"],[1,"ri-expand-up-down-line"],["pSortableColumn","invoiceCode","translate","",2,"width","10%"],["pSortableColumn","net","translate","",2,"width","10%"],["pSortableColumn","notes","translate","",2,"width","10%"],["pSortableColumn","tax","translate","",2,"width","10%"],["pSortableColumn","total","translate","",2,"width","8%"],["pSortableColumn","services","translate","",2,"width","8%"],[1,"fs-5"],["translate","",1,"text-center","text-danger","text-bold","fs-6","p-3"],[1,"row","px-1","py-1","overflow-hidden"],[1,"col-sm-12","col-md-5","d-flex","align-items-center","justify-content-center","justify-content-md-start"],[3,"pagination"],[3,"lengthChange","lengthTable"],[1,"col-sm-12","col-md-7","fs-3","d-flex","align-items-center","justify-content-center","justify-content-md-end"],[3,"pageChange","pageSize","collectionSize","page","maxSize","rotate","boundaryLinks"]],template:function(a,i){if(1&a){const o=t.RV6();t.j41(0,"h5"),t.nrm(1,"span",1),t.k0s(),t.j41(2,"div",2)(3,"div",3)(4,"div",4)(5,"p-table",5,0),t.bIt("onLazyLoad",function(c){return t.eBV(o),t.Njj(i.tableChange(c))})("selectionChange",function(c){return t.eBV(o),t.Njj(i.onSelectionChange(c))}),t.DNE(7,x,24,0,"ng-template",6)(8,N,17,8,"ng-template",7),t.k0s()(),t.DNE(9,y,2,0,"div",8)(10,T,6,8,"div",9),t.k0s()()}2&a&&(t.R7$(5),t.Y8G("value",i.entities)("rows",i.pagination.pageSize)("lazy",!0)("totalRecords",i.pagination.totalItems),t.R7$(4),t.Y8G("ngIf",i.pagination.totalItems<=0),t.R7$(),t.Y8G("ngIf",i.pagination.totalItems>0))},dependencies:[v.bT,m.Mm,R.Ei,I.XI,I.Tg,r.s5,k.g,E.p],encapsulation:2})}}return n})();function X(n,l){1&n&&(t.j41(0,"tr",10)(1,"th",11),t.EFF(2,"#"),t.k0s(),t.j41(3,"th",12),t.nrm(4,"i",13),t.EFF(5," Order Code "),t.k0s(),t.j41(6,"th",14),t.nrm(7,"i",13),t.EFF(8," Created Date "),t.k0s(),t.j41(9,"th",15),t.nrm(10,"i",13),t.EFF(11," City Name "),t.k0s(),t.j41(12,"th",16),t.nrm(13,"i",13),t.EFF(14," District Name "),t.k0s(),t.j41(15,"th",17),t.nrm(16,"i",13),t.EFF(17," Channel Name "),t.k0s(),t.j41(18,"th",18),t.nrm(19,"i",13),t.EFF(20," Visit Date "),t.k0s()())}function $(n,l){if(1&n&&(t.j41(0,"tr",19)(1,"td"),t.EFF(2),t.k0s(),t.j41(3,"td"),t.EFF(4),t.k0s(),t.j41(5,"td"),t.EFF(6),t.nI1(7,"date"),t.k0s(),t.j41(8,"td"),t.EFF(9),t.k0s(),t.j41(10,"td"),t.EFF(11),t.k0s(),t.j41(12,"td"),t.EFF(13),t.k0s(),t.j41(14,"td"),t.EFF(15),t.nI1(16,"date"),t.k0s()()),2&n){const e=l.$implicit,a=l.rowIndex;t.R7$(2),t.JRh(a+1),t.R7$(2),t.JRh(e.orderCode),t.R7$(2),t.JRh(t.i5U(7,7,e.createdDate,"mediumDate")),t.R7$(3),t.JRh(e.cityName),t.R7$(2),t.JRh(e.districtName),t.R7$(2),t.JRh(e.channelName),t.R7$(2),t.JRh(t.i5U(16,10,e.visitDate,"mediumDate"))}}function G(n,l){1&n&&(t.j41(0,"div",20),t.EFF(1," general.table.noData"),t.k0s())}function U(n,l){if(1&n){const e=t.RV6();t.j41(0,"div",21)(1,"div",22),t.nrm(2,"ngb-pagination-info",23),t.j41(3,"table-length",24),t.bIt("lengthChange",function(i){t.eBV(e);const o=t.XpG();return t.Njj(o.ListItemChange(i))}),t.k0s()(),t.j41(4,"div",25)(5,"ngb-pagination",26),t.bIt("pageChange",function(i){t.eBV(e);const o=t.XpG();return t.Njj(o.pageChanged(i))}),t.mxI("pageChange",function(i){t.eBV(e);const o=t.XpG();return t.DH7(o.pagination.pageNumber,i)||(o.pagination.pageNumber=i),t.Njj(i)}),t.k0s()()()}if(2&n){const e=t.XpG();t.R7$(2),t.Y8G("pagination",e.pagination),t.R7$(),t.Y8G("lengthTable",e.tableLengthSelect),t.R7$(2),t.Y8G("pageSize",e.pagination.pageSize)("collectionSize",e.pagination.totalItems),t.R50("page",e.pagination.pageNumber),t.Y8G("maxSize",5)("rotate",!0)("boundaryLinks",!0)}}let D=(()=>{class n extends j.w{constructor(e,a,i,o,h,c,_,b){super(a,i,b,o,h,c,_),this.router=e,this.baseService=o,this.countLoad=2}loadentities(){this.pagination.agentCode=+this.clientIdInput,this.countLoad=this.countLoad+1,(!this.isResolveList||1!==this.countLoad)&&(this.ngxLoader.startLoader(this.searchLoader),this.baseService.getOrders(this.pagination).pipe((0,p.Q)(this.notifier)).subscribe(e=>{this.ngxLoader.stopLoader(this.searchLoader),this.entities=e.data,this.pagination.totalItems=e.totalItems,this.LoadSuccess()},e=>{this.ngxLoader.stopLoader(this.searchLoader),this.alertService.error(e)}),this.checkMore=this.checkOne=this.checkAll=!1,this.lengthSelect=0,this.selectedRow=[])}static{this.\u0275fac=function(a){return new(a||n)(t.rXU(d.Ix),t.rXU(d.nX),t.rXU(m.c$),t.rXU(u.X),t.rXU(f.u),t.rXU(v.vh),t.rXU(F.eD),t.rXU(r.Bq))}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["agent-orders"]],inputs:{clientIdInput:"clientIdInput"},features:[t.Vt3],decls:11,vars:6,consts:[["tableMaster",""],["translate","client.clientProfile.orders"],[1,"row"],[1,"col-12"],[1,"table-responsive"],["dataKey","id",3,"onLazyLoad","selectionChange","value","rows","lazy","totalRecords"],["pTemplate","header"],["pTemplate","body"],["class","text-center text-danger text-bold fs-6 p-3","translate","",4,"ngIf"],["class","row px-1 py-1 overflow-hidden",4,"ngIf"],[1,""],["translate","",2,"width",".5%"],["pSortableColumn","orderCode","translate","",2,"width","10%"],[1,"ri-expand-up-down-line"],["pSortableColumn","createdDate","translate","",2,"width","10%"],["pSortableColumn","cityName","translate","",2,"width","10%"],["pSortableColumn","districtName","translate","",2,"width","10%"],["pSortableColumn","channelName","translate","",2,"width","10%"],["pSortableColumn","visitDate","translate","",2,"width","8%"],[1,"fs-5"],["translate","",1,"text-center","text-danger","text-bold","fs-6","p-3"],[1,"row","px-1","py-1","overflow-hidden"],[1,"col-sm-12","col-md-5","d-flex","align-items-center","justify-content-center","justify-content-md-start"],[3,"pagination"],[3,"lengthChange","lengthTable"],[1,"col-sm-12","col-md-7","fs-3","d-flex","align-items-center","justify-content-center","justify-content-md-end"],[3,"pageChange","pageSize","collectionSize","page","maxSize","rotate","boundaryLinks"]],template:function(a,i){if(1&a){const o=t.RV6();t.j41(0,"h5"),t.nrm(1,"span",1),t.k0s(),t.j41(2,"div",2)(3,"div",3)(4,"div",4)(5,"p-table",5,0),t.bIt("onLazyLoad",function(c){return t.eBV(o),t.Njj(i.tableChange(c))})("selectionChange",function(c){return t.eBV(o),t.Njj(i.onSelectionChange(c))}),t.DNE(7,X,21,0,"ng-template",6)(8,$,17,13,"ng-template",7),t.k0s()(),t.DNE(9,G,2,0,"div",8)(10,U,6,8,"div",9),t.k0s()()}2&a&&(t.R7$(5),t.Y8G("value",i.entities)("rows",i.pagination.pageSize)("lazy",!0)("totalRecords",i.pagination.totalItems),t.R7$(4),t.Y8G("ngIf",i.pagination.totalItems<=0),t.R7$(),t.Y8G("ngIf",i.pagination.totalItems>0))},dependencies:[v.bT,m.Mm,R.Ei,I.XI,I.Tg,r.s5,k.g,E.p,v.vh],encapsulation:2})}}return n})();function w(n,l){if(1&n&&t.nrm(0,"personal-info",20),2&n){const e=t.XpG();t.Y8G("ClientInfo",e.clientInfo)}}function O(n,l){if(1&n&&t.nrm(0,"agent-invoices",21),2&n){const e=t.XpG();t.Y8G("clientIdInput",e.clientId?e.clientId:e.clientIdInput)}}function z(n,l){if(1&n&&t.nrm(0,"agent-orders",21),2&n){const e=t.XpG();t.Y8G("clientIdInput",e.clientId?e.clientId:e.clientIdInput)}}function P(n,l){}function M(n,l){}function Y(n,l){}let V=(()=>{class n{constructor(e,a){this.baseService=e,this._activeRoute=a,this._activeRoute.params.subscribe(i=>{this.clientId=+i.id})}ngOnInit(){this.getClientInfo()}getClientInfo(){this.baseService.getById(this.clientId?this.clientId:this.clientIdInput).subscribe({next:e=>{console.log(e),this.clientInfo=e.data}})}static{this.\u0275fac=function(a){return new(a||n)(t.rXU(u.X),t.rXU(d.nX))}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["client-profile-main"]],inputs:{clientIdInput:"clientIdInput"},decls:36,vars:8,consts:[["CustomVertical","ngbNav"],[1,"row"],[1,"col-12"],[1,"card"],[1,"card-body"],[1,"col-12","col-lg-2"],["role","tablist","aria-orientation","vertical",1,""],["ngbNav","",1,"nav","animation-nav","nav-pills","flex-column","nav-pills-tab","custom-verti-nav-pills","text-center",3,"activeId"],[3,"ngbNavItem"],["ngbNavLink",""],["translate","client.clientProfile.profile"],["ngbNavContent",""],["translate","client.clientProfile.invoices"],["translate","client.clientProfile.orders"],["translate","client.clientProfile.payments"],["translate","client.clientProfile.porposals"],["translate","client.clientProfile.notes"],[1,"col-lg-10"],[1,"tab-content","text-muted","mt-3","mt-lg-0"],[3,"ngbNavOutlet"],[3,"ClientInfo"],[3,"clientIdInput"]],template:function(a,i){if(1&a&&(t.j41(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",1)(5,"div",5)(6,"div",6)(7,"ul",7,0)(9,"li",8)(10,"a",9),t.nrm(11,"span",10),t.k0s(),t.DNE(12,w,1,1,"ng-template",11),t.k0s(),t.j41(13,"li",8)(14,"a",9),t.nrm(15,"span",12),t.k0s(),t.DNE(16,O,1,1,"ng-template",11),t.k0s(),t.j41(17,"li",8)(18,"a",9),t.nrm(19,"span",13),t.k0s(),t.DNE(20,z,1,1,"ng-template",11),t.k0s(),t.j41(21,"li",8)(22,"a",9),t.nrm(23,"span",14),t.k0s(),t.DNE(24,P,0,0,"ng-template",11),t.k0s(),t.j41(25,"li",8)(26,"a",9),t.nrm(27,"span",15),t.k0s(),t.DNE(28,M,0,0,"ng-template",11),t.k0s(),t.j41(29,"li",8)(30,"a",9),t.nrm(31,"span",16),t.k0s(),t.DNE(32,Y,0,0,"ng-template",11),t.k0s()()()(),t.j41(33,"div",17)(34,"div",18),t.nrm(35,"div",19),t.k0s()()()()()()()),2&a){const o=t.sdS(8);t.R7$(7),t.Y8G("activeId",1),t.R7$(2),t.Y8G("ngbNavItem",1),t.R7$(4),t.Y8G("ngbNavItem",2),t.R7$(4),t.Y8G("ngbNavItem",3),t.R7$(4),t.Y8G("ngbNavItem",4),t.R7$(4),t.Y8G("ngbNavItem",5),t.R7$(4),t.Y8G("ngbNavItem",6),t.R7$(6),t.Y8G("ngbNavOutlet",o)}},dependencies:[r.Um,r.X9,r.sy,r.Gx,r.Ri,r.WA,r.m_,m.Mm,g,S,D],encapsulation:2})}}return n})()}}]);