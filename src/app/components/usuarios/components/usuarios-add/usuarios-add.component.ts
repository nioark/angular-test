import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuarios-add',
  templateUrl: './usuarios-add.component.html',
  styleUrls: ['./usuarios-add.component.scss']
})
export class UsuariosAddComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<UsuariosAddComponent>) { }

  ngOnInit(): void {
  }

  close(usuario?:Usuario): void {
    this.dialogRef.close(usuario);
  }
}
