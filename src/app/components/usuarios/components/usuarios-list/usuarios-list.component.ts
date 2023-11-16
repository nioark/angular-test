import { Component, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { UsuariosService } from '../../services/usuarios.service';
import { Observable } from 'rxjs';
import { Usuario } from '../../models/usuario.model';
import { MatDialog } from '@angular/material/dialog';
import { UsuariosAddComponent } from '../usuarios-add/usuarios-add.component';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.scss'],
})

export class UsuariosListComponent implements OnInit {
  usuarios$:Observable<Usuario[]> | undefined
  constructor(public dialog: MatDialog,private _usuariosSrv:UsuariosService) { }

  ngOnInit(): void {
    this.usuarios$ = this._usuariosSrv.fetch()
  }

  create() {
    const dialogRef = this.dialog.open(UsuariosAddComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  //
}
