import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Input from "../../../../components/Input/input";
import Select from "../../../../components/Input/Select";
import { getClientesRequest, postReciboDemoRequest } from "../../../../service/public.service";
import ButtonSubmit from "../../../../components/buttons/ButtonSubmit";

const AcuseRecibidoDemo = ({ onSubmit }) => {

    const [cliente, setCliente] = useState('')
    const [fechaProgramada, setFechaProgramada] = useState('')
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

    const postReciboDemo = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await postReciboDemoRequest({ "NombreDelResponsable": cliente, "FechaProgramada": fechaProgramada });
            console.log("Acuse de entrega de equipo demo registrado");
            setTimeout(() => {
                setIsLoading(false);
                if (onSubmit) {
                    onSubmit();
                }
            }, 2000);
            setIsLoading(false);
        }
        catch (error) {
            setIsLoading(false);
            setHasError(error.msg);
        }
    }


    return (
        <form onSubmit={postReciboDemo} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <h3>Generar acuse de recibido demo</h3>
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

AcuseRecibidoDemo.propTypes = {
    onSubmit: PropTypes.func
}

export default AcuseRecibidoDemo;