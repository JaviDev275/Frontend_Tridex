import { useState } from "react";
import Input from "../../../../components/Input/input";
import { postClientesRequest } from "../../../../service/public.service";

const ClientesRegisterForm = () => {

    const [cliente, setCliente] = useState('')
    const [direccion, setDireccion] = useState('')
    const [telefono, setTelefono] = useState('')

    const postCliente = async () => {
        try {
            await postClientesRequest({ "Cliente": cliente, "Direccion": direccion, "Telefono": telefono });
            console.log("Acuse de entrega de equipo demo registrado");
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }
        catch (error) {
            console.log(error.msg);
        }
    }


    return (
        <>
            <h3>Agregar nuevo cliente</h3>
            <Input
                name="cliente"
                title="Nombre del cliente"
                placeholder="Ingresa el nombre"
                onChange={(e) => setCliente(e.target.value)}
                value={cliente}
                maxLength={60}
            />


            <Input
                name="direccion"
                title="Dirección"
                placeholder="Ingresa la dirección"
                onChange={(e) => setDireccion(e.target.value)}
                value={direccion}
                maxLength={60}
            />


            <Input
                name="telefono"
                title="Teléfono"
                inputType="number"
                placeholder="Ingresa el teléfono"
                onChange={(e) => setTelefono(e.target.value)}
                value={telefono}
                maxLength={10}
            />

            <button onClick={postCliente}>
                Enviar
            </button>
        </>
    );
};

export default ClientesRegisterForm;
