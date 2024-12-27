import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Select from "../../../../components/Input/Select";
import { getClientesRequest, postAcuseDemoRequest } from "../../../../service/public.service";
import ButtonSubmit from "../../../../components/buttons/ButtonSubmit";

const AcuseDemoRegisterForm = ({ onSubmit }) => {

    const [cliente, setCliente] = useState();
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
            await postAcuseDemoRequest({ "Cliente": cliente });
            console.log("Acuse de entrega de equipo demo registrado");
            setTimeout(() => {
                setIsLoading(false);
                if (onSubmit) {
                    onSubmit();
                }
            }, 2000);
        }
        catch (error) {
            setIsLoading(false);
            setHasError(error.msg);
        }
    }

    return (
        <form onSubmit={postAcuseDemo} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <h3>Selecciona el usuario para generar acuse de entrega de equipo demo</h3>
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
            {hasError && <p style={{ color: 'red' }}>{hasError}</p>}

            <ButtonSubmit disable={isLoading} title={isLoading ? 'cargando' : 'Agregar'} />
        </form>
    );
};

AcuseDemoRegisterForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default AcuseDemoRegisterForm;