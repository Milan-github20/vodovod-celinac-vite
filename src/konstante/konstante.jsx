import {
  CalculatorFilled,
  CaretRightOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCalculator,
  faRectangleList,
  faMoneyBillTransfer,
  faFileInvoiceDollar,
  faBook,
  faChartColumn,
  faPlusMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(
  faRectangleList,
  faCalculator,
  faMoneyBillTransfer,
  faFileInvoiceDollar,
  faBook,
  faChartColumn,
  faPlusMinus
);

export const sideMeniPostavka = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: "Šifarnici",
    children: [
      {
        key: "/sifarnici/ulice",
        label: <NavLink to={"/sifarnici/ulice"}>Ulice</NavLink>,
      },
      {
        key: "/sifarnici/kupci",
        label: <NavLink to={"/sifarnici/kupci"}>Kupci</NavLink>,
      },
      {
        key: "/sifarnici/podaci_o_firmi",
        label: (
          <NavLink to={"/sifarnici/podaci_o_firmi"}>Podaci o firmi</NavLink>
        ),
      },
      {
        key: "/sifarnici/cijene",
        label: <NavLink to={"/sifarnici/cijene"}>Cijene</NavLink>,
      },
      {
        key: "/sifarnici/cijene_po_profilima",
        label: (
          <NavLink to={"/sifarnici/cijene_po_profilima"}>
            Cijene po profilima
          </NavLink>
        ),
      },
      {
        key: "/sifarnici/tip_kupca",
        label: <NavLink to={"/sifarnici/tip_kupca"}>Tip kupca</NavLink>,
      },
      {
        key: "/sifarnici/kategorije",
        label: <NavLink to={"/sifarnici/kategorije"}>Kategorije</NavLink>,
      },
      {
        key: "/sifarnici/posebne_usluge",
        label: (
          <NavLink to={"/sifarnici/posebne_usluge"}>Posebne usluge</NavLink>
        ),
      },
      {
        key: "/sifarnici/servis_kupca",
        label: <NavLink to={"/sifarnici/servis_kupca"}>Servis kupaca</NavLink>,
      },
      {
        key: "/sifarnici/grupe_duznika",
        label: <NavLink to={"/sifarnici/grupe_duznika"}>Grupe dužnika</NavLink>,
      },
    ],
  },
  {
    key: "2",
    icon: (
      <NavLink to={"/brojila"}>
        <VideoCameraOutlined />
      </NavLink>
    ),
    label: "Brojila",
  },
  {
    key: "3",
    icon: (
      <NavLink to={"/uplate"}>
        <UploadOutlined />
      </NavLink>
    ),
    label: "Uplate",
  },
  {
    key: "4",
    icon: (
      <NavLink to={"/obracun"}>
        <UploadOutlined />
      </NavLink>
    ),
    label: "Obračun",
  },
  {
    key: "5",
    icon: (
      <NavLink to={"/fakture"}>
        <UploadOutlined />
      </NavLink>
    ),
    label: "Fakture",
  },
  {
    key: "6",
    icon: (
      <NavLink to={"/knjizne"}>
        <UploadOutlined />
      </NavLink>
    ),
    label: "Knjižne",
  },
  {
    key: "7",
    icon: (
      <NavLink to={"/izvjestaji"}>
        <UploadOutlined />
      </NavLink>
    ),
    label: "Izvještaji",
  },
];

export const HomePageCard = [
  {
    title: "Šifarnici",
    description: "Dodirnite da nastavite",
    icon: <FontAwesomeIcon icon={faRectangleList} />,
    click: "/sifarnici/ulice",
  },
  {
    title: "Brojila",
    description: "Dodirnite da nastavite",
    icon: <FontAwesomeIcon icon={faCalculator} />,
    click: "/brojila",
  },
  {
    title: "Uplate",
    description: "Dodirnite da nastavite",
    icon: <FontAwesomeIcon icon={faMoneyBillTransfer} />,
    click: "/uplate",
  },
  {
    title: "Obračun",
    description: "Dodirnite da nastavite",
    icon: <FontAwesomeIcon icon={faPlusMinus} />,
    click: "/obracun",
  },
  {
    title: "Fakture",
    description: "Dodirnite da nastavite",
    icon: <FontAwesomeIcon icon={faFileInvoiceDollar} />,
    click: "/fakture",
  },
  {
    title: "Knjižne",
    description: "Dodirnite da nastavite",
    icon: <FontAwesomeIcon icon={faBook} />,
    click: "/knjizne",
  },
  {
    title: "Izvještaji",
    description: "Dodirnite da nastavite",
    icon: <FontAwesomeIcon icon={faChartColumn} />,
    click: "/izvjestaji",
  },
];
