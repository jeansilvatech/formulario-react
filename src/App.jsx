import { useState } from 'react';
import FormAccount from './components/FormAccount';
import FormAddress from './components/FormAddress';
import FormPersonalDetails from './components/FormPersonalDetails';
import * as C from "@chakra-ui/react";
import Step from './components/Step';

function App() {
  const [step, setStep ] = useState(1);
  const getCompStep = () =>{
    switch(step){
      case 1:
        return <FormAccount />;
        break;
      case 2:
        return <FormPersonalDetails />;
        break;
      case 3:
          return <FormAddress />;
          break;
      default:
        return <FormAccount />;
    }
  }
  const Steps = [1,2,3]
  return (
    <C.Flex h="100vh" align="center" justify="center" bg="#F0FFF0">
      <C.Center maxW={500} w="100%" py={10} px={2} flexDir="column">
        <C.HStack spacing={4}>
          {Steps.map((item)=>(
            <Step key={item} index={item} active={step===item} />
          ))}
        </C.HStack>
        <C.Divider my={4} borderColor="green.700" />
        <C.Box w="80%">
            {getCompStep()}
        </C.Box>
        <C.HStack spacing={10} mt={4}>
          <C.Button
          bg="green.100"
          onClick={()=> setStep(step-1)}
          disabled={step===1}>
            Voltar
          </C.Button>

          <C.Button
          colorScheme="green"
          onClick={()=> step !==3 && setStep(step+1)}>
            {step===3 ? "Enviar": "Próximo"}
          </C.Button>
        </C.HStack>
      </C.Center>
    </C.Flex>
  )
}

export default App
