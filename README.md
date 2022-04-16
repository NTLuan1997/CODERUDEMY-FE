# CODEUDEMY

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

/* ANGULAR COURSE */
/*
    - Khái niệm về Directives:
        + Directive là một đối tượng giúp chúng ta dễ dàng thay đổi một đối tượng khác và cách sử dụng dễ dàng và linh hoạt.  Directives có thể hiểu như các đoạn mã Typescript(hoặc Javascript) kèm theo các mã HTML.
        + Khi được gọi như HTML.

    - Phân loại Directives:
        + Component Directives: Vì component cho phép định nghĩa Selector và gọi ra như một tag HTML thông thương.
            VD: (<component></component>)

        + Structural Directives: là một Directive có cấu trúc, dùng để vẽ HTML và bind data lên cấu trúc HTML và thay đổi phần từ DOM bằng việc thêm bớt phần tử trong DOM.
            VD: *ngFor, *ngIf, *ngSwitch

        + Attribute Directive: Thay đổi giao diện, Tương tác của các đối tượng hoặc thay đổi directive khác hoặc thêm các thuộc tính động cho element HTML
            VD: *ngClass, *ngStyle

    - Component Directives:
        + Phần 1:
            - Khởi tạo một Component và những thành phần liên quan như: file template.html, template.css, template.ts, template.spec.ts.

        + Phần 2: lifecycle hook.
            - Lifecycle hook là vong đời của của một Component. cho phép chúng ta chen thêm những tác vụ cần thiết tại thời điểm bất kỳ cho đến khi component bị hũy bỏ.
        
        + Lifecycle hook gồm các thành phần:

            - constructor()
            - ngOnChanges()
            - ngOnInit()
            - ngDoCheck()
                - ngAfterContentInit()
                - ngAfterContentChecked()
                - ngAfterViewInit()
                - ngAfterViewChecked()
            - ngDestroy()


        + Sự khác nhau giữa ngOnChange() và ngDoCheck():
            - ngOnChanges()( OnChanges) : khi ta có một component-parent được liên kết đến component-child thông qua @Input, ngOnChanges() được gọi khi một giá trị liên kết với một đầu vào đã thay đổi để bạn có thể chạy đoạn mã tùy chỉnh khi một đầu vào thay đổi.

            - ngDoCheck()( DoCheck) : được gọi khi phát hiện thay đổi chạy để bạn có thể triển khai hành đồng khi phát hiện thay đổi tùy chỉnh của mình.

        + constructor():
            - Là hàm khởi tạo chạy đầu tiên sao khi constructor() được khởi chạy hết thì những hook phía sau sẽ được chạy.
            - VD:
                Parent constructor call.
                product.component.ts:19 Child constructor call.
                dashboard.component.ts:15 Parent ngOnInit call.
                product.component.ts:23 Child ngOnInit call.

            - Khi nào component được load lên Dom thì constructor mới được chạy.

        + ngOnChanges():
            - Khi một component cha gọi đến component con và chuyền dữ liệu vào con thông qua @Input thì ngOnChange() sẽ được gọi tại mọi thời điểm khi có sự thay đổi ngOnChanges() điều sẽ được gọi.
            - Đặc biệt, thằng ngOnChanges nó sẽ không chạy khi các bạn thay đổi giá trị 1 property của Object là một Input của component, bạn phải thay đổi reference của object đó như ở trên mình trình bày, ngoài ra ngDoCheck cũng có thể là cứu cánh cho bạn ở case này.

            - Systax để dùng ngOnChages() trong component.

                export class component implement Oninit {

                    constructor() { }

                    ngOnInit() { }

                    ngOnChange(change: SimpleChange) {
                        console.log(change);
                    }
                }

        + ngOnInit():
            - Được gọi khi component được khởi tạo và gọi sau ngOnChange().
            - Chỉ được gọi một lần khi khởi tạo xong component.
            - Systax để dùng ngOnInit() trong component.

                export class component implement OnInit {
                    constructor() { }

                    ngOnInit() { }
                }

        + ngDoCheck():
            - Phát hiện và hành động theo những thay đổi mà Angular không thể hoặc không tự phát hiện ra được.
            - Được gọi ngay sau ngOnInit() và mỗi khi change detection chạy. phương thúc này dùng để custom Angular có cơ chế change detection, nó sẽ phát hiện các sự kiện như Dom Event(click, change, hover ...), setTimeout, setInterval, fetch ... khi bắt được những sự kiện này, Angular sẽ thực hiện detect change cho toàn bọ cây component của ứng dụng để kiểm tra sự thay đổi và re-render UI. Lúc này change detector ở mỗi component sẽ làm việc và ngDoCheck cũng được gọi
            - Systax để dùng ngDoCheck() trong component.

            export class component implement OnInit, DoCheck {
                constructor() { }

                ngOnInit() { }

                ngDoCheck() { }
            }

        + ngAfterViewContentInit():
            - Phương thức này được gọi một lần duy nhất sau ngDoCheck lần đầu tiên. Nó thục thi Angular chiếu content lên component-view với thẻ ng-content, Nên phương thức này có thể giúp bạn truy xuất content được truyền vào với contentChild decorator.
            - Systax để dùng ngAfterViewContentInit() trong component.

                + File HTML parent.
                    <app-child-component>
                        <h2 #ParentSandChild class="parent-send-child">Parent component send to child component</h2>
                    </app-child-component>

                + File class child.
                    @Component({
                    selector: 'app-child-component',
                    templateUrl: './child-component.component.html',
                    styleUrls: ['./child-component.component.scss']
                    })
                    export class componentChild implement Oninit, AfterViewContentInit {
                        @ContentChild("ParentSandChild") ParentSandChild: any;
                        constructor() { }

                        ngOnInit() { }

                        ngAfterViewContentInit() {
                            console.log("Call ngAfterViewContentInit");
                        }

                    }

                + File HTML child.
                    <div>
                        <ng-content></ng-content>       => tag <h2 class="parent-send-child"> show content at here.
                    </div>

        + ngAfterContentCheked():
            - Được gọi sau khi Angular đã kiểm tra content được truyền vào component Phương thức này được gọi lần đầu sau ngAfterContentInit thực thi và sau đó được gọi sau mỗi lần ngDoCheck (từ lần thứ 2 trở đi) tức mỗi lần change detection được thực thi. Với mình thì thường sử dụng thằng này để thực thi đoạn logic mình mong muốn mỗi khi change detection để đảm bảo đoạn logic mình chạy lấy được dữ liệu mới nhất của content truyền vào.

            - Systax để dùng ngAfterContentChecked():
                export class component implement OnInit, AfterContentChecked {

                    constructor() { }

                    ngOnInit() { }

                    ngAfterContentChecked() {
                        console.log("Call method checked");
                    }
                }

        + ngAfterViewInit():
            - Được gọi sau khi Angular đã hoàn thành khởi tạo view component và view con. Và nó chỉ chạy duy nhất một lần Mục đích sử dụng thông thường là thực thi view query với tham chiếu bằng ViewChild hoặc ViewChilden.

            - Systax để dùng ngAfterViewInit():
                @Component({
                selector: 'my-select2',
                template: `<div #tagBlock>
                                something here
                            </div>`,
                })

                export class MySelect2Component implements AfterViewInit {
                    @ViewChild('tagBlock')
                    public tagBlock: ElementRef;
                    constructor() {}
                    public ngAfterViewInit() {
                        console.log(this.tagBlock.nativeElement.innerHTML);
                    }
                }

        + ngAfterViewChecked():
            - Được gọi sau khi Angular kiểm tra component view và view những thằng con hoặc view chứa directive. Phương thức được gọi sau ngAfterViewInit lần đầu tiên, và sau mỗi ngAfterContentChecked.

            - Systax để dùng ngAfterViewChecked() trong component.

                export class MySelect2Component implements AfterViewChecked {
                   
                    constructor() {}
                    
                    ngAfterViewChecked() {
                        console.log("Call method AfterViewChecked);
                    }
                }

        + ngOnDestroy():
            - Được gọi khi một component bị remove khỏi Dom.
            - Systax để dùng ngDestroy() trong component.

                export class component implement OnDestroy {
                    constructor() { }

                    ngOnDestroy() { }
                }

    - Structural Directive:
        + [ngIf] remove or add dom element.
        + ngIf with condition internal in HTML,
            - Syntax:
                1) Element normal:
                    <div *ngIf="condition"></div>
                
                2) ng-template:
                    <ng-template [ngIf]="condition"></ng-template>

        + ngIf with condition external form class.
            - Syntax:
                <h2 *ngIf="condition; else elseBlock">Condition with property class</h2>

                <ng-template #elseBlock>
                    <h2>Show if condition else</h2>
                </ng-template>

                class Test() {
                    condition: Boolean = true;

                    constructor() {}
                }

        + ngIf with "then" and "else".

            - Syntax:
                <div *ngIf="condition; then thenBlock; else elseBlock"></div>
                
                <ng-template #thenBlock>
                    <h2>Show if condition else</h2>
                </ng-template>

                <ng-template #elseBlock>
                    <h2>Show if condition else</h2>
                </ng-template>

                class Test() {
                    condition: Boolean = true;

                    constructor() {}
                }

                => if condition = true run then => return thenBlock.
                => else condition = false run else => return elseBlock.


    - Angular Forms:
        + Template Driven Forms (TDF)
            <form #register="ngForm" (submit)="onSubmit(register)" novalidate>
            <div ngModelGroup="infor">

                <div class="form-group">
                    <label for="user-signin-name">Tên đăng ký</label>
                    <input type="text" required class="form-control" #registerUserName="ngModel"
                        [class.is-invalid]="registerUserName.invalid && registerUserName.touched" id="user-signin-name"
                        name="user-signin-name" placeholder="Tên người dùng" [(ngModel)]="userModel.name">
                    <div class="form-modal"
                        *ngIf="registerUserName.errors && (registerUserName.invalid && registerUserName.touched)">
                        <p *ngIf="registerUserName.errors.hasOwnProperty('required')">
                            Trường này không được để trống
                        </p>
                    </div>
                </div>

                <div class="form-group">
                    <label for="user-signin-email">Email người dùng</label>
                    <input type="email" required class="form-control" #registerEmail="ngModel"
                        [class.is-invalid]="registerEmail.invalid && registerEmail.touched" id="user-signin-email"
                        name="user-signin-email" placeholder="Email@gmail.com" [(ngModel)]="userModel.email">
                    <div class="form-modal"
                        *ngIf="registerEmail.errors && (registerEmail.invalid && registerEmail.touched)">
                        <p *ngIf="registerEmail.errors.hasOwnProperty('required')">Trường này không được để trống
                        </p>
                    </div>
                </div>

                <div class="form-group">
                    <label for="user-signin-password">Mật khẩu</label>
                    <input type="password" required class="form-control" #registerPassword="ngModel" pattern="^\d{6}$"
                        [class.is-invalid]="registerPassword.invalid && registerPassword.touched"
                        id="user-signin-password" name="user-signin-password" placeholder="Nhập 6 ký tự hoặc nhiều hơn"
                        [(ngModel)]="userModel.password">
                    <div class="form-modal"
                        *ngIf="registerPassword.errors && (registerPassword.invalid && registerPassword.touched)">
                        <p *ngIf="registerPassword.errors.hasOwnProperty('required')">Trường này không được để trống</p>
                        <p *ngIf="registerPassword.errors.hasOwnProperty('pattern')">Nhập ít nhất 6 ký tự</p>
                    </div>
                </div>

                <div class="form-group">
                    <label for="user-signin-dateofbirth">Ngày sinh</label>
                    <input type="date" required class="form-control" #registerDateOfBirth="ngModel"
                        [class.is-invalid]="registerDateOfBirth.invalid && registerDateOfBirth.touched"
                        id="user-signin-dateofbirth" name="user-signin-dateofbirth" placeholder="Tên người dùng"
                        [(ngModel)]="userModel.dateofbirth">
                    <div class="form-modal"
                        *ngIf="registerDateOfBirth.errors && (registerDateOfBirth.invalid && registerDateOfBirth.touched)">
                        <p *ngIf="registerDateOfBirth.errors.hasOwnProperty('required')">
                            Trường này không được để trống
                        </p>
                    </div>
                </div>

            </div>
            <button type="submit" [disabled]="register.form.invalid" class="btn btn-user-signin">Đăng nhập</button>
            <div class="user-change-form">
                <a [routerLink]="['/user/signin']">Đăng nhập</a>
            </div>
        </form>

        + Reactive Forms (RF)

            registerForm = new FormGroup({
               userName: new FormControl(''),
               email: new FormControl(''),
               password: new FormControl(''),
               dateOfBirth: new FormControl('')
            })

            <form [formGroup]="registerForm">
                <div class="form-group">
                    <label for="user-signin-name">Tên đăng ký</label>
                    <input type="text" formControlName="userName" class="form-control" id="user-signin-name"
                        placeholder="Tên người dùng">
                </div>

                <div class="form-group">
                    <label for="user-signin-email">Email người dùng</label>
                    <input type="email" class="form-control" id="user-signin-email" formControlName="email"
                        placeholder="Email@gmail.com">
                </div>

                <div class="form-group">
                    <label for="user-signin-password">Mật khẩu</label>
                    <input type="password" class="form-control" id="user-signin-password" formControlName="password"
                        placeholder="Nhập 6 ký tự hoặc nhiều hơn">
                </div>

                <div class="form-group">
                    <label for="user-signin-dateofbirth">Ngày sinh</label>
                    <input type="date" class="form-control" id="user-signin-dateofbirth" formControlName="dateOfBirth"
                        placeholder="Tên người dùng">
                </div>

                <button type="submit" class="btn btn-user-signin">Đăng nhập</button>
                <div class="user-change-form">
                    <a [routerLink]="['/user/signin']">Đăng nhập</a>
                </div>
            </form>


*/

/*
    - Passport: Chức năng xác thực người dùng.
        + Gồm các thành phần:
            1) Initialize() : Chức năng khởi tạo.
            2) Session()    : Chúc năng khởi tạo.

            3) Authenticate(): Chức năng chứng thực.

            4) SerializeUser(): Ghi giá trị đại diện người dùng vào Cookie.
            5) DeserializeUser(): Thông tin đại diện sẽ được lấy ra trong những lần request sau.
*/