import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DvrIcon from "@mui/icons-material/Dvr";
import WorkIcon from "@mui/icons-material/Work";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import { NavBarProvider } from "./NavbarProvider";

interface NavBarProps {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}

export default function NavBar({ setValue, value }: NavBarProps) {
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <NavBarProvider setValue={setValue}>
      <BottomNavigation
        showLabels
        style={{ border: "0.2rem solid", borderRadius: "10px" }}
        sx={{ width: 500 }}
        onChange={handleChange}
        value={value}
      >
        <BottomNavigationAction
          label="Accueil"
          value="Accueil"
          icon={
            <HomeOutlinedIcon
              style={value === "Accueil" ? { backgroundColor: "#FF9C1A" } : {}}
            />
          }
        />
        <BottomNavigationAction
          label="Résumé"
          value="Résumé"
          icon={
            <DvrIcon
              style={value === "Résumé" ? { backgroundColor: "#FF9C1A" } : {}}
            />
          }
        />
        <BottomNavigationAction
          label="Travail"
          value="Travail"
          icon={
            <WorkIcon
              style={value === "Travail" ? { backgroundColor: "#FF9C1A" } : {}}
            />
          }
        />
        <BottomNavigationAction
          label="Contact"
          value="Contact"
          icon={
            <PermContactCalendarIcon
              style={value === "Contact" ? { backgroundColor: "#FF9C1A" } : {}}
            />
          }
        />
      </BottomNavigation>
    </NavBarProvider>
  );
}
