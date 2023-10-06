from .common import IngredientSerializer
from ...foodgroups.serializers.common import FoodGroupSerializer

class PopulatedwithFoodGroupsIngredientSerializer(IngredientSerializer):
    foodgroup= FoodGroupSerializer(many=True)
    