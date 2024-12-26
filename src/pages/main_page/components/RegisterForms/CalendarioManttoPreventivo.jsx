import { useEffect, useState } from "react";
import Input from "../../../../components/Input/input";
import Select from "../../../../components/Input/Select";
import { getClientesRequest, getEquiposRequest } from "../../../../service/public.service";

const CalendarioManttoPreventivo = () => {

    const [cliente, setCliente] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [modelo, setModeloProgramada] = useState('')
    const [noSerie, setNoSerie] = useState('')
    const [fechaProgramada, setFechaProgramada] = useState('')
    const [clientesForSelectInput, setClientesForSelectInput] = useState([]);
    const [equiposForSelectInput, setEquiposForSelectInput] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let clientesResult = await getClientesRequest();
            let equiposResult = await getEquiposRequest();

            clientesResult = clientesResult.map((cliente) => ({
                value: cliente.Cliente,
                label: cliente.Cliente,
            }));
            equiposResult = equiposResult.map((equipo) => ({
                value: equipo.Modelo,
                label: equipo.Modelo,
            }));
            setClientesForSelectInput(clientesResult);
            setEquiposForSelectInput(equiposResult);
        }
        fetchData();
    }, []);


    return (
        <>
            <h3>Formulario de acuse de recibido demo</h3>
            <Select
                name="cliente"
                onChange={(e) => setCliente(e.target.value)}
                options={clientesForSelectInput}
                value={cliente}
                placeholder="Seleccionar cliente"
                label="Clientes"
            />


            <Input
                name="descripcion"
                title="Descripción"
                placeholder="Ingresa una descripción"
                onChange={(e) => setDescripcion(e.target.value)}
                value={descripcion}
            />

            <Select
                name="modelo"
                onChange={(e) => setModeloProgramada(e.target.value)}
                options={equiposForSelectInput}
                value={modelo}
                placeholder="Seleccionar modelo"
                label="Modelo"
            />

            <Input
                name="noSerie"
                title="Número de serie"
                placeholder="Ingresar número de serie"
                onChange={(e) => setNoSerie(e.target.value)}
                value={noSerie}
            />

            <Input
                name="fechaProgramada"
                title="Fecha programa"
                inputType="date"
                placeholder="Ingresar fecha"
                onChange={(e) => setFechaProgramada(e.target.value)}
                value={fechaProgramada}
            />

            <button onClick={() => console.log({ cliente, fechaProgramada })}>
                Enviar
            </button>
        </>
    );
};

export default CalendarioManttoPreventivo;
