import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonService } from '../../services/person';
import { Person } from '../../interfaces/person.interface';

@Component({
  selector: 'app-person-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './person-form.html',
  styleUrls: ['./person-form.css']
})
export class PersonFormComponent implements OnInit {
  person: Person = {
    nombre: '',
    cedula: '',
    correo: ''
  };

  isEditMode = false;
  personId?: number;
  isLoading = false;
  errorMessage = '';

  constructor(
    private personService: PersonService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef  // Añade esto
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.personId = +params['id'];
        this.loadPerson(this.personId);
      }
    });
  }

  loadPerson(id: number): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.cdr.detectChanges();  // Añade esto
    
    this.personService.getById(id).subscribe({
      next: (data) => {
        this.person = data;
        this.isLoading = false;
        this.cdr.detectChanges();  // Añade esto
      },
      error: (error) => {
        console.error('Error:', error);
        this.errorMessage = 'Error al cargar la persona';
        this.isLoading = false;
        this.cdr.detectChanges();  // Añade esto
        this.router.navigate(['/persons']);
      }
    });
  }

  onSubmit(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.cdr.detectChanges();  // Añade esto

    if (this.isEditMode && this.personId) {
      this.personService.update(this.personId, this.person).subscribe({
        next: () => {
          this.isLoading = false;
          this.cdr.detectChanges();  // Añade esto
          this.router.navigate(['/persons']);
        },
        error: (error) => {
          console.error('Error:', error);
          this.errorMessage = this.getErrorMessage(error);
          this.isLoading = false;
          this.cdr.detectChanges();  // Añade esto
        }
      });
    } else {
      this.personService.create(this.person).subscribe({
        next: () => {
          this.isLoading = false;
          this.cdr.detectChanges();  // Añade esto
          this.router.navigate(['/persons']);
        },
        error: (error) => {
          console.error('Error:', error);
          this.errorMessage = this.getErrorMessage(error);
          this.isLoading = false;
          this.cdr.detectChanges();  // Añade esto
        }
      });
    }
  }

  getErrorMessage(error: any): string {
    if (error.status === 409) {
      return 'La cédula o correo ya existen';
    }
    return 'Error al guardar la persona';
  }

  cancel(): void {
    this.router.navigate(['/persons']);
  }
}