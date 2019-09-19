import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'//[]makes it an attribute directive
})
export class StrikethroughDirective {

  // constructor( private elem:ElementRef) { 
  //   this.elem.nativeElement.style.textDecoration = 'line-through';
  //  } //strikes through all the goals

  //To put the user in control of the strike through
  constructor (private elem : ElementRef) { }

  //The actions
  @HostListener("click") onClicks() {
    this.textDeco("line-through");
  }

  @HostListener("dblclick") onDoubleclicks() {
    this.textDeco("None");
  }

  

  //function which takes in an action and then performs a text-decoration using the action
  private textDeco (action : string) {
    this.elem.nativeElement.style.textDecoration = action;
  }

}
