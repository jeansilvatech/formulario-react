import * as C from "@chakra-ui/react";

const FormPersonalDetails = () =>{
    return(
        <C.VStack spacing={5}>
            <C.Input placeholder="Nome Completo" borderColor="green.700" focusBorderColor="green.500"/>
            <C.Input placeholder="CPF" borderColor="green.700" focusBorderColor="green.500"/>
            <C.Input placeholder="Celular" borderColor="green.700" focusBorderColor="green.500"/>
        </C.VStack>
    )
}
export default FormPersonalDetails;