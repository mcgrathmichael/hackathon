import * as React from "react";
import PropTypes from "prop-types";
import useAutocomplete from "@mui/base/useAutocomplete";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import { autocompleteClasses } from "@mui/material/Autocomplete";
import { useState } from "react";
import BeachCard from "../BeachCard";

const Root = styled("div")(
  ({ theme }) => `
  color: ${
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,.85)"
  };
  font-size: 16px;
`
);

const Label = styled("label")`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
`;

const InputWrapper = styled("div")(
  ({ theme }) => `
  border: 1px solid ${theme.palette.mode === "dark" ? "#434343" : "#d9d9d9"};
  background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
  border-radius: 15px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  box-shadow: 0px px 10px 0px #000000e8;

  &:hover {
    border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
  }

  &.focused {
    border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  & input {
    background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
    color: ${
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.65)"
        : "rgba(0,0,0,.85)"
    };
    height: 30px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 4px;
    outline: 0;
  }
`
);

function Tag(props) {
  const { label, onDelete, ...other } = props;
  return (
    <div {...other}>
      <span>{label}</span>
      <CloseIcon onClick={onDelete} />
    </div>
  );
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const StyledTag = styled(Tag)(
  ({ theme }) => `
  display: flex;
  align-items: center;
  height: 24px;
  margin: 2px;
  line-height: 22px;
  background-color: ${
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.08)" : "#fafafa"
  };
  border: 1px solid ${theme.palette.mode === "dark" ? "#303030" : "#e8e8e8"};
  border-radius: 15px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;

  &:focus {
    border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
    background-color: ${theme.palette.mode === "dark" ? "#003b57" : "#e6f7ff"};
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 12px;
    cursor: pointer;
    padding: 2px;
  }
`
);

const Listbox = styled("ul")(
  ({ theme }) => `
  width: 300px;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: ${theme.palette.mode === "dark" ? "#2b2b2b" : "#fafafa"};
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li.${autocompleteClasses.focused} {
    background-color: ${theme.palette.mode === "dark" ? "#003b57" : "#e6f7ff"};
    cursor: pointer;

    & svg {
      color: currentColor;
    }
  }
`
);

export default function CustomizedHook(props) {
  const [beachesSelected, setBeachesSelected] = useState();
  const handleChange = (event, value) => {
    setBeachesSelected(value);
  };

  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: "customized-hook-demo",
    defaultValue: [BeachesEu[1]],
    multiple: true,
    options: BeachesEu,
    onChange: handleChange,
    getOptionLabel: (option) => option.title,
  });

  return (
    <div>
      <Root>
        <div {...getRootProps()}>
          <InputWrapper ref={setAnchorEl} className={focused ? "focused" : ""}>
            {value.map((option, index) => (
              <StyledTag
                key={option.title}
                label={option.title}
                {...getTagProps({ index })}
              />
            ))}

            <input {...getInputProps()} />
          </InputWrapper>
        </div>
        {groupedOptions.length > 0 ? (
          <Listbox {...getListboxProps()}>
            {groupedOptions.map((option, index) => (
              <li key={option.title} {...getOptionProps({ option, index })}>
                <span>{option.title}</span>
                <CheckIcon fontSize="small" />
              </li>
            ))}
          </Listbox>
        ) : null}
      </Root>
      {beachesSelected &&
        beachesSelected.map((beach) => (
          <BeachCard
            key={beach.title}
            beach={beach}
            image={beach.image}
            title={beach.title}
            // beachesSelected={setBeachesSelected}
          />
        ))}
      {/* {beachesSelected &&
        beachesSelected.map((beach) => <img src={beach.image} />)} */}
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const BeachesEu = [
  {
    title: "Porto Katsiki, Lefkada, Greece",
    image:
      "https://elxis.com/cdn-cgi/image/width=1920,height=1196,fit=crop,quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/2023/03/shutterstock_1926845042.jpg",
  },
  {
    title: "Praia Baleal, Peniche, Portugal",
    image:
      "https://www.balealsurfcamp.com/content-files/uploads/2019/11/Baleal-drone-view-baleal-surf-camp-peniche-portugal-e1673277046618.jpg",
  },
  {
    title: "Atrani, Campania, Italy",
    image:
      "https://tourismmedia.italia.it/is/image/mitur/20210308183044-atrani-costiera-amalfitana-campania-gettyimages-527118227?wid=1240&hei=500&fit=constrain,1&fmt=webp",
  },
  {
    title: "Antibes, French Riviera, France",
    image:
      "https://images.france.fr/zeaejvyq9bhj/3ctbNdapkA4vC2d0fVMbNw/706690bebb7812a44a61f8d13c82f9ce/__antibes-remparts-mary-quincy.jpg?w=1120&h=490&q=70&fl=progressive&fit=fill",
  },
  {
    title: "La Concha Beach, San Sebastian, Spain",
    image:
      "https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/playas/playa-la-concha-gipuzkoa-pais-vasco-s1407625913.jpg_1014274486.jpg",
  },
  {
    title: "Elafonisos, Crete, Greece",
    image:
      "https://www.la-crete-autrement.com/wp-content/uploads/2020/11/elafonisi-plage.png",
  },
  {
    title: "Playa de Las Catedrales, Galicia, Spain",
    image:
      "https://mybestplace.com/uploads/2016/12/Playa-de-Las-Catedrales-Ribadeo-Spagna-3.jpg",
  },
  {
    title: "Les Calanques de Cassis, France",
    image:
      "https://www.okvoyage.com/wp-content/uploads/2021/09/les-calanques-de-cassis-scaled.jpg",
  },
  {
    title: "La Pelosa, Sardinia, Italy",
    image: "https://www.worldbeachguide.com/photos/large/la-pelosa-beach.jpg",
  },
  {
    title: "Myrtos Beach, Kefalonia, Greece",
    image:
      "https://www.thisislandlife.com/wp-content/uploads/2019/11/best-beaches-ionian-islands-greece-myrtos-kefalonia-hero.jpg",
  },
  {
    title: "Praia do Portinho da Arrábida, Setubal, Portugal",
    image:
      "https://s7a5n8m2.stackpathcdn.com/wp-content/uploads/2020/02/vista-praia-portinho.jpg",
  },
  {
    title: "Haukland Beach, Norway",
    image:
      "https://adventures.com/media/20451/s-haukland-beach-view-clear-blue-water-fjord-mountain-range-summer-sunny-norway.jpg",
  },
  {
    title: "Cala Goloritzè, Italy",
    image:
      "https://www.sardegnaturismo.it/sites/default/files/styles/larghezza_contenitore/public/attrattori/003_cala_goloritze_-_baunei_2_tn.jpg?itok=9rekWA-S",
  },
  {
    title: "West Beach, Scotland",
    image:
      "https://i2-prod.dailyrecord.co.uk/scotland-now/article23686663.ece/ALTERNATES/s615b/6211797_03400642.jpg",
  },
  {
    title: "Playa de los Muertos, Almería, Spain",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipNhObSdcTsicxmuwS3y3nAjHM7Z22LJBua0lH1l=s1600",
  },
  {
    title: "Porto Côvo, Costa Vicentina, Portugal",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/17/09/ee/d5/porto-covo-costa-vicentina.jpg",
  },
  {
    title: "Praia da Falésia, Algarve, Portugal",
    image: "https://www.iberian-escapes.com/images/falesia-beach-ok.jpg",
  },
  {
    title: "L’Herbe, Cap Ferret, Gironde, France",
    image:
      "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/241042841.jpg?k=38bedd661adc9ac9a518ea2568653e44f3556f9886e60d6e691e3cf3f61e7b69&o=",
  },
  {
    title: "Voidokilia, Peloponnese, Greece",
    image:
      "https://www.peloponnesetour.com/wp-content/uploads/2016/07/voido-3.jpg",
  },
  {
    title: "Paliochori, Milos, Aegean Sea, Greece",
    image:
      "https://www.westend61.de/images/0001596549pw/paleochori-paliochori-beach-on-milos-island-cyclades-greek-islands-greece-europe-RHPLF20708.jpg",
  },
  {
    title: "Vathy Beach, Cyclades, Sifnos, Greece",
    image:
      "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/vathi-baysifnosgreece-y-dragon.jpg",
  },
  {
    title: "Barceloneta Beach, Barcelona, Spain",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/07/e1/3f/f5/barceloneta-beach.jpg",
  },
  {
    title: "Calo des Moro, Mallorca, Spain",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/f6/86/e4/calo-des-moro.jpg?w=1200&h=-1&s=1",
  },
  {
    title: "Lagos, Algarve, Portugal",
    image:
      "https://images.nationaltours.fr/(Image)-image-Portugal-Lagos-Algarve-as_155390878.jpg",
  },
  {
    title: "Praia da Rocha, Algarve, Portugal",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/8f/b5/a0/beach-view.jpg?w=1200&h=-1&s=1",
  },
  {
    title: "Navagio Beach, Zakynthos, Greece",
    image:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/70/56/59.jpg",
  },
  {
    title: "Porto Katsiki Beach, Lefkada, Greece",
    image:
      "https://www.greeka.com/village_beach/photos/650/porto-katsiki-top-1-1280.jpg",
  },
  {
    title: "Plitvice Lakes National Park, Croatia",
    image:
      "https://www.intrepidtravel.com/adventures/wp-content/uploads/2017/10/pascal-habermann-35818.jpg",
  },
  {
    title: "Stiniva Beach, Vis Island, Croatia",
    image:
      "https://www.worldbeachguide.com/photos/stiniva-beach-vis-island.jpg",
  },
  {
    title: "Elafonisi Beach, Crete, Greece",
    image:
      "https://greecetravelideas.com/wp-content/uploads/2021/07/Pink-beaches-in-Crete-Elafonisi-min.jpg",
  },
  {
    title: "Spiaggia dei Conigli, Lampedusa, Italy",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/18/33/ac/8a/spiaggia-dei-conigli.jpg",
  },
  {
    title: "Cala Goloritze, Sardinia, Italy",
    image:
      "https://edweeb8mb9u.exactdn.com/wp-content/uploads/2021/11/Cala-Goloritze-1.jpg",
  },
  {
    title: "Cala Macarella, Menorca, Spain",
    image:
      "https://as2.ftcdn.net/v2/jpg/02/53/02/97/1000_F_253029701_uj3NcRWijHRGjfQhadysWG9eviheHvE2.jpg",
  },
  {
    title: "Playa de Ses Illetes, Formentera, Spain",
    image:
      "https://youimg1.tripcdn.com/target/0ww1812000acjlenoE431.jpg?proc=source%2Ftrip",
  },
  {
    title: "Fig Tree Bay, Protaras, Cyprus",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipObrDAlj8_liDx5cSh0IzmiWOih-_njMaeWOziw=s1600",
  },
  {
    title: "Cala Bassa, Ibiza, Spain",
    image:
      "https://www.white-ibiza.com/wp-content/uploads/2020/03/ibiza-beaches-cala-bassa-06.jpg",
  },
  {
    title: "Plage de Palombaggia, Corsica, France",
    image:
      "https://a.cdn-hotels.com/gdcs/production23/d1326/434e2ff2-fb1b-4772-8e86-53daff66615a.jpg",
  },
  {
    title: "Playa de Bolonia, Tarifa, Spain",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipOcO02PkoTm9pylTUkhvuaqjZzhmSAq-edZtKAE=s1600",
  },
  {
    title: "Zlatni Rat Beach, Brac Island, Croatia",
    image:
      "https://www.swedishnomad.com/wp-content/images/2019/01/Zlatni-Rat.jpg",
  },
  {
    title: "Porto Santo Beach, Madeira, Portugal",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/99/f0/0a/simplesmente-espectacular.jpg?w=500&h=300&s=1",
  },
  {
    title: "Troia Beach, Setubal, Portugal",
    image: "https://vivemedia-1d168.kxcdn.com/9773/0.jpg",
  },
  {
    title: "Praia do Guincho, Cascais, Portugal",
    image: "https://lisbonlisboaportugal.com/images/650x450/guincho-beach.jpg",
  },
  {
    title: "Zlatni Rat Beach,Croatia",
    description:
      "A stunning white pebble beach that changes shape with the tides and currents.",
    image:
      "https://www.planetware.com/photos-large/HR/croatia-zlatni-rat-beach.jpg",
  },
  {
    title: "Navagio Beach,Greece",
    description:
      "A secluded cove with crystal-clear waters and a shipwreck on the shore.",
    image:
      "https://www.planetware.com/photos-large/GR/greece-zakynthos-navagio-beach-shipwreck-beach.jpg",
  },
  {
    title: "Praia da Rocha, Portugal",
    description:
      "A long stretch of golden sand backed by rugged cliffs and lined with bars and restaurants.",
    image:
      "https://www.planetware.com/photos-large/P/portugal-praia-da-rocha.jpg",
  },
  {
    title: "Cala Comte, Spain",
    description:
      "A crescent-shaped bay with turquoise waters and a stunning view of the sunset.",
    image: "https://www.planetware.com/photos-large/E/spain-cala-comte.jpg",
  },
  {
    title: "Cala Macarella, Spain",
    description:
      "A small cove with clear blue waters and surrounded by pine forests.",
    image: "https://www.planetware.com/photos-large/E/spain-cala-macarella.jpg",
  },
  {
    title: "Porthcurno Beach, United Kingdom",
    description:
      "A beautiful white sand beach set in a cove surrounded by rugged cliffs and turquoise waters.",
    image:
      "https://www.planetware.com/photos-large/GB/united-kingdom-england-porthcurno-beach.jpg",
  },

  {
    title: "Plage de Palombaggia,France",
    description:
      "A long sandy beach with crystal-clear waters and backed by pine forests and red rocks.",
    image:
      "https://www.planetware.com/photos-large/F/france-plage-de-palombaggia.jpg",
  },
  {
    title: "Cala Gonone Beach, Italy",
    description:
      "A beautiful white pebble beach set in a picturesque bay surrounded by limestone cliffs.",
    image:
      "https://www.planetware.com/photos-large/I/italy-cala-gonone-beach.jpg",
  },
];
