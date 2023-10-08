from rest_framework import serializers
from ..models import FoodGroup
from ingredients.models import Ingredient



class FoodGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodGroup
        fields = '__all__'

        # def get_ingredients(self, obj):
        #     from ingredients.serializers.common import IngredientSerializer  # Import here to avoid circular import
        # # Serialize ingredients here
        #     ingredients = Ingredient.objects.filter(foodgroup=obj)
        #     ingredient_serializer = IngredientSerializer(ingredients, many=True)
        #     return ingredient_serializer.data
