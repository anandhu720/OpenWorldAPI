const {
  allDistrictInCountry,
  allDistrictOfState,
} = require('../custom/custom');
let {
  GHANA,
  INDIA,
  ARMENIA,
  SINGAPORE,
  CHINA,
  NIGERIA,
  BRAZIL,
} = require('../data/actions');

// ----------------COUNTRIES JSON DATA-----------------------------
const GhanaData = require('../data/countries/ghana.json');
const IndiaData = require('../data/countries/india.json');
const ArmeniaData = require('../data/countries/armenia.json');
const SingaporeData = require('../data/countries/singapore.json');
const ChinaData = require('../data/countries/china.json');
const NigeriaData = require('../data/countries/nigeria.json');
const BrazilData = require('../data/countries/brazil.json');
// ----------------------------------------------------------------

const getAllDistrictsOfCountry = async (req, res, nex) => {
  let { country } = req.params;
  let { reverse } = req.query;

  if (!country) {
    res.send(400).send({ message: 'Please provide country name' });
  }

  reverse = reverse ? (reverse === 'false' ? false : true) : true;
  switch (country.toUpperCase()) {
    case GHANA:
      res
        .status(200)
        .send({ districts: allDistrictInCountry(GhanaData, reverse) });
      return;

    case INDIA:
      res
        .status(200)
        .send({ districts: allDistrictInCountry(IndiaData, reverse) });
      return;

    case ARMENIA:
      res
        .status(200)
        .send({ districts: allDistrictInCountry(ArmeniaData, reverse) });
      return;
    case SINGAPORE:
      res
        .status(200)
        .send({ districts: allDistrictInCountry(SingaporeData, reverse) });

    case CHINA:
      res
        .status(200)
        .send({ districts: allDistrictInCountry(ChinaData, reverse) });

    case NIGERIA:
      res
        .status(200)
        .send({ districts: allDistrictInCountry(NigeriaData, reverse) });

    case BRAZIL:
      res
        .status(200)
        .send({ districts: allDistrictInCountry(BrazilData, reverse) });

    default:
      res.send('Nothingness');
  }
};

const getAllDistrictOfState = async (req, res, next) => {
  let { country } = req.params;
  let { reverse, state } = req.query;

  if (!country || !state) {
    res.status(400).send({ message: 'Please provide both country and state' });
  }

  reverse = reverse ? (reverse === 'false' ? false : true) : true;

  let index;
  switch (country.toUpperCase()) {
    case GHANA:
      index = GhanaData.states.findIndex(
        (data) => data.name.toLowerCase() === state.toLowerCase()
      );
      if (index === -1) {
        res.status(400).send({ message: 'State no found' });
        return;
      }

      res
        .status(200)
        .send({ districts: allDistrictOfState(GhanaData, index, reverse) });
      return;

    case INDIA:
      index = IndiaData.states.findIndex(
        (data) => data.name.toLowerCase() === state.toLowerCase()
      );
      if (index === -1) {
        res.status(400).send({ message: 'State no found' });
        return;
      }

      res
        .status(200)
        .send({ districts: allDistrictOfState(IndiaData, index, reverse) });
      return;

    case ARMENIA:
      index = ArmeniaData.states.findIndex(
        (data) => data.name.toLowerCase() === state.toLowerCase()
      );
      if (index === -1) {
        res.status(400).send({ message: 'State no found' });
        return;
      }

      res
        .status(200)
        .send({ districts: allDistrictOfState(ArmeniaData, index, reverse) });
    case SINGAPORE:
      index = SingaporeData.states.findIndex(
        (data) => data.name.toLowerCase() === state.toLowerCase()
      );
      if (index == -1) {
        res.send(400).send({ message: ' State not found' });
        return;
      }
      res
        .status(200)
        .send({ districts: allDistrictOfState(SingaporeData, index, reverse) });

    case CHINA:
      index = ChinaData.states.findIndex(
        (data) => data.name.toLowerCase() === state.toLowerCase()
      );
      if (index == -1) {
        res.send(400).send({ message: ' State not found' });
        return;
      }
      res
        .status(200)
        .send({ districts: allDistrictOfState(ChinaData, index, reverse) });

    case NIGERIA:
      index = NigeriaData.states.findIndex(
        (data) => data.name.toLowerCase() === state.toLowerCase()
      );
      if (index == -1) {
        res.send(400).send({ message: ' State not found' });
        return;
      }
      res
        .status(200)
        .send({ districts: allDistrictOfState(NigeriaData, index, reverse) });

    case BRAZIL:
      index = BrazilData.states.findIndex(
        (data) => data.name.toLowerCase() === state.toLowerCase()
      );
      if (index == -1) {
        res.send(400).send({ message: 'State not found' });
        return;
      }
      res
        .status(200)
        .send({ districts: allDistrictOfState(BrazilData, index, reverse) });

    default:
      res.send('Nothingness');
  }
};

module.exports = { getAllDistrictsOfCountry, getAllDistrictOfState };
