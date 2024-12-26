import { useEffect, useState } from "react";
import Input from "../../../../components/Input/input";
import Select from "../../../../components/Input/Select";
import { getClientesRequest } from "../../../../service/public.service";

const AcuseEntregaEquipoRegisterForm = () => {

    const [formInputs, setFormInputs] = useState({});
    const [clientesForSelectInput, setClientesForSelectInput] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let clientesResult = await getClientesRequest();
            clientesResult = clientesResult.map((cliente) => ({
                value: cliente.Cliente,
                label: cliente.Cliente,
            }));
            setClientesForSelectInput(clientesResult);
        }
        fetchData();
    }, []);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormInputs((prev) => ({ ...prev, [name]: value }));
    }

    return (
        <>
            <h3>Formulario de acuse de entrega de equipo</h3>
            <Select
                name="cliente"
                onChange={handleInputChange}
                options={clientesForSelectInput}
                value={formInputs.cliente || ''}
                placeholder="Seleccionar cliente"
                label="Clientes"
            />
            <Input
                name="descripcion"
                title="Descripción"
                placeholder="Ingresa una descripción"
                onChange={handleInputChange}
                value={formInputs.descripcion || ''}
            />
        </>
    );
};

export default AcuseEntregaEquipoRegisterForm;
