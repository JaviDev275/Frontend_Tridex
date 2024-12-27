import { useState } from "react";
import Input from "../../../../components/Input/input";
import { postClientesRequest } from "../../../../service/public.service";
import ButtonSubmit from "../../../../components/buttons/ButtonSubmit";

const EquiposRegisterForm = () => {

    const [modelo, setModelo] = useState('')
    const [marca, setMarca] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [hasError, setHasError] = useState('')

    const postCliente = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await postClientesRequest({ "Modelo": modelo, "Marca": marca, "Descripcion": descripcion });
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
        <form onSubmit={postCliente} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>

            <h3>Agregar nuevo equipo</h3>
            <Input
                name="modelo"
                title="Modelo"
                placeholder="Ingresa el modelo"
                onChange={(e) => setModelo(e.target.value)}
                value={modelo}
                maxLength={30}
                isRequired={true}
            />


            <Input
                name="marca"
                title="Marca"
                placeholder="Ingresa la marca"
                onChange={(e) => setMarca(e.target.value)}
                value={marca}
                maxLength={30}
                isRequired={true}
            />


            <Input
                name="descripcion"
                title="Descripción"
                placeholder="Ingresa la descripción"
                onChange={(e) => setDescripcion(e.target.value)}
                value={descripcion}
                maxLength={10}
                isRequired={true}
            />

            {hasError && <p style={{ color: 'red' }}>{hasError}</p>}

            <ButtonSubmit title={isLoading ? 'cargando' : 'Agregar'} />

        </form>
    );
};

export default EquiposRegisterForm;
