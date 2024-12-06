import { Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Box } from "@chakra-ui/react";

function FaqList({data}) {
    return (
        <Accordion allowToggle>
            {data.map((item) => (
                <AccordionItem key={item.id}>
                    <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign='left'>
                                {item.question}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        {item.answer}
                    </AccordionPanel>
                </AccordionItem>
            ))}
        </Accordion>
    );
}

export default FaqList;