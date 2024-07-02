import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { ColDef } from 'ag-grid-community';
// Define the column definitions with specific types
const columns: ColDef[] = [
    { headerName: "Make", field: "make" },
    { headerName: "Model", field: "model" },
    { headerName: "Price", field: "price" }
  ];


// Define the row data with a specific type
const rowData = [
  { make: "Toyota", model: "Celica", price: 35000 },
  { make: "Ford", model: "Mondeo", price: 32000 },
  { make: "Porsche", model: "Boxster", price: 72000 }
];

const MyGridComponent: React.FC = () => {
  return (
    <div className="ag-theme-alpine" style={{ height: 300, width: '100%', border: '2px solid #000' }}>
      <AgGridReact
        columnDefs={columns}
        rowData={rowData}>
      </AgGridReact>
    </div>
  );
};

export default MyGridComponent;