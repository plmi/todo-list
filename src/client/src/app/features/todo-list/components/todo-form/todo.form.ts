import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";

export class TodoForm extends FormGroup {
  constructor() {
    const controls: {[key: string]: AbstractControl} = {
      content: new FormControl(null, [Validators.required])
    }
    super(controls);
  }
}
