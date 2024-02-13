import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import { Header } from "@/components/Header";
import { GlobalStyles } from "@/components/styles/Global.styled";
import NavBar from "@/components/NavBar";
import Aside from "@/components/Aside";
import { About } from "@/components/About";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";
import { Work } from "@/components/Work";

export default function Home() {
  const [value, setValue] = useState("Accueil");

  return (
    <>
      <GlobalStyles />
      <Container fixed>
        <Header />
        <Grid container justifyContent="end" style={{ marginTop: "5rem" }}>
          <NavBar setValue={setValue} value={value} />
        </Grid>
        <Grid
          container
          justifyContent="space-between"
          style={{ marginTop: "1rem" }}
        >
          <Grid
            item
            xs={3}
            style={{ backgroundColor: "#FFFFFF", borderRadius: "15px" }}
          >
            <Aside />
          </Grid>
          <Grid
            item
            xs={8}
            style={{ backgroundColor: "#FFFFFF", borderRadius: "15px" }}
          >
            {value === "Accueil" && <About />}
            {value === "Résumé" && <Resume />}
            {value === "Travail" && <Work />}
            {value === "Contact" && <Contact />}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
