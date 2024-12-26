import { useEffect, useState } from "react";
import Input from "../../../../components/Input/input";
import Select from "../../../../components/Input/Select";
import { getClientesRequest, getEquiposRequest } from "../../../../service/public.service";

const OrdenDeServicio = () => {

    const [cliente, setCliente] = useState('')
    const [ubicacion, setUbicacion] = useState('')
    const [equipo, setEquipo] = useState('')
    const [modelo, setModelo] = useState('')
    const [noSerie, setNoSerie] = useState('')
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
                name="ubicacion"
                title="Ubicación"
                placeholder="Ingresa la ubicación"
                onChange={(e) => setUbicacion(e.target.value)}
                value={ubicacion}
            />


            <Input
                name="equipo"
                title="Equipo"
                placeholder="Ingresa el equipo"
                onChange={(e) => setEquipo(e.target.value)}
                value={equipo}
            />


            <Select
                name="modelo"
                label="Modelo"
                onChange={(e) => setModelo(e.target.value)}
                options={equiposForSelectInput}
                value={modelo}
                placeholder="Seleccionar modelo"
            />

            <Input
                name="noSerie"
                title="No. Serie"
                placeholder="Ingresar número de serie"
                onChange={(e) => setNoSerie(e.target.value)}
                inputType="number"
                value={noSerie}
            />

            <button>
                Enviar
            </button>
        </>
    );
};

export default OrdenDeServicio;
