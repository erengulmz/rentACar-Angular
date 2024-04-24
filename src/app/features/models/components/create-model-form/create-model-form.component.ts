import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BrandsApiService } from '../../../brands/services/brands-api.service';
import { ModelsApiService } from '../../services/modelsApi.service';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,

} from '@angular/forms';
import { PostModelRequest } from '../../models/post-model-request';
import { CreateRulesPipe } from '../../pipes/create-rules.pipe';

@Component({
  selector: 'app-create-model-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CreateRulesPipe
  ],
  
  templateUrl: './create-model-form.component.html',
  styleUrl: './create-model-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateModelFormComponent { 
form: FormGroup = this.fb.group({
  brandName: new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(20)],),
  brandId: new FormControl('',[Validators.required,Validators.min(0)]),
  name: new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]),
  modelYear: new FormControl('',[Validators.required]),
  dailyPrice: new FormControl('',[Validators.required,Validators.min(0)])
});
constructor(private fb:FormBuilder, 
  private modelsApiService:ModelsApiService) {}
createModel() {
  const createModelRequest : PostModelRequest={
    brandId:this.form.value.brandId,
    name:this.form.value.name,
    modelYear:this.form.value.modelYear,
    dailyPrice:this.form.value.dailyPrice,
    imageUrl:'https://raw.githubusercontent.com/ahmet-cetinkaya-instruction/rent-a-car-fake-backend/master/src/data/car-953357_1280.png',
    brand:{
      id:this.form.value.brandId,
      name:this.form.value.brandName
    }
  };
  debugger;
  this.modelsApiService.postModel(createModelRequest).subscribe({
    next(PostModelResponse) {
      console.log('Response',PostModelResponse);
  },
  error(err) {
      console.error('Error',err);
  },
  complete:() => {
    console.info("Model create succesfully");
    this.form.reset();
  }
  })
}
onSubmitForm() {
  
  this.form.valid ? this.createModel() : console.error('Form is invalid');
   }
}
