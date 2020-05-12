import { Directive, HostListener, Input, HostBinding } from '@angular/core';
import { TodoListService } from './todo-list.service';

@Directive({
    selector: '[appTextLine]'
})
export class TextLineDirective {
    @HostBinding('class.text-line') textLine;
  
    @Input()
    set appTextLine(value) {
        this.textLine = value;
    }
    
    constructor() { }
  
}

@Directive({
    selector: '[appDisable]'
})
export class DisableDirective {
    @HostBinding('class.display-text') text_state;
  
    @Input()
    set appDisable(value) {
        this.text_state = value != 'Completed'? false: true;
    }
    
    constructor() { }
  
}

  