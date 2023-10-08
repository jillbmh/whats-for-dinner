from rest_framework import serializers
from ..models import Ingredient
from foodgroups.serializers.common import FoodGroupSerializer

class IngredientSerializer(serializers.ModelSerializer):
    foodgroup = FoodGroupSerializer()
    class Meta:
        model = Ingredient
        fields = '__all__'