import { useState, useRef, useEffect } from 'react';
import styles from './DropAlert.module.css';
import { GoBellFill } from "react-icons/go";
import { getManttoPreventivoRequest } from '../../service/public.service';

export default function DropAlert() {
    const [isOpen, setIsOpen] = useState(false);
    const [alertData, setAlertData] = useState([]);
    const [unreadNotifications, setUnreadNotifications] = useState(0);
    const modalRef = useRef(null);

    // Fetch data from the API
    const fetchAlert = async () => {
        try {
            const result = await getManttoPreventivoRequest();

            // Calculate days remaining and filter notifications
            const today = new Date();
            const alerts = result.filter((item) => {
                const scheduledDate = new Date(item.FechaProgramada);
                const daysRemaining = Math.ceil((scheduledDate - today) / (1000 * 60 * 60 * 24));
                return daysRemaining <= 10 && daysRemaining > 0; // Only show alerts within 10 days
            }).map((item) => {
                const scheduledDate = new Date(item.FechaProgramada);
                const daysRemaining = Math.ceil((scheduledDate - today) / (1000 * 60 * 60 * 24));
                return { ...item, daysRemaining };
            });

            setAlertData(alerts);
            setUnreadNotifications(alerts.length); // Update unread notifications count
        } catch (error) {
            console.error("Error fetching maintenance alerts:", error);
        }
    };

    useEffect(() => {
        fetchAlert();
    }, []);

    const toggleModal = () => {
        setIsOpen(!isOpen);
        if (!isOpen) setUnreadNotifications(0); // Mark notifications as read
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    // Close modal if clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.container}>
            {/* Bell icon with notification badge */}
            <div onClick={toggleModal} className={styles.bellIcon}>
                <GoBellFill size={24} />
                {unreadNotifications > 0 && (
                    <span className={styles.notificationBadge}>{unreadNotifications}</span>
                )}
            </div>

            {/* Modal */}
            {isOpen && (
                <div ref={modalRef} className={styles.modal}>
                    <h4>Notificaciones</h4>
                    <ul>
                        {alertData.length > 0 ? (
                            alertData.map((item, index) => (
                                <li key={index}>
                                    <strong>Equipo:</strong> {item.Marca} {item.Modelo} <br />
                                    <strong>Días restantes:</strong> {item.daysRemaining}
                                </li>
                            ))
                        ) : (
                            <li>No hay notificaciones pendientes</li>
                        )}
                    </ul>
                </div>
            )}

            {/* Background overlay to close modal */}
            {isOpen && <div className={styles.overlay} onClick={closeModal}></div>}
        </div>
    );
}
