import { useEffect, useState } from "react";
import Select from "../../../../components/Input/Select";
import { getClientesRequest, postSolicitudPrestamoRequest } from "../../../../service/public.service";
import ButtonSubmit from "../../../../components/buttons/ButtonSubmit";

const SolicitudPrestamoRegisterForm = () => {

    const [nombreDelSolicitante, setNombreDelSolicitante] = useState();
    const [clientesForSelectInput, setClientesForSelectInput] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [hasError, setHasError] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            let clientesResult = await getClientesRequest();
            clientesResult = clientesResult.map((cliente) => ({
                value: cliente.Cliente,
                label: cliente.Cliente,
            }));
            setClientesForSelectInput(clientesResult);
            setIsLoading(false);
        }
        fetchData();
    }, []);

    const postAcuseDemo = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await postSolicitudPrestamoRequest({ "NombreDelSolicitante": nombreDelSolicitante });
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
        <form onSubmit={postAcuseDemo} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <h3>Generar solicitud de prestamo</h3>
            <Select
                name="cliente"
                onChange={(e) => setNombreDelSolicitante(e.target.value)}
                options={clientesForSelectInput}
                value={nombreDelSolicitante}
                placeholder="Seleccionar cliente"
                label="Ingresar nombre del solicitante"
                isRequired={true}
                disabled={isLoading}
            />
            {hasError && <p style={{ color: 'red' }}>{hasError}</p>}

            <ButtonSubmit disable={isLoading} title={isLoading ? 'cargando' : 'Agregar'} />
        </form>
    );
};

export default SolicitudPrestamoRegisterForm;