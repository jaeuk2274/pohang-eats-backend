import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { CreateRestaurantDto } from "./dtos/create-restaurant.dto";
import { Restaurant } from "./entities/restaurant.entity";
import { RestaurantService } from "./restaurants.service";

// @Resolver()
@Resolver(of => Restaurant) // 안써도 되나 코드가 더 직관적
export class RestaurantResolver {
    constructor(private readonly restaurantService: RestaurantService) {}

    @Query(returns => [Restaurant])  
    restaurants(): Promise<Restaurant[]> {
        return this.restaurantService.getAll();
    }

    @Mutation(returns => Boolean)  
    createRestaurant(@Args() createRestaurantDto: CreateRestaurantDto): boolean {
      console.log(createRestaurantDto);
      return true;
    }
} 