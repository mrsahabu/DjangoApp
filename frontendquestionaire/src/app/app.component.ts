import { Component } from '@angular/core';
import {QuestionaireService} from '../app/questionaire.service'
import {AppConstants} from '../app/app-constants'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'questionaire';
  data:string;
  resp: string;
  resp2:string;
  pizzaFlag:boolean;
  error:boolean = false;
  timeToRefresh;
  boxValue;
  first:boolean = true;
  second:boolean = false
  third:boolean = false
  constructor(private questionAPI:QuestionaireService){

    this.get_questionaireAPI()
    this.error = false
    this.timeToRefresh = AppConstants.refreshTime

  }

  get_questionaireAPI(res1=null,res2=null){
    this.questionAPI.get_questionaire(res1,res2).subscribe(response =>{
      this.data = response.response;
      if(this.data.includes('order') || this.data.includes('get') || this.data.includes('ok') || this.data.includes('scope') ){
        this.refresh_page(this.timeToRefresh)
        console.log(this.boxValue)
      }
    },error => {
      console.log(error);
    })
  }

  validate_input(value:string){

    value = value.toLowerCase();
        
    if(this.first){
      if(value=='yes' || value =='no'){
        this.get_questionaireAPI(value)
        this.first = false
        this.second = true
      }
    }
    else if(this.second){
      if (value == 'pizza'){
        this.get_questionaireAPI(value)
        this.pizzaFlag = true
      }
    else if (this.pizzaFlag){
     
      if(value == 'yes' || value =='no' ){
        this.get_questionaireAPI(null,value)
        this.pizzaFlag  = false
        this.third = true
      }
    }
    else if(value=='hamburger'|| value=='chicken' || value=='popcorn'){
      this.get_questionaireAPI(value)
    }
  }     
  else{
    this.error = true
    this.refresh_page(this.timeToRefresh)  
  }  
  }

  refresh_page(time){
    setTimeout(() => {
      window.location.reload()  
  }, time);
    
  }

}
