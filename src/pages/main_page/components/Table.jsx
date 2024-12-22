import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './Table.module.css';

const Table = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePageChange = (event) => {
        setCurrentPage(Number(event.target.value));
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Calcular los datos para la página actual
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);

    return (
        <div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        {Object.keys(data[0]).map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {Object.keys(row).map((header, colIndex) => (
                                <td key={colIndex}>{row[header]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            <nav className={styles.pagination}>
                <div className={styles.pageSelectContainer}>
                    <select
                        value={currentPage}
                        onChange={handlePageChange}
                        className={styles.select}
                    >
                        {Array.from({ length: totalPages }, (_, index) => (
                            <option key={index} value={index + 1}>
                                {index + 1}
                            </option>
                        ))}
                    </select>
                    <span className={styles.pageInfo}>{currentPage} de {totalPages}</span>
                </div>

                <div className={styles.navigationButtons}>
                    <button
                        onClick={goToPreviousPage}
                        disabled={currentPage === 1}
                        className={styles.navButton}
                    >
                        «
                    </button>
                    <span className={styles.currentPage}>{currentPage}</span>
                    <button
                        onClick={goToNextPage}
                        disabled={currentPage === totalPages}
                        className={styles.navButton}
                    >
                        »
                    </button>
                </div>
            </nav>
        </div>
    );
};

Table.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
