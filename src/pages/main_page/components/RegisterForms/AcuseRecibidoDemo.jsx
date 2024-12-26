import { useEffect, useState } from "react";
import Input from "../../../../components/Input/input";
import Select from "../../../../components/Input/Select";
import { getClientesRequest } from "../../../../service/public.service";

const AcuseRecibidoDemo = () => {

    const [cliente, setCliente] = useState('')
    const [fechaProgramada, setFechaProgramada] = useState('')
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

export default AcuseRecibidoDemo;
