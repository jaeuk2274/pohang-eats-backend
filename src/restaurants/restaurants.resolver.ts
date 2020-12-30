import { Resolver, Query } from "@nestjs/graphql";

@Resolver()
export class RestaurantResolver {

    @Query(returns => Boolean)  // @Query(()) => Boolean) 
    isPizzaGood(): Boolean { // isPizzaGood()
        return true;
    }
} 