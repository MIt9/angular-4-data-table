## Angular 4 Data Table

It is fork of this [package](https://github.com/MIt9/angular-4-data-table).

A simple Angular 4 data table, with built-in solutions for features including:

* pagination
* sorting
* row selection (single/multi)
* expandable rows
* column resizing
* selecting visible columns
* accessibility (basic)

It's based on Bootstrap 4 and Font Awesome, so you need them in the application using it.

The component can be used not just with local data, but remote resources too: for example if the sorting and paging happen in the database.

The templates use bootstrap CSS class names, 

## Installing
`npm install angular-4-data-table --save`

## Production (Minification)
Some times can be some problam with it. to fix it use import like this

`import { DataTableModule } from 'angular-4-data-table';`

and for production build use

`ng build --prod --aot=false`
  
## Licensing
MIT License
