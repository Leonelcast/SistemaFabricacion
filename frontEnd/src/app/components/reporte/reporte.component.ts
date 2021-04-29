import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { DispositivoService } from '../../services/dispositivo.service';
import {ClientesService} from '../../services/clientes.service'
import { NgForm } from '@angular/forms';
import * as XLSX from 'xlsx';
import {CorreoService} from '../../services/correo.service';
@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
 

  constructor(public pedidoService: PedidoService, public dispositivoService: DispositivoService, public clienteService: ClientesService,  public correoService: CorreoService,) { }

  ngOnInit(): void {
    this.getPedidos();
    this.getDispositivos();
    this.getClientes();
  }

  fileName="Reporte.xls";
  reporteList= [
    {
     
    
  }]

  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }


  getDispositivos() {
    this.dispositivoService.getDispositivos().subscribe(
      res => {
        this.dispositivoService.dispositivos = res;
      },
      err => console.error(err)
    );

  }

  getClientes() {
    this.clienteService.getClientes().subscribe(
      res => {
        this.clienteService.clientes = res;
      },
      err => console.error(err)
    );

  }
 
   getPedidos() {
     this.pedidoService.getPedidos().subscribe(
       res => {
         this.pedidoService.pedido = res;
       },
       err => console.error(err)
     );
 
   }
   sendCorreo(form: NgForm){
     this.correoService.sendCorreo(form.value).subscribe(
       res=>console.log(res),
       err=> console.error(err)
     )
   }
}
