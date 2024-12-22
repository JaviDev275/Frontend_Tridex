import { useState } from 'react';
//
import SearchBar from '../../components/search/SearchBar';
import MenuList from '../../components/MenuList/MenuList';
import styles from './MainPage.module.css';
import Table from './components/Table';

export default function MainPage() {

  const [data, setData] = useState([
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com",
      role: "Designer",
    },
    {
      name: "Michael Johnson",
      age: 40,
      email: "michael.johnson@example.com",
      role: "Manager",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com",
      role: "Designer",
    },
    {
      name: "Michael Johnson",
      age: 40,
      email: "michael.johnson@example.com",
      role: "Manager",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com",
      role: "Designer",
    },
    {
      name: "Michael Johnson",
      age: 40,
      email: "michael.johnson@example.com",
      role: "Manager",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com",
      role: "Designer",
    },
    {
      name: "Michael Johnson",
      age: 40,
      email: "michael.johnson@example.com",
      role: "Manager",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com",
      role: "Designer",
    },
    {
      name: "Michael Johnson",
      age: 40,
      email: "michael.johnson@example.com",
      role: "Manager",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com",
      role: "Designer",
    },
    {
      name: "Michael Johnson",
      age: 40,
      email: "michael.johnson@example.com",
      role: "Manager",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com",
      role: "Designer",
    },
    {
      name: "Michael Johnson",
      age: 40,
      email: "michael.johnson@example.com",
      role: "Manager",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com",
      role: "Designer",
    },
    {
      name: "Michael Johnson",
      age: 40,
      email: "michael.johnson@example.com",
      role: "Manager",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com",
      role: "Designer",
    },
    {
      name: "Michael Johnson",
      age: 40,
      email: "michael.johnson@example.com",
      role: "Manager",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com",
      role: "Designer",
    },
    {
      name: "Michael Johnson",
      age: 40,
      email: "michael.johnson@example.com",
      role: "Manager",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com",
      role: "Designer",
    },
    {
      name: "Michael Johnson",
      age: 40,
      email: "michael.johnson@example.com",
      role: "Manager",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com",
      role: "Designer",
    },
    {
      name: "Michael Johnson",
      age: 40,
      email: "michael.johnson@example.com",
      role: "Manager",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com",
      role: "Designer",
    },
    {
      name: "Michael Johnson",
      age: 40,
      email: "michael.johnson@example.com",
      role: "Manager",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com",
      role: "Designer",
    },
    {
      name: "Michael Johnson",
      age: 40,
      email: "michael.johnson@example.com",
      role: "Manager",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com",
      role: "Designer",
    },
    {
      name: "Michael Johnson",
      age: 40,
      email: "michael.johnson@example.com",
      role: "Manager",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com",
      role: "Designer",
    },
    {
      name: "Michael Johnson",
      age: 40,
      email: "michael.johnson@example.com",
      role: "Manager",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com",
      role: "Designer",
    },
    {
      name: "Michael Johnson",
      age: 40,
      email: "michael.johnson@example.com",
      role: "Manager",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com",
      role: "Designer",
    },
    {
      name: "Michael Johnson",
      age: 40,
      email: "michael.johnson@example.com",
      role: "Manager",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "xddd",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com",
      role: "Designer",
    },
    {
      name: "Michael Johnson",
      age: 40,
      email: "michael.johnson@example.com",
      role: "Manager",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com",
      role: "Designer",
    },
    {
      name: "Michael Johnson",
      age: 40,
      email: "michael.johnson@example.com",
      role: "Manager",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com",
      role: "Designer",
    },
    {
      name: "Michael Johnson",
      age: 40,
      email: "michael.johnson@example.com",
      role: "Manager",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com",
      role: "Designer",
    },
    {
      name: "Michael Johnson",
      age: 40,
      email: "michael.johnson@example.com",
      role: "Manager",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com",
      role: "Designer",
    },
    {
      name: "Michael Johnson",
      age: 40,
      email: "michael.johnson@example.com",
      role: "Manager",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com",
      role: "Designer",
    },
    {
      name: "Michael Johnson",
      age: 40,
      email: "michael.johnson@example.com",
      role: "Manager",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com",
      role: "Designer",
    },
    {
      name: "Michael Johnson",
      age: 40,
      email: "michael.johnson@example.com",
      role: "Manager",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com",
      role: "Designer",
    },
    {
      name: "Michael Johnson",
      age: 40,
      email: "michael.johnson@example.com",
      role: "Manager",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com",
      role: "Designer",
    },
    {
      name: "Michael Johnson",
      age: 40,
      email: "michael.johnson@example.com",
      role: "Manager",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com",
      role: "Designer",
    },
    {
      name: "Michael Johnson",
      age: 40,
      email: "michael.johnson@example.com",
      role: "Manager",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com",
      role: "Designer",
    },
    {
      name: "Michael Johnson",
      age: 40,
      email: "michael.johnson@example.com",
      role: "Manager",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com",
      role: "Designer",
    },
    {
      name: "Michael Johnson",
      age: 40,
      email: "michael.johnson@example.com",
      role: "Manager",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com",
      role: "Designer",
    },
    {
      name: "Michael Johnson",
      age: 40,
      email: "michael.johnson@example.com",
      role: "Manager",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com",
      role: "Designer",
    },
    {
      name: "Michael Johnson",
      age: 40,
      email: "michael.johnson@example.com",
      role: "Manager",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com",
      role: "Designer",
    },
    {
      name: "Michael Johnson",
      age: 40,
      email: "michael.johnson@example.com",
      role: "Manager",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com",
      role: "Designer",
    },
    {
      name: "Michael Johnson",
      age: 40,
      email: "michael.johnson@example.com",
      role: "Manager",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com",
      role: "Designer",
    },
    {
      name: "Michael Johnson",
      age: 40,
      email: "michael.johnson@example.com",
      role: "Manager",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "Developer",
    },
    {
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com",
      role: "Designer",
    },
    {
      name: "Michael Johnson",
      age: 40,
      email: "michael.johnson@example.com",
      role: "Manager",
    },
    {
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      role: "xddd",
    },
  ]);

  return (
    <div className={styles.MainContainer}>
      <nav className={styles.nav}>
      <SearchBar
        placeholder="Buscar persona..."
      />
      </nav>
      <main className={styles.MainContent}>
        <MenuList />
        <table className={styles.table}>
          <Table data={data} />
        </table>   
      </main>

      <button onClick={() => setData([
        {
          product: "Laptop",
          price: "$1200",
          stock: "25 units",
        },
        {
          product: "Smartphone",
          price: "$800",
          stock: "40 units",
        },
      ])}>
        Cambiar Datos
      </button>
    </div>
  )
}