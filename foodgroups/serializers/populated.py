from .common import FoodGroupSerializer
from ingredients.serializers.common import IngredientSerializer

class PopulatedFoodGroupSerializer(FoodGroupSerializer):
    ingredients = IngredientSerializer(many=True)