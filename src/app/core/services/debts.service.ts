import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CustomerDebts } from '../models/customerDebts.model';

declare var $: any;

interface Companie {
  name: string;
  quantity: number;
  checked: boolean;
}

interface State {
  status: string;
  quantity: number;
  name: string;
  checked: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class DebtsService {

  debt: any;
  account: any;
  debtLength: any;
  debtSelect: any;
  customerDebts: CustomerDebts = null;
  filteredItems: any;
  select: any;
  filterCompany = false;
  filterState = false;
  
  filters: {
    companies: Array<Companie>;
    state: Array<State>;
  };

  constructor(public http: HttpClient) {

    this.filters = {
      companies: [],
      state: []
    };    
  }

  crearFiltros() {
    // Filter states
    this.filters.state = [];
    // tslint:disable-next-line: max-line-length
    // this.filters.state.push( { status: 'TODAS', quantity: this.customerDebts.responseObject.debts.length, name: 'Todos', checked: true } );
    this.filters.state.push( { status: 'EN MORA', quantity: 0, name: 'En mora', checked: false } );
    this.filters.state.push( { status: 'AL DIA', quantity: 0, name: 'Al día', checked: false } );
    this.filters.state.push( { status: 'EN NEGOCIACION', quantity: 0, name: 'En negociación', checked: false } );
    this.filters.state.push( { status: 'CON ACUERDO', quantity: 0, name: 'Con acuerdo', checked: false } );

    // Filter companies
    this.filters.companies = [];

    // this.filters.companies.push( { name: 'Todas', quantity: this.customerDebts.responseObject.debts.length, checked: true } );
    for (const debt of this.customerDebts.responseObject.debts ) {
      // States
      switch ( debt.accountStatuts ) {
        case 'EN MORA':
          const mora = this.filters.state.findIndex( obj => obj.status === 'EN MORA' );
          this.filters.state[mora].quantity = this.filters.state[mora].quantity + 1;
          break;
        case 'AL DIA':
          const aldia = this.filters.state.findIndex( obj => obj.status === 'AL DIA' );
          this.filters.state[aldia].quantity = this.filters.state[aldia].quantity + 1;
          break;
        case 'EN NEGOCIACION':
          const negociacion = this.filters.state.findIndex( obj => obj.status === 'EN NEGOCIACION' );
          this.filters.state[negociacion].quantity = this.filters.state[negociacion].quantity + 1;
          break;
        case 'CON ACUERDO':
          const acuerdo = this.filters.state.findIndex( obj => obj.status === 'CON ACUERDO' );
          this.filters.state[acuerdo].quantity = this.filters.state[acuerdo].quantity + 1;
          break;
      }

      // Companies
      const companie = this.filters.companies.findIndex( obj => obj.name === debt.nameCompany );
      if (companie >= 0) {
        this.filters.companies[companie].quantity = this.filters.companies[companie].quantity + 1;
      } else {
        this.filters.companies.push( { quantity: 1, name: debt.nameCompany, checked: false  } );
      }
    }
  }

  aplicarFiltros() {
    const comps = this.filters.companies.filter( obj => obj.checked === true );
    const states = this.filters.state.filter( obj => obj.checked === true );
    
    for (let con of comps) {
      var boxFilter = $(".btn-company"); 
      var btn = document.createElement("button");
      btn.setAttribute("class", "btn_class");
      btn.append(con.name);        
      boxFilter.append(btn)      
    };   
    
    for (let con of states) {
      var boxFilter = $(".btn-statusAll").addClass("d-block");
      var btn = document.createElement("button");
      btn.setAttribute("class", "btn_status");
      btn.append(con.name);         
      boxFilter.append(btn)   
    };  

   
    if (comps.length > 0 || states.length > 0) {

      const model = this;
      // tslint:disable-next-line: only-arrow-functions
      this.filteredItems = this.customerDebts.responseObject.debts.filter( function(item) {
        
        if (comps.length > 0 && states.length > 0) {
          const compFind = comps.findIndex( obj => obj.name === item.nameCompany);
          const staFind = states.findIndex( obj => obj.status === item.accountStatuts);        
          
          if (compFind >= 0 && staFind >= 0) {              
            return true;            
          } else {
            return false;
          }
        } else if (comps.length > 0 && states.length === 0) {
          const compFind = comps.findIndex( obj => obj.name === item.nameCompany);
          if (compFind >= 0) { 
            return true;
          } else {
            return false;
          }
        } else if (comps.length === 0 && states.length > 0) {
          const staFind = states.findIndex( obj => obj.status === item.accountStatuts);
          if (staFind >= 0) {
            return true;
          } else {
            return false;
          }
          
        }
      });
    } else {
      this.filteredItems = this.customerDebts.responseObject.debts;
    }
  }  

  limpiarFiltros() {
    for (const companie of this.filters.companies ) {
      companie.checked = false;
      $('.btn_class').remove();
    }
    for (const state of this.filters.state ) {
      state.checked = false;
      $('.btn_status').remove();
    }
    this.filteredItems = this.customerDebts.responseObject.debts;
  }
}
