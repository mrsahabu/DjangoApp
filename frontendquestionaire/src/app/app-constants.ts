export class AppConstants {
 
    public static get baseURL():string{
        return "http://0.0.0.0:8000/"
        //return "http://127.0.0.1:8000/"
    }

    public static get apiURL():string{
        return "questionaire/api/v1?"
    }
    public static get refreshTime(){
        return 2000
    }

}
