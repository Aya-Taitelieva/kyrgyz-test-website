import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import { useTranslation } from "react-i18next";
import "../settings/18n.js";

export default function ChangeLang() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //   изменение языка
  const { t, i18n } = useTranslation();
  //   console.log(i18n);
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    // console.log(lang);
  };

  return (
    <div>
      <Button
        style={{ color: "white" }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}>
        {t("lang")}
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}>
        <MenuItem
          onClick={() => {
            changeLanguage("kg");
            handleClose();
          }}
          className="lang-kg">
          Кыргыз тил
        </MenuItem>
        <MenuItem
          className="lang-ru"
          onClick={() => {
            changeLanguage("ru");
            handleClose();
          }}>
          Русский язык
        </MenuItem>
        <MenuItem
          className="lang-en"
          onClick={() => {
            changeLanguage("en");
            handleClose();
          }}>
          English
        </MenuItem>
      </Menu>
    </div>
  );
}
