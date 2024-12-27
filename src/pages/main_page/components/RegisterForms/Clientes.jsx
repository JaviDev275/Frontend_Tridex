import PropTypes from 'prop-types';
import { useState } from "react";
import Input from "../../../../components/Input/input";
import { postClientesRequest } from "../../../../service/public.service";
import ButtonSubmit from "../../../../components/buttons/ButtonSubmit";

const ClientesRegisterForm = ({ onSubmit }) => {

    const [cliente, setCliente] = useState('')
    const [direccion, setDireccion] = useState('')
    const [telefono, setTelefono] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [hasError, setHasError] = useState('')

    const postCliente = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await postClientesRequest({ "Cliente": cliente, "Direccion": direccion, "Telefono": telefono });
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
        <form onSubmit={postCliente} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>

            <h3>Agregar nuevo cliente</h3>
            <Input
                name="cliente"
                title="Nombre del cliente"
                placeholder="Ingresa el nombre"
                onChange={(e) => setCliente(e.target.value)}
                value={cliente}
                maxLength={60}
                isRequired={true}
            />


            <Input
                name="direccion"
                title="Dirección"
                placeholder="Ingresa la dirección"
                onChange={(e) => setDireccion(e.target.value)}
                value={direccion}
                maxLength={60}
                isRequired={true}
            />


            <Input
                name="telefono"
                title="Teléfono"
                placeholder="Ingresa el teléfono"
                onChange={(e) => setTelefono(e.target.value)}
                value={telefono}
                maxLength={10}
                isRequired={true}
            />

            {hasError && <p style={{ color: 'red' }}>{hasError}</p>}

            <ButtonSubmit title={isLoading ? 'cargando' : 'Agregar'} />

        </form>
    );
};

ClientesRegisterForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default ClientesRegisterForm;
