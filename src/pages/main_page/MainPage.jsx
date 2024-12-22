import { useState } from 'react';
//
import SearchBar from '../../components/search/SearchBar';
import MenuList from '../../components/MenuList/MenuList';
import styles from './MainPage.module.css';
import Table from './components/Table';
import Button from '../../components/buttons/Button';

export default function MainPage() {

  const [data] = useState([
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
        <div className={styles.Sectionbuttons}>
          <table className={styles.table}>
            <Table data={data} />
          </table>
          <section className={styles.buttons}>
            <Button
              title='Descargar archivo'
            />
            <Button
              title='Agregar persona'
            />
          </section>
        </div>
      </main>
    </div>
  )
}