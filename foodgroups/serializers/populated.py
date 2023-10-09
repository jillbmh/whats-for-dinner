from .common import FoodGroupSerializer
from ingredients.serializers.common import IngredientSerializer

# This adds ingredients to the food group.
class PopulatedFoodGroupSerializer(FoodGroupSerializer):
    ingredients_in_foodgroup = IngredientSerializer(many=True)


