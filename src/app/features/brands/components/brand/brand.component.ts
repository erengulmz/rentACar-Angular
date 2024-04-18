import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BrandListItemDto } from '../../models/brand-list-item-dto';
import { BrandApiService } from '../../services/brandApi.service';
import { ModelsApiService } from '../../../models/services/modelsApi.service';
import { ModelListItemDto } from '../../../models/models/modol-list-item-dto';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandComponent implements OnInit { 
    public list!: BrandListItemDto[];
    public models: ModelListItemDto[] = [];

  constructor(
    private brandApiService: BrandApiService,
    private change: ChangeDetectorRef,
    private modelsApiService: ModelsApiService,
  ) {}

  ngOnInit(): void {
    this.brandApiService.getList().subscribe((response) => {
      this.list = response;
      this.change.markForCheck();
    });
  }
  getModels(brandId: number) {
    this.modelsApiService.getList().subscribe((response => {
      this.models = response.filter(x => x.brandId == brandId);
      this.change.markForCheck();
    }))
  }
}
