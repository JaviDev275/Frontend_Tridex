import PropTypes from "prop-types";
import React, { useState, useEffect, useRef } from "react";
import styles from "./Table.module.css";
import { IoChevronDownSharp } from "react-icons/io5";
import { FcDownload } from "react-icons/fc";
import { PDFDownloadLink } from "@react-pdf/renderer";

import AcuseDeEntregaDemo from "../../../pdf/AcuseDeEntregaDemo";
import AcuseDeEntrega from "../../../pdf/AcuseDeEntrega";
import AcuseDeReciboDemo from '../../../pdf/AcuseDeReciboDemo';
import OrdenDeServicio from '../../../pdf/OrdenDeServicio'
import PrestamoEquipo from '../../../pdf/PrestamoEquipo'
import { getReportsCountRequest } from "../../../service/public.service";

const pdfComponents = {
  0: AcuseDeEntregaDemo,
  1: AcuseDeEntrega,
  2: AcuseDeReciboDemo,
  4: OrdenDeServicio,
  5: PrestamoEquipo,

};


const Table = ({ data, showDownloadColumn, index }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Estado para controlar el dropdown personalizado
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [reportsCountData, setReportsCountData] = useState(null);

  const fetchReportsCount = async () => {
    try {
      const result = await getReportsCountRequest()
      setReportsCountData(result); // Almacenar los datos obtenidos
    } catch (error) {
      console.error("Error fetching reports count data:", error);
    }
  };

  useEffect(() => {


    fetchReportsCount();
  }, []);
  // Referencia para el dropdown
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handlePageSelect = (page) => {
    setCurrentPage(page);
    setDropdownOpen(false);
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

  // Manejar clics fuera del dropdown
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dropdownOpen]);

  // Calcular los datos para la página actual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handleDownloadComplete = () => {
    fetchReportsCount();
  };

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            {Object.keys(data[0]).map((header, index) => (
              <th key={index}>{header}</th>
            ))}
            {showDownloadColumn && <th></th>}
          </tr>
        </thead>
        <tbody>
          {currentData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.keys(row).map((header, colIndex) => (
                <td key={colIndex}>{row[header]}</td>
              ))}
              {showDownloadColumn && pdfComponents[index] && (
                <td className={styles.downloadCell}>
                  <PDFDownloadLink
                    document={React.createElement(pdfComponents[index], { reportsCountData, data: row })}
                    fileName={`documento-${rowIndex}.pdf`}
                    onClick={handleDownloadComplete}
                  >
                    <FcDownload />
                  </PDFDownloadLink>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <nav className={styles.pagination}>
        <div className={styles.pageSelectContainer}>
          <div
            ref={dropdownRef}
            className={`${styles.customDropdown} ${dropdownOpen ? styles.open : ""}`}
            onClick={toggleDropdown}
          >
            {currentPage}
            <IoChevronDownSharp />
            {dropdownOpen && (
              <ul className={styles.dropdownList}>
                {Array.from({ length: totalPages }, (_, index) => (
                  <li
                    key={index}
                    onClick={() => handlePageSelect(index + 1)}
                    className={currentPage === index + 1 ? styles.activeDropdownItem : ""}
                  >
                    {index + 1}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <span>
            {currentPage} de {totalPages}
          </span>
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
  showDownloadColumn: PropTypes.bool,
  onClick: PropTypes.func,
  index: PropTypes.number,
};

Table.defaultProps = {
  showDownloadColumn: false,
};

export default Table;