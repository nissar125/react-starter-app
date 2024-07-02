import React from 'react';
import { render, screen } from '@testing-library/react';
import MyGridComponent from './MyGridComponent';
import { ColDef } from 'ag-grid-community';

// Mock the AG Grid React component
jest.mock('ag-grid-react', () => ({
  AgGridReact: ({ columnDefs, rowData }: { columnDefs: ColDef[]; rowData: any[] }) => (
    <div>
      {columnDefs.map((col) => (
        <div key={col.field}>{col.headerName}</div>
      ))}
      {rowData.map((row, index) => (
        <div key={index}>{row.make} {row.model} {row.price}</div>
      ))}
    </div>
  ),
}));

describe('MyGridComponent', () => {
  test('renders grid with correct columns', () => {
    render(<MyGridComponent />);
    const makeHeader = screen.getByText(/Make/i);
    const modelHeader = screen.getByText(/Model/i);
    const priceHeader = screen.getByText(/Price/i);

    expect(makeHeader).toBeInTheDocument();
    expect(modelHeader).toBeInTheDocument();
    expect(priceHeader).toBeInTheDocument();
  });

  test('renders grid with correct row data', () => {
    render(<MyGridComponent />);
    const rowData1 = screen.getByText(/Toyota Celica 35000/i);
    const rowData2 = screen.getByText(/Ford Mondeo 32000/i);
    const rowData3 = screen.getByText(/Porsche Boxster 72000/i);

    expect(rowData1).toBeInTheDocument();
    expect(rowData2).toBeInTheDocument();
    expect(rowData3).toBeInTheDocument();
  });
});