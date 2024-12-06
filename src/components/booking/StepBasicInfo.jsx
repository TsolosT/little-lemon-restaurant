import { Box, Input, Button, VStack, FormLabel } from "@chakra-ui/react";

const StepBasicInfo = ({ basicInfo, setBasicInfo, onNext }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBasicInfo({ [name]: value });
    };

    return (
        <Box p={4}>
            <VStack spacing={4}>
                <Box w={{base:'100%', md:'50%'}}>
                    <FormLabel>Name</FormLabel>
                    <Input
                        name="name"
                        value={basicInfo.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        focusBorderColor="secondary.100"
                    />
                </Box>
                <Box  w={{base:'100%', md:'50%'}}>
                    <FormLabel>Phone</FormLabel>
                    <Input
                        name="phone"
                        value={basicInfo.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone"
                        focusBorderColor="secondary.100"
                    />
                </Box >
                <Box  w={{base:'100%', md:'50%'}}>
                    <FormLabel>Email</FormLabel>
                    <Input
                        name="email"
                        value={basicInfo.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        focusBorderColor="secondary.100"
                    />
                </Box>
                <Button onClick={onNext}  bg="primary.200" color='primary.100' size="lg" _hover={{ bg:'secondary.100' }}>
                    Next
                </Button>
            </VStack>
        </Box>
    );
};

export default StepBasicInfo;
