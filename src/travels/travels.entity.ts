import { IsNotEmpty, IsString, MinLength, IsUrl, IsInt, Min, Max, IsNumber } from 'class-validator';
 
export class Travels {
  id: number;
 
  @IsNotEmpty()
  @IsString()
  destinationCountry: string;
 
  @IsNotEmpty()
  @IsString()
  destinationCity: string;
 
  @IsNotEmpty()
  @IsString()
  @MinLength(30)
  description: string;
 
  @IsNotEmpty()
  @IsUrl()
  image: string;
 
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  price: number;
 
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(50)
  discount: number;
}
