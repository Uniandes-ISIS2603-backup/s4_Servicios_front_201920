import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { SolicitudDetail } from '../solicitud-detail';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../../cliente/cliente';
import { ClienteDetail } from '../cliente-detail';
@Component({
    selector: 'app-cliente-add-solicitud',
    templateUrl: './cliente-add-solicitud.component.html',
    styleUrls: ['./cliente-add-solicitud.component.css']
})
export class ClienteAddSolicitudComponent implements OnInit, OnChanges {

    /**
    * The constructor of the component
    * @param bookService The book service which communicates with the API
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private clienteService: ClienteService,
        private toastrService: ToastrService
    ) { }

    /**
    * The book's id
    */
    @Input() cliente: ClienteDetail;

    /**
    * The review to post
    */
    solicitud: SolicitudDetail;
    
    public isCollapsed = true;

    /**
    * The Event Emitter which sends the signal when a review has just been posted
    * so that the list of reviews refreshes
    */
    @Output() updateSolicitudes = new EventEmitter();

    /**
    * This function posts a review
    * @param reviewForm The form of the review
    */  
    postSolicitud(f: NgForm): SolicitudDetail {
        this.solicitud.fechaInicio = "2019-11-11T00:00:00Z[UTC]";
        this.solicitud.cliente = this.cliente;
        this.solicitud.estado = "Validacion";
        this.solicitud.foto = "https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/5617762441552644403-256.png";
        this.clienteService.createSolicitud(this.solicitud)
            .subscribe(() => {
                f.resetForm();
                this.updateSolicitudes.emit();
                this.toastrService.success("The solicitud was successfully created", 'Solicitud added');
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.solicitud;
    }

    /**
    * The function which initializes the component.
    */
    ngOnInit() {
        this.solicitud = new SolicitudDetail();
    }

    /**
    * The function which notices that the input which defines the book_id has changed.
    * If the book has changed, we update the reviews to show
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}