import { useEffect, useState } from "react";
import Input from "../../../../components/Input/input";
import Select from "../../../../components/Input/Select";
import { getClientesRequest, getEquiposRequest, postManttoPreventivoRequest } from "../../../../service/public.service";
import ButtonSubmit from "../../../../components/buttons/ButtonSubmit";

const CalendarioManttoPreventivo = () => {

    const [cliente, setCliente] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [modelo, setModeloProgramada] = useState('')
    const [noSerie, setNoSerie] = useState('')
    const [fechaProgramada, setFechaProgramada] = useState('')
    const [clientesForSelectInput, setClientesForSelectInput] = useState([]);
    const [equiposForSelectInput, setEquiposForSelectInput] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [hasError, setHasError] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            console.log("Fetching data");
            setIsLoading(true);
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
            setIsLoading(false);
        }
        fetchData();
    }, []);

    const postCalendarioManttoPrev = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await postManttoPreventivoRequest({ "Cliente": cliente, "Descripcion": descripcion, "Modelo": modelo, "NoSerie": noSerie, "FechaProgramada": fechaProgramada });
            console.log("Acuse de entrega de equipo demo registrado");
            setTimeout(() => {
                setIsLoading(false);
                window.location.reload();
            }, 2000);
        }
        catch (error) {
            setIsLoading(false);
            setHasError(error.msg);
        }
    }

    return (
        <form onSubmit={postCalendarioManttoPrev} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <h3>Generar registro</h3>
            <Select
                name="cliente"
                onChange={(e) => setCliente(e.target.value)}
                options={clientesForSelectInput}
                value={cliente}
                placeholder="Seleccionar cliente"
                label="Clientes"
                isRequired={true}
                disabled={isLoading}
            />


            <Input
                name="descripcion"
                title="Descripción"
                placeholder="Ingresa una descripción"
                onChange={(e) => setDescripcion(e.target.value)}
                value={descripcion}
                isRequired={true}
                disabled={isLoading}
            />

            <Select
                name="modelo"
                onChange={(e) => setModeloProgramada(e.target.value)}
                options={equiposForSelectInput}
                value={modelo}
                placeholder="Seleccionar modelo"
                label="Modelo"
                isRequired={true}
                disabled={isLoading}
            />

            <Input
                name="noSerie"
                title="Número de serie"
                placeholder="Ingresar número de serie"
                onChange={(e) => setNoSerie(e.target.value)}
                value={noSerie}
                isRequired={true}
                disabled={isLoading}
            />

            <Input
                name="fechaProgramada"
                title="Fecha programa"
                inputType="date"
                placeholder="Ingresar fecha"
                onChange={(e) => setFechaProgramada(e.target.value)}
                value={fechaProgramada}
                isRequired={true}
                disabled={isLoading}
            />

            {hasError && <p style={{ color: 'red' }}>{hasError}</p>}

            <ButtonSubmit disable={isLoading} title={isLoading ? 'cargando' : 'Agregar'} />
        </form>
    );
};

export default CalendarioManttoPreventivo;
