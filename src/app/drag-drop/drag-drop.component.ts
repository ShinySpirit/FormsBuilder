import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, DragDropModule, CdkDragEnd } from '@angular/cdk/drag-drop';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent {

  inputs: object[] = [];

  htmlstr = '<p>qweqwe</p>';


  getSafeHTML(data: string) : SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(data);
 }

 constructor(private _sanitizer: DomSanitizer){}


  drop(event: CdkDragEnd, _type: string)
  {
    let _html: string;

    switch(_type) {
      case 'input':
        _html = '<label>Input </label><input type="text" style="border-radius: 10px; border: 1px solid grey;" cdkDrag>'
        break;

        case 'text':
        _html = '<label>TextBox </label><textarea cols="20" rows="7" style="border-radius: 10px;"></textarea>'
        break;

        case 'button':
        _html = '<button style="border-radius: 10px;">Button</button>'
        break;

        case 'checkbox':
        _html = '<input type="checkbox" id="check"> <label>CheckBox</label>'
        break;

        case 'select':
        _html = '<mat-label>Select </mat-label><select></select> '
        break;
    }

    this.inputs.push( {
      position: event.source.getFreeDragPosition(),
      html: _html,
    });  

    event.source._dragRef.reset();
  }

}
