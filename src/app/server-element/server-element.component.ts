import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy {
  @Input("srvElement") element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild("heading", { static: true }) header: ElementRef;
  @ContentChild("contentParagraph", { static: true }) paragraph: ElementRef;
  constructor() {
    console.log("constructor called");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnchange called");
    console.log(changes);
  }

  ngOnInit() {
    console.log("ngOninit called");
    console.log("TextContent: " + this.header.nativeElement.textContent);
    console.log(
      "TextContent of paragraph: " + this.paragraph.nativeElement.textContent
    );
  }

  ngDoCheck() {
    console.log("ngdocheck called");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit called");
    console.log(
      "TextContent of paragraph: " + this.paragraph.nativeElement.textContent
    );
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called");
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit called");
    console.log("TextContent : " + this.header.nativeElement.textContent);
  }

  ngOnDestroy() {
    console.log("ngOnDestroy called");
  }
}
