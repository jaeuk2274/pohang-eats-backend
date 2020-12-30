import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { CreateRestaurantDto } from "./dtos/create-restaurant.dto";
import { Restaurant } from "./entities/restaurant.entity";

// @Resolver()
@Resolver(of => Restaurant) // 안써도 되나 코드가 더 직관적
export class RestaurantResolver {
    @Query(returns => [Restaurant])  
    restaurants(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
        console.log(veganOnly);
        return [];
    }

    @Mutation(returns => Boolean)  
    createRestaurant(@Args() createRestaurantDto: CreateRestaurantDto): boolean {
      console.log(createRestaurantDto);
      return true;
    }
} 