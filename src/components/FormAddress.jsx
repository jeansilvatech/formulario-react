import * as C from "@chakra-ui/react";

const FormAddress = () =>{
    return(
    <C.VStack spacing={5}>
        <C.Input placeholder="Cidade, UF" borderColor="green.700" focusBorderColor="green.500"/>
        <C.Input placeholder="Rua" borderColor="gren.700" focusBorderColor="green.500"/>
        <C.Input placeholder="CEP" borderColor="green.700" focusBorderColor="green.500"/>
    </C.VStack>
    );
};
export default FormAddress;