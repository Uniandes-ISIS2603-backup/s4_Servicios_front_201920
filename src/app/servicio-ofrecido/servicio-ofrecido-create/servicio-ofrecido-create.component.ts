
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {ServicioOfrecidoService} from '../servicio-ofrecido.service';
import {ServicioOfrecido} from '../servicio-ofrecido';
import {ServicioOfrecidoDetail} from '../servicio-ofrecido-detail';

@Component({
    selector: 'app-servicio-ofrecido-create',
    templateUrl: './servicio-ofrecido-create.component.html',
    styleUrls: ['./servicio-ofrecido-create.component.css'],
    providers: []})

    export class ServicioOfrecidoCreateComponent implements OnInit {

        constructor(
            private servicioOfrecidoService: ServicioOfrecidoService,
            private toastrService: ToastrService,
            private router: Router
        ) {}

            servicioOfrecido : ServicioOfrecidoDetail;

            cancelCreation(): void {
                this.toastrService.warning('The servicio ofrecido wasn\'t created', 'Book creation');
                this.router.navigate(['/servicios-ofrecidos/list']);
            }

            createServicioOfrecido(): ServicioOfrecidoDetail {
                this.servicioOfrecidoService.createServicioOfrecido(this.servicioOfrecido)
                    .subscribe(serv => {
                        this.servicioOfrecido.id = serv.id;
                        this.router.navigate(['/serviciosOfrecidos/' + serv.id]);
                    }, err => {
                        this.toastrService.error(err, 'Error');
                    });
                return this.servicioOfrecido;
            }

            ngOnInit() {
                this.servicioOfrecido = new ServicioOfrecidoDetail();
            }


    }