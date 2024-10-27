import { PokemonList } from "../models/PokemonList";
import api from '../../../utils/axios';



const HomeService = {

  getListPokemon: async (): Promise<PokemonList | null> => {
    try {
      const { data, status } = await api.get(`/?offset=0&limit=6`);
      if(status === 200) return data
      return null
    } catch (err) {
      return null;
    }
  }



}
export default HomeService;