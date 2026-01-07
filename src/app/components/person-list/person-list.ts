import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PersonService } from '../../services/person';
import { Person } from '../../interfaces/person.interface';

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './person-list.html',
  styleUrls: ['./person-list.css']
})
export class PersonListComponent implements OnInit {
  persons: Person[] = [];
  isLoading = true;
  deletingId: number | null = null;
  errorMessage = '';

  constructor(
    private personService: PersonService,
    private cdr: ChangeDetectorRef  // Añade esto
  ) { }

  ngOnInit(): void {
    this.loadPersons();
  }

  loadPersons(): void {
    this.isLoading = true;
    this.errorMessage = '';
    
    // Añade esto para forzar la detección de cambios
    this.cdr.detectChanges();
    
    this.personService.getAll().subscribe({
      next: (data) => {
        this.persons = data;
        this.isLoading = false;
        this.cdr.detectChanges();  // Añade esto
      },
      error: (error) => {
        console.error('Error:', error);
        this.errorMessage = 'Error al cargar las personas';
        this.isLoading = false;
        this.cdr.detectChanges();  // Añade esto
      }
    });
  }

  deletePerson(id: number): void {
    if (confirm('¿Estás seguro de eliminar esta persona?')) {
      this.deletingId = id;
      this.cdr.detectChanges();  // Añade esto
      
      this.personService.delete(id).subscribe({
        next: () => {
          this.persons = this.persons.filter(p => p.id !== id);
          this.deletingId = null;
          this.cdr.detectChanges();  // Añade esto
        },
        error: (error) => {
          console.error('Error al eliminar:', error);
          alert('Error al eliminar la persona');
          this.deletingId = null;
          this.cdr.detectChanges();  // Añade esto
        }
      });
    }
  }
}