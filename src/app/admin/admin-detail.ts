import {Admin} from "./admin";
import {Movie} from "../movie/movie";

export class AdminDetail extends Admin{
  text: string;
  movies: Movie[];
}