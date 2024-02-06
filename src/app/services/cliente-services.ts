import { Injectable } from "@angular/core"
import { enviroment } from "../enviroments/enviroment"
import { HttpClient } from "@angular/common/http"

@Injectable({
    providedIn: 'root'
  })
export class ClienteServices {
    constructor(private http : HttpClient){}

    recargarSaldo(telefono: any, monto: any) {
        let url = `${enviroment.WS_PATH}/clientes/${telefono}/${monto}`;
        return this.http.post<any>(url, telefono);
      }

      getCliente(){
        let url = enviroment.WS_PATH + "/clientes/list";
        return this.http.get<any>(url)
    }
}
