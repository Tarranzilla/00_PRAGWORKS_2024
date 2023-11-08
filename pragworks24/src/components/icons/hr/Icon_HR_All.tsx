import React from "react";

import Icon_Industria from "./Icon_Industria";
import Icon_Varejo from "./Icon_Varejo";
import Icon_SaudeCuidado from "./Icon_SaudeCuidado";
import Icon_Cultura from "./Icon_Cultura";
import Icon_Hospitalidade from "./Icon_Hospitalidade";

import Icon_Atendimento from "./Icon_Atendimento";
import Icon_Compras from "./Icon_Compras";
import Icon_ExpPubli from "./Icon_ExpPubli";
import Icon_Inspecao from "./Icon_Inspecao";
import Icon_Transporte from "./Icon_Transporte";

import Icon_Navegação from "./Icon_Navegação";
import Icon_Interacoes from "./Icon_Interacoes";
import Icon_Rotas from "./Icon_Rotas";
import Icon_Recarrega from "./Icon_Recarrega";
import Icon_ReconhecimentoVisao from "./Icon_ReconhecimentoVisao";
import Icon_ReconhecimentoFala from "./Icon_ReconhecimentoFala";
import Icon_Idioma from "./Icon_Idioma";
import Icon_ColetaDados from "./Icon_ColetaDados";
import Icon_Midia from "./Icon_Midia";
import Icon_VideoChamada from "./Icon_VideoChamada";

import Icon_IntelNUC from "./Icon_IntelNUC";
import Icon_LIDAR from "./Icon_LIDAR";
import Icon_Ultrasom from "./Icon_Ultrasom";
import Icon_Camera from "./Icon_Camera";
import Icon_Tela from "./Icon_Tela";
import Icon_Som from "./Icon_Som";
import Icon_Bateria from "./Icon_Bateria";
import Icon_Wifi4gBlue from "./Icon_Wifi4gBlue";
import Icon_Modularidade from "./Icon_Modularidade";
import Icon_Customizacao from "./Icon_Customizacao";
import Icon_Brasil from "./Icon_Brasil";
import Icon_HarwareEspecial from "./Icon_HardwareEspecial";
import Icon_Carga from "./Icon_Carga";
import Icon_Download from "./Icon_Download";
import Icon_OpenWebLink from "./Icon_OpenWebLink";

import Icon_QuotePrice from "./Icon_QuotePrice";
import Icon_Demo from "./Icon_Demo";

export default function Icon_HR_All({ iconName }) {
    switch (iconName) {
        case "industria":
            return <Icon_Industria />;
        case "varejo":
            return <Icon_Varejo />;
        case "saudeCuidado":
            return <Icon_SaudeCuidado />;
        case "cultura":
            return <Icon_Cultura />;
        case "hospitalidade":
            return <Icon_Hospitalidade />;
        case "atendimento":
            return <Icon_Atendimento />;
        case "compras":
            return <Icon_Compras />;
        case "expPubli":
            return <Icon_ExpPubli />;
        case "inspecao":
            return <Icon_Inspecao />;
        case "transporte":
            return <Icon_Transporte />;
        case "navegação":
            return <Icon_Navegação />;
        case "interacoes":
            return <Icon_Interacoes />;
        case "rotas":
            return <Icon_Rotas />;
        case "recarrega":
            return <Icon_Recarrega />;
        case "reconhecimentoVisao":
            return <Icon_ReconhecimentoVisao />;
        case "reconhecimentoFala":
            return <Icon_ReconhecimentoFala />;
        case "idioma":
            return <Icon_Idioma />;
        case "coletaDados":
            return <Icon_ColetaDados />;
        case "midia":
            return <Icon_Midia />;
        case "videoChamada":
            return <Icon_VideoChamada />;
        case "intelNUC":
            return <Icon_IntelNUC />;
        case "lidar":
            return <Icon_LIDAR />;
        case "ultrasom":
            return <Icon_Ultrasom />;
        case "camera":
            return <Icon_Camera />;
        case "tela":
            return <Icon_Tela />;
        case "som":
            return <Icon_Som />;
        case "bateria":
            return <Icon_Bateria />;
        case "wifi4gBlue":
            return <Icon_Wifi4gBlue />;
        case "modularidade":
            return <Icon_Modularidade />;
        case "customizacao":
            return <Icon_Customizacao />;
        case "brasil":
            return <Icon_Brasil />;
        case "hardwareEspecial":
            return <Icon_HarwareEspecial />;
        case "carga":
            return <Icon_Carga />;
        case "download":
            return <Icon_Download />;
        case "openWebLink":
            return <Icon_OpenWebLink />;
        case "quotePrice":
            return <Icon_QuotePrice />;
        case "demo":
            return <Icon_Demo />;
        default:
            return <Icon_Industria />;
    }
}
