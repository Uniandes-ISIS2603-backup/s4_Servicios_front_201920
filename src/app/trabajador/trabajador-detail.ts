import {Trabajador} from "./trabajador";
import {Movie} from "../movie/movie";

export class TrabajadorDetail extends Trabajador{
  text: string;
  movies: Movie[];
}