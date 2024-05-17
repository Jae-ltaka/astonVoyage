import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PagePrincipalComponent } from './page-principal.component';
import { Router } from '@angular/router';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

describe('PagePrincipalComponent', () => {
  let component: PagePrincipalComponent;
  let fixture: ComponentFixture<PagePrincipalComponent>;
  let router: Router;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePrincipalComponent ],
      imports: [ HttpClientTestingModule,RouterTestingModule.withRoutes([]),
      MatMenuModule,
      FormsModule,
      MatCardModule,
      MatButtonModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,  ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to login page', () => {
    const navigateSpy = spyOn(router, 'navigate');
    const button = fixture.nativeElement.querySelector('#button_login');
    button.click();
    expect(navigateSpy).toHaveBeenCalledWith(['/connexion']);
  });
});
