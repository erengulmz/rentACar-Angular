import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ModelsApiService } from '../../services/modelsApi.service';
import { ModelListItemDto } from '../../models/modol-list-item-dto';

@Component({
  selector: 'app-models-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './models-list.component.html',
  styleUrl: './models-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelsListComponent implements OnInit {
  public list!: ModelListItemDto[];

  constructor(
    private modelsApiService:ModelsApiService,
    private change: ChangeDetectorRef
  ){}
  ngOnInit(): void {
    this.modelsApiService.getList().subscribe((response) => {
      this.list = response;
      this.change.markForCheck(); // ChangeDetectionStrategy.OnPush // Asekronik olarak çalıştığı için bu satırı ekledik.
    });
  }
  }
