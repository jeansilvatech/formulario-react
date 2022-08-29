import * as C from "@chakra-ui/react";

const FormAccount = () =>{
    return(
    <C.VStack spacing={5}>
        <C.Input type="email" placeholder="E-mail" borderColor="green.700" focusBorderColor="green.500"/>
        <C.Input type="email" placeholder="Confirme seu E-mail" borderColor="green.700" focusBorderColor="green.500"/>
        <C.Input type="password" placeholder="Senha" borderColor="green.700" focusBorderColor="green.500"/>
    </C.VStack>
    );
};
export default FormAccount;