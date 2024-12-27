import { useEffect, useState } from "react";
import Input from "../../../../components/Input/input";
import Select from "../../../../components/Input/Select";
import { getClientesRequest, getEquiposRequest, postOrdenServicioRequest } from "../../../../service/public.service";
import ButtonSubmit from "../../../../components/buttons/ButtonSubmit";

const OrdenDeServicio = () => {

    const [cliente, setCliente] = useState('')
    const [ubicacion, setUbicacion] = useState('')
    const [equipo, setEquipo] = useState('')
    const [modelo, setModelo] = useState('')
    const [noSerie, setNoSerie] = useState('')
    const [clientesForSelectInput, setClientesForSelectInput] = useState([]);
    const [equiposForSelectInput, setEquiposForSelectInput] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [hasError, setHasError] = useState('')

    useEffect(() => {
        const fetchData = async () => {
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

    const postOrdenServicio = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await postOrdenServicioRequest({ "Nombre": cliente, "Ubicacion": ubicacion, "Equipo": equipo, "Modelo": modelo, "NoSerie": noSerie });
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
        <form onSubmit={postOrdenServicio} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <h3>Generar orden de servicio</h3>
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
                name="ubicacion"
                title="Ubicación"
                placeholder="Ingresa la ubicación"
                onChange={(e) => setUbicacion(e.target.value)}
                value={ubicacion}
                isRequired={true}
                disabled={isLoading}
            />


            <Input
                name="equipo"
                title="Equipo"
                placeholder="Ingresa el equipo"
                onChange={(e) => setEquipo(e.target.value)}
                value={equipo}
                isRequired={true}
                disabled={isLoading}
            />


            <Select
                name="modelo"
                label="Modelo"
                onChange={(e) => setModelo(e.target.value)}
                options={equiposForSelectInput}
                value={modelo}
                placeholder="Seleccionar modelo"
                isRequired={true}
                disabled={isLoading}
            />

            <Input
                name="noSerie"
                title="No. Serie"
                placeholder="Ingresar número de serie"
                onChange={(e) => setNoSerie(e.target.value)}
                inputType="number"
                value={noSerie}
                isRequired={true}
                disabled={isLoading}
            />

            {hasError && <p style={{ color: 'red' }}>{hasError}</p>}

            <ButtonSubmit disable={isLoading} title={isLoading ? 'cargando' : 'Agregar'} />
        </form>
    );
};

export default OrdenDeServicio;
