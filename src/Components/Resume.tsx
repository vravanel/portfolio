import {Heading, Grid} from "@chakra-ui/react"
import Card from "./Card"

export default function Resume() {
    return (
        <>
         <Heading margin="1rem 0">Mes Formations</Heading>
      <Grid templateColumns="47% 47%" gap={6}>
      <Card title="Concepteur Développeur d'Applications" color="#FFEBD1"  description="test2" />
      <Card title="Développeur Web et Web Mobile" color="#F2F7FC"  description="test2"/>

      </Grid>
        </>
    )
}