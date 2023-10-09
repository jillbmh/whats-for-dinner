from .common import IngredientSerializer
from ...foodgroups.serializers.common import FoodGroupSerializer


#This is not being used. It extends the ingredient serializer and adds a foodgroup 
# field. So it adds (one or many) food group(s) to the ingredient.
class PopulatedwithFoodGroupsIngredientSerializer(IngredientSerializer):
    foodgroup= FoodGroupSerializer(many=True)
    