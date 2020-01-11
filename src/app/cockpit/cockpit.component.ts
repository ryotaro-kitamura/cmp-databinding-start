import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"]
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // newServerName = "";
  @ViewChild("serverContentInput", { static: true })
  serverContentInput: ElementRef;

  constructor() {}

  ngOnInit() {}
  onAddServer(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
  onAddBlueprint(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    // this.blueprintCreated.emit({
    //   serverName: nameInput.value,
    //   serverContent: contentInput.value
    // });
  }
}
