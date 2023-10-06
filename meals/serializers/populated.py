from .common import MealSerializer
from ingredients.serializers.common import IngredientSerializer

class PopulatedMealSerializer(MealSerializer):
    ingredients = IngredientSerializer(many=True)